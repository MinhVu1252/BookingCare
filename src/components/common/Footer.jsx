import React from "react";
import logo from "../../assets/images/logo-img.png";

export function Footer() {
  return (
    <div className="bg-gray-500 text-white py-12 relative flex items-center w-full justify-center">
      {/* Thông tin liên hệ */}
      <div className="text-center mb-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="BookingCare Logo" className="w-70" />
        </div>
        <p className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
          Địa chỉ: 236/29/18 Điện Biên Phủ - Phường 17 - Quận Bình Thạnh -
          TPHCM.
        </p>
        <p className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
          Website:{" "}
          <a
            href="https://medpro.vn"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://medpro.vn
          </a>
        </p>
        <p className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
          Email:{" "}
          <a
            href="mailto:cskh@medpro.vn"
            className="text-cyan-400 hover:underline"
          >
            cskh@medpro.vn
          </a>
        </p>
        <p className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
          Điện thoại: (028) 710 78098
        </p>
      </div>

      {/* Dịch vụ y tế */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left mb-6 px-20">
        <div>
          <h3 className="font-semibold text-lg mb-2">Dịch vụ Y tế</h3>
          <ul>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Đặt khám tại cơ sở
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Đặt khám theo bác sĩ
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Tư vấn khám bệnh qua video
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Đặt lịch xét nghiệm
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Gói khám sức khỏe
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Đặt lịch tiêm chủng
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Y tế tại nhà
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Thanh toán Viện phí
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Cơ sở y tế</h3>
          <ul>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Bệnh viện công
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Bệnh viện tư
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Phòng khám
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Phòng mạch
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Xét nghiệm
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Y tế tại nhà
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Tiêm chủng
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Hướng dẫn</h3>
          <ul>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Cài đặt ứng dụng
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Đặt lịch khám
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Tư vấn khám bệnh qua video
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Quy trình hoàn phí
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Câu hỏi thường gặp
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Quy trình đi khám
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Tin tức</h3>
          <ul>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Tin tức
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Tin dịch vụ
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Tin Y Tế
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Y Học thường thức
            </li>
          </ul>
        </div>

        <div className="text-left mb-6 px-4">
          <h3 className="font-semibold text-lg mb-2">Về Medpro</h3>
          <ul className="text-sm">
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Giới thiệu
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Điều khoản dịch vụ
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Chính sách bảo mật
            </li>
            <li className="text-sm text-[14px] hover:text-cyan-400 transition-colors">
              Quy định sử dụng
            </li>
          </ul>
        </div>
        {/* Tham gia Medpro */}
        <div className="text-center">
          <a href="https://medpro.vn" className="text-cyan-400 hover:underline">
            Tham gia Medpro
          </a>
        </div>
      </div>

      {/* Về Medpro */}
    </div>
  );
}
