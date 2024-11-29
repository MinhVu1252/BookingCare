import React from "react";
import { Link } from "react-router-dom";

import banner2 from "../../assets/images/banner-img2.png";
import icon1 from "../../assets/icons/icon-banner/icon1.png";
import icon2 from "../../assets/icons/icon-banner/icon2.png";
import icon3 from "../../assets/icons/icon-banner/icon3.png";
import icon4 from "../../assets/icons/icon-banner/icon4.png";
import icon5 from "../../assets/icons/icon-banner/icon5.png";
import icon6 from "../../assets/icons/icon-banner/icon6.png";
import icon7 from "../../assets/icons/icon-banner/icon7.png";

const features = [
  {
    icon: icon1,
    text: "Đặt khám tại cơ sở",
  },
  { icon: icon2, text: "Đặt khám theo bác sĩ" },
  { icon: icon3, text: "Tư vấn khám bệnh qua video" },
  { icon: icon4, text: "Đặt lịch xét nghiệm" },
  { icon: icon5, text: "Gói khám sức khỏe" },
  { icon: icon6, text: "Đặt lịch tiêm chủng" },
  { icon: icon7, text: "Y tế tại nhà" },
];

export function Banner() {
  return (
    <section
      className="relative w-full h-[480px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="absolute inset-0 bg-cyan-100 opacity-10"></div>

      {/* Nội dung banner */}
      <div className="relative z-10 text-white px-6 py-10 flex items-center justify-center h-full">
        <div className="max-w-2xl text-center">
          <h1 className="text-sky-500 text-xl sm:text-xl font-bold mb-4">
            Nền tảng công nghệ
          </h1>
          <p className="text-sky-900 font-semibold text-2xl sm:text-3xl mb-6">
            Kết nối người dân với Cơ sở - Dịch vụ Y tế
          </p>

          {/* Ô tìm kiếm */}
          <div className="w-full max-w-lg mx-auto mb-6">
            <Link to="/MedicalPackageSearch">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full px-6 py-3 rounded-lg text-lg text-gray-800 bg-white shadow-md"
                readOnly
              />
            </Link>
          </div>
          <p className="text-sky-900 font-semi text-sm sm:text-xl mb-6">
            Đặt khám nhanh - Lấy số thứ tự trực tuyến - Tư vấn sức khỏe từ xa
          </p>
        </div>
      </div>

      {/* Danh sách chức năng */}
      <div className="flex flex-wrap justify-center gap-5 px-4">
        {features.map((feature, index) => {
          const imageUrl = feature.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-md border-2 border-transparent hover:border-sky-500 hover:shadow-lg transition-transform transform hover:scale-105 w-[150px] h-[150px] p-2"
            >
              <img
                src={imageUrl}
                alt={feature.text}
                className="w-[60px] h-[60px] mt-4 mb-2"
              />
              <p className="text-gray-800 text-[16px] font-medium text-center">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
