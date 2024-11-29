import React from "react";

function ServiceSelection({ formData, onSelectService, services }) {
  console.error("Lỗi khi đặt lịch:", formData);
  return (
    <div className="w-full mx-auto mt-8 flex justify-center items-start gap-6">
      <div className="w-[285px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center bg-sky-500">
          <h2 className="text-xl font-bold text-white mx-6 my-3">Thông tin cơ sở y tế</h2>
        </div>
        <div className="flex items-center p-4">
          <i className="fas fa-hospital text-gray-600 mr-2"></i>
          <div>
          <div>
          <p className="text-base font-medium text-gray-800">{formData.hospitalName}</p> {/* Hiển thị tên bệnh viện */}
          <p className="text-sm text-gray-600 mt-1">{formData.hospitalAddress}</p> {/* Hiển thị địa chỉ bệnh viện */}
          </div>
            {formData.specialty && (
              <p className="text-sm text-gray-600 mt-1">Chuyên khoa: {formData.specialty}</p>
            )}
          </div>
        </div>
      </div>

      <div className="w-[855px] h-[500px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center justify-center bg-sky-500">
          <h2 className="text-xl font-bold text-center text-white mx-6 my-3">Vui lòng chọn dịch vụ</h2>
        </div>
        <div className="flex flex-col gap-4 p-6 mb-6 overflow-y-auto h-[calc(100%-56px)]">
            
        {services && services.length > 0 ? (
    services.map(service => (
      <div
        key={service.id}
        className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
        onClick={() => onSelectService(service)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
        <p className="text-sm text-gray-600">{service.description}</p>
        <p className="text-sm font-medium text-gray-800 mt-2">Giá: {service.price} VND</p>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-600">Không có dịch vụ nào khả dụng.</p>
  )}
        </div>
      </div>
    </div>
  );
}

export default ServiceSelection;