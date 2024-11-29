import React from "react";
import logo from "../../assets/images/logo-img.png";

const menuItems = [
  {
    label: "Cơ sở y tế",
    dropdown: [
      "Bệnh viện công",
      "Bệnh viện tư",
      "Phòng khám",
      "Phòng mạch",
      "Xét nghiệm",
      "Y tế tại nhà",
      "Tiêm chủng",
    ],
  },
  {
    label: "Dịch vụ y tế",
    dropdown: [
      "Đặt khám tại cơ sở",
      "Đặt khám theo bác sĩ",
      "Tư vấn khám bệnh qua video",
      "Đặt lịch xét nghiệm",
      "Gói khám sức khỏe",
      "Đặt lịch tiêm chủng",
      "Y tế tại nhà",
      "Thanh toán viện phí",
    ],
  },
  {
    label: "Khám sức khỏe doanh nghiệp",
    dropdown: ["Dịch vụ khám tại sơ sở", "Dịch vụ khám tại công ty"],
  },
  {
    label: "Tin tức",
    dropdown: ["Tin dịch vụ", "Tin y tế", "Y học thường thức"],
  },
  {
    label: "Hướng dẫn",
    dropdown: [
      "Cài đặt ứng dụng",
      "Đặt lịch khám",
      "Tư vấn qua video",
      "Quy trình hoàn phí",
      "Câu hỏi thường gặp",
    ],
  },
  {
    label: "Liên hệ hợp tác",
    dropdown: [
      "Tham gia BookingCare",
      "Quảng cáo",
      "Tuyển dụng",
      "Về BookingCare",
    ],
  },
];

export function Header() {
  return (
    <header className="flex items-center justify-between px-14 py-2 bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="BookingCare Logo" className="h-10 mr-4" />
      </div>

      {/* Menu */}
      <nav className="hidden md:flex space-x-4">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <button className="font-roboto text-black text-[16px] font-bold hover:text-blue-400 w-full px-3 py-5">
              {item.label}
            </button>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 opacity-0 group-hover:opacity-100 transition-all"></div>
            {/* Dropdown */}
            {item.dropdown.length > 0 && (
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-0 rounded w-max z-10 border border-gray-200">
                {item.dropdown.map((dropdownItem, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 text-gray-600 font-bold text-[13px] hover:bg-blue-100 hover:text-blue-500 cursor-pointer whitespace-nowrap"
                  >
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-customBlue text-2xl">☰</button>
      </div>
    </header>
  );
}
