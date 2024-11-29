import React from "react";
import icon1 from "../../assets/icons/icon-banner/icon1.png";
import icon5 from "../../assets/icons/icon-banner/icon5.png";
function FormTypeSelection({ onSelectFormType, step }) {
  const steps = [
    "Hình thức đặt khám", // Bước 1
    "Chọn chuyên khoa", // Bước 2
    "Chọn dịch vụ", // Bước 3
    "Xác nhận và hoàn tất", // Bước 4
  ];

  return (
    <div>
      <div className="w-[700px] mx-auto text-center mb-6 mt-5">
        <h1 className="text-3xl font-bold text-sky-500 mb-2">
          Các hình thức đặt khám
        </h1>
        <p className="text-base text-gray-800">
          Đặt khám nhanh chóng, không phải chờ đợi với nhiều cơ sở y tế trên
          khắp các tỉnh thành
        </p>
      </div>
      <div className="w-[700px] mx-auto flex flex-col mt-14 gap-6">
        <div className="flex gap-6 w-full">
          {/* Card 1: Đặt khám theo chuyên khoa */}
          <button
            onClick={() => onSelectFormType("specialty")}
            className="flex items-center w-1/2 h-[72px] p-[17.5px] bg-white border rounded-md shadow-md hover:shadow-lg"
          >
            <img
              src={icon1}
              alt="Đặt khám theo chuyên khoa"
              className="w-[35px] h-[35px] mr-4"
            />
            <span className="text-base font-medium text-gray-800">
              Đặt khám theo chuyên khoa
            </span>
          </button>

          {/* Card 2: Gói khám sức khỏe */}
          <button
            onClick={() => onSelectFormType("service")}
            className="flex items-center w-1/2 h-[72px] p-[17.5px] bg-white border rounded-md shadow-md hover:shadow-lg"
          >
            <img
              src={icon5}
              alt="Gói khám sức khỏe"
              className="w-[35px] h-[35px] mr-4"
            />
            <span className="text-base font-medium text-gray-800">
              Gói khám sức khỏe
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormTypeSelection;
