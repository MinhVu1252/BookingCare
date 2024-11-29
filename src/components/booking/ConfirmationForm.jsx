import React, { useState, useEffect } from "react";

const ConfirmationForm = ({ formData, setFormData, handleSubmit, services }) => {
  // Lấy ngày hiện tại
  const today = new Date().toISOString().split("T")[0];
  console.error("Lỗi khi đặt lịch:", formData);

  // Các khung giờ cố định
  const timeSlots = ["07:00-09:00", "09:00-11:00", "13:00-15:00", "15:00-17:00"];

  // Xử lý thay đổi ngày khám
  const handleDateChange = (e) => {
    setFormData({ ...formData, appointment_date: e.target.value });
  };

  // Xử lý thay đổi giờ khám
  const handleTimeChange = (e) => {
    setFormData({ ...formData, appointment_time: e.target.value });
  };
 // useEffect này sẽ gọi hàm resetForm khi component bị unmount

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
            {formData.specialty && (
              <p className="text-sm text-gray-600 mt-1">Chuyên khoa: {formData.specialty}</p>
            )}
            {formData.services && formData.services.name && (
              <p className="text-sm text-gray-600 mt-1">Dịch vụ: {formData.services.name}</p> 
            )}
          </div>
        </div>
      </div>

      <div className="w-[855px] h-[500px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center justify-center bg-sky-500">
          <h2 className="text-xl font-bold text-center text-white mx-6 my-3">Xác nhận thông tin</h2>
        </div>
        <div className="p-12">
          {/* Họ tên và Giới tính */}
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Họ tên</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Nhập họ tên"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Giới tính</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>

          {/* Số điện thoại và Email */}
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Số điện thoại</label>
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Nhập email"
              />
            </div>
          </div>

          {/* Ngày khám và Giờ khám */}
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Ngày khám</label>
              <input
                type="date"
                value={formData.appointment_date}
                onChange={handleDateChange}
                min={today} // Cấm chọn ngày quá khứ
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Giờ khám</label>
              <select
                value={formData.appointment_time}
                onChange={handleTimeChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Chọn khung giờ</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => { handleSubmit();  }}
              className="bg-sky-500 text-white px-6 py-2 rounded-lg"
            >
              Xác nhận 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationForm;
