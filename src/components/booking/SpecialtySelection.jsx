import React from "react";

function SpecialtySelection({ specialties, onSelectSpecialty, formData }) {
  return (
    <div className="w-full mx-auto mt-8 flex justify-center items-start gap-6">
      <div className="w-[285px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center bg-sky-500">
          <h2 className="text-xl font-bold text-white mx-6 my-3">Thông tin cơ sở y tế</h2>
        </div>
        <div className="flex items-center p-4">
          <i className="fas fa-hospital text-gray-600 mr-2"></i>
          <div>
            <p className="text-base font-medium text-gray-800">{formData.hospitalName}</p> {/* Hiển thị tên bệnh viện */}
            <p className="text-sm text-gray-600 mt-1">{formData.hospitalAddress}</p> {/* Hiển thị địa chỉ bệnh viện */}
          </div>
        </div>
      </div>

      <div className="w-[855px] h-[500px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center justify-center bg-sky-500">
          <h2 className="text-xl font-bold text-center text-white mx-6 my-3">Vui lòng chọn chuyên khoa</h2>
        </div>
        <div className="flex flex-col gap-4 p-6 mb-6 overflow-y-auto h-[calc(100%-56px)]">
          {specialties.length > 0 ? (
            specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => onSelectSpecialty(specialty.name)}
                className="bg-blue-100 text-black p-4 rounded-md shadow-md hover:text-sky-500 hover:shadow-lg transition-all duration-300 text-left"
              >
                <h3 className="text-lg font-medium">{specialty.name}</h3>
                <p className="text-sm">{specialty.description}</p>
              </button>
            ))
          ) : (
            <p className="text-center text-gray-600">Đang tải danh sách chuyên khoa...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecialtySelection;
