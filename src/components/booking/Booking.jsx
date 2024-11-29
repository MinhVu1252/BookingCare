import React, { useState, useEffect } from "react"; // Import React hooks
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate, useLocation
import axios from "axios"; // Import axios
import FormTypeSelection from "./FormTypeSelection"; // Import các component con
import SpecialtySelection from "./SpecialtySelection";
import ServiceSelection from "./ServiceSelection";
import ConfirmationForm from "./ConfirmationForm";
import ConfirmationDetails from "./ConfirmationDetails";

export function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [specialties, setSpecialties] = useState([]); // Danh sách chuyên khoa
  const [services, setServices] = useState([]); // Danh sách dịch vụ
  const [confirmStep, setConfirmStep] = useState(false);
  
  // Lấy thông tin bệnh viện từ location.state và thêm vào formData
  const { name, address, hospitalId } = location.state || {};
  const [formData, setFormData] = useState({
    formType: "",
    specialty: "",
    services: {},
    appointment_date: "",
    appointment_time: "",
    fullName: "", // Họ tên người đăng ký
    phoneNumber: "", // Số điện thoại
    email: "", // Email
    status: "", // trạng thái đặt thành công
    hospitalName: name || "", // Thêm trường tên bệnh viện
    hospitalAddress: address || "",
    hospitalId: hospitalId // Thêm trường địa chỉ bệnh viện
  });

  // Danh sách các bước
  const steps = [
    "Hình thức đặt khám", // Bước 1
    "Chọn chuyên khoa", // Bước 2
    "Chọn dịch vụ", // Bước 3
    "Nhập thông tin liên hệ", // Bước 4
    "Xác nhận và hoàn tất" // Bước 4
  ];

  // Cập nhật hình thức đặt khám
  const handleSelectFormType = (type) => {
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        formType: type,
        specialty: "" // Reset chuyên khoa khi chọn hình thức khác
      };
      console.log("FormData sau khi chọn hình thức khám:", updatedData);
      return updatedData;
    });
    if (type === "specialty") {
      setStep(2); // Chuyển sang bước chọn chuyên khoa
    } else if (type === "service") {
      setStep(3); // Chuyển thẳng đến bước chọn dịch vụ (bỏ qua bước chọn chuyên khoa)
    }
  };

  const handleSelectSpecialty = (specialty) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, specialty };
      console.log("FormData sau khi chọn chuyên khoa:", updatedData);
      return updatedData;
    });
    setStep(3); // Chuyển sang bước chọn dịch vụ
  };

  const handleSelectService = (service) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, services: service };
      console.log("FormData sau khi chọn dịch vụ:", updatedData);
      return updatedData;
    });
    setStep(4); // Chuyển sang bước cuối
  };

  const handleSubmit = () => {
    // Kiểm tra nếu tất cả các trường đã được điền
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.appointment_date || !formData.appointment_time) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    console.log("FormData khi điền đầy đủ thông tin:", formData);
    setStep(5);  // Chuyển sang bước 5
  };

  const handleFinalSubmit = () => {
    // Kiểm tra nếu tất cả các trường đã được điền
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.appointment_date || !formData.appointment_time) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    // Chuẩn bị dữ liệu gửi đi
    const dataToSubmit = {
      fullName: formData.fullName,
      gender: formData.gender,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      appointment_date: formData.appointment_date,
      appointment_time: formData.appointment_time,
      hospitalId: hospitalId, // Dùng ID của bệnh viện
      specialty: formData.specialty, // Chuyên khoa đã chọn
      servicesId: formData.services.id, // Dùng ID dịch vụ đã chọn
    };
  
    console.log("Dữ liệu sẽ gửi đi:", dataToSubmit);
  
    // Gửi dữ liệu tới server
    axios
      .post("http://localhost:5000/api/bookings", dataToSubmit) // API của bạn
      .then((response) => {
        console.log("Đặt lịch thành công:", response.data);
        navigate("/confirmation"); // Điều hướng sang trang xác nhận
      })
      .catch((error) => {
        console.error("Lỗi khi đặt lịch:", error);
      });
  };

  
  

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1); // Giảm bước xuống 1 nếu không phải bước đầu tiên
    }
  };

  useEffect(() => {
    if (formData.formType === "specialty" && hospitalId) {
      axios
        .get(`http://localhost:5000/api/hospitals/${hospitalId}/specialties`)
        .then((response) => {
          setSpecialties(response.data);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy danh sách chuyên khoa", error);
        });
    }
  }, [formData.formType, hospitalId]);

  useEffect(() => {
    if (step === 3 && hospitalId) {
      let type = null;
  
      // Xác định type dựa trên formType và specialty
      if (formData.formType === "specialty" && formData.specialty) {
        type = 1;
      } else if (formData.formType === "service") {
        type = 2;
      }
  
      // Nếu xác định được type, gọi API
      if (type !== null) {
        axios
          .get(`http://localhost:5000/api/services/${hospitalId}/${type}`)
          .then((response) => {
            console.log("Dữ liệu từ API:", response.data);
            setServices(response.data); // Lưu danh sách dịch vụ
          })
          .catch((error) => {
            console.error("Lỗi khi lấy danh sách dịch vụ:", error);
          });
      }
    }
  }, [step, hospitalId, formData]);

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      {/* Đường dẫn bước thực hiện */}
      <nav
        className="w-[1180px] h-[65px] flex items-center text-base font-bold text-gray-800 mb-4"
        style={{
          padding: "20px",
          margin: "0 auto", // Canh giữa toàn bộ container trong bố cục trang
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="text-black hover:underline focus:outline-none"
        >
          Trang chủ
        </button>
        <i className="fas fa-chevron-right mx-2 text-gray-500"></i>
        <span className="text-gray-700">{formData.hospitalName || "Thông tin bệnh viện"}</span> {/* Hiển thị tên bệnh viện */}
        <i className="fas fa-chevron-right mx-2 text-gray-500"></i>
        <span className="text-sky-500">{steps[step - 1]}</span> {/* Hiển thị tên bước hiện tại */}
      </nav>

      {step === 1 && <FormTypeSelection onSelectFormType={handleSelectFormType} />}

      {step === 2 && <SpecialtySelection
        specialties={specialties}
        onSelectSpecialty={handleSelectSpecialty}
        formData={formData} // Truyền formData thay vì name và address
      />}

      {step === 3 && (
        <ServiceSelection
          formData={formData} // Truyền formData thay vì name và address
          onSelectService={handleSelectService}
          services={services}
        />
      )}

      {step === 4 && (
        <ConfirmationForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          services={formData.services} // Dùng formData.services thay vì services trực tiếp
        />
      )}

      {step === 5 && (
        <ConfirmationDetails
          formData={formData} // Truyền formData thay vì name và address
          handleFinalSubmit={handleFinalSubmit}
          setStep={setStep}
        />
      )}

      {/* Nút quay lại */}
      <div className="flex justify-between mb-4 w-[700px] mx-auto mt-14">
        <button
          onClick={prevStep}
          className="flex items-baseline text-gray-800 font-medium"
          disabled={step === 1}
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Quay lại
        </button>
      </div>
    </div>
  );
}
