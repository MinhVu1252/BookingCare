import React from "react";

const ConfirmationDetails = ({ name, address, formData, handleFinalSubmit, setStep }) => {
  console.error("Lỗi khi đặt lịch:", formData);

  return (
    <div className="w-[900px] bg-white rounded-lg overflow-hidden shadow-lg mx-auto ">
      <div className="bg-sky-500 p-3 rounded-t-lg">
        <h2 className="text-xl font-bold text-center text-white">Xác nhận thông tin đặt lịch</h2>
      </div>
      <div className=" p-10 space-y-6">
        {/* Thông tin bệnh viện */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Thông tin bệnh viện</h3>
          <div className="space-y-1 text-gray-600">
            <p><span className="font-medium">Tên:</span> {name}</p>
            <p><span className="font-medium">Địa chỉ:</span> {address}</p>
            <p><span className="font-medium">Chuyên khoa:</span> {formData.specialty || "Chưa chọn dịch vụ"}</p>
            <p><span className="font-medium">Dịch vụ:</span> {formData.services?.name || "Chưa chọn dịch vụ"}</p>
          </div>
        </div>

        {/* Thông tin cá nhân */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Thông tin cá nhân</h3>
          <div className="space-y-1 text-gray-600">
            <p><span className="font-medium">Họ tên:</span> {formData.fullName}</p>
            <p><span className="font-medium">Số điện thoại:</span> {formData.phoneNumber}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
          </div>
        </div>

        {/* Thông tin đặt khám */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Thông tin đặt khám</h3>
          <div className="space-y-1 text-gray-600">
            <p><span className="font-medium">Ngày khám:</span> {formData.appointment_date}</p>
            <p><span className="font-medium">Giờ khám:</span> {formData.appointment_time}</p>
          </div>
        </div>
        {/* Nút hành động */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setStep(4)}
          className="text-sky-500 font-medium underline hover:text-sky-700"
        >
          Sửa thông tin
        </button>
        <button
          onClick={handleFinalSubmit}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Xác nhận và đặt lịch
        </button>
      </div>
      </div>

      
    </div>
  );
};

export default ConfirmationDetails;
