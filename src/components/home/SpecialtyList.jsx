import React from "react";
import icon1 from "../../assets/icons/icon-specialties/khoa-bs-giadinh.png";
import icon2 from "../../assets/icons/icon-specialties/khoa-tieuhoa-ganmat.png";
import icon3 from "../../assets/icons/icon-specialties/khoa-noi-tongquat.png";
import icon4 from "../../assets/icons/icon-specialties/khoa-noitiet.png";
import icon5 from "../../assets/icons/icon-specialties/khoa-dalieu.png";
import icon6 from "../../assets/icons/icon-specialties/khoa-noi-timmach.png";
import icon7 from "../../assets/icons/icon-specialties/khoa-noi-thankinh.png";
import icon8 from "../../assets/icons/icon-specialties/khoa-noi-coxuongkhop.png";
import icon9 from "../../assets/icons/icon-specialties/khoa-taimuihong.png";
import icon10 from "../../assets/icons/icon-specialties/khoa-mat.png";
import icon11 from "../../assets/icons/icon-specialties/khoa-noi-tieuhoa.png";
import icon12 from "../../assets/icons/icon-specialties/khoa-noi-truyennhiem.png";
import icon13 from "../../assets/icons/icon-specialties/khoa-noi-hohap.png";
import icon14 from "../../assets/icons/icon-specialties/khoa-noi-tietnieu.png";
import icon15 from "../../assets/icons/icon-specialties/khoa-ngoai-coxuongkhop.png";
import icon16 from "../../assets/icons/icon-specialties/khoa-san-phukhoa.png";

// Dữ liệu về các chuyên khoa
const specialties = [
  {
    name: "Bác sĩ Gia Đình",
    image: icon1,
  },
  {
    name: "Tiêu Hóa Gan Mật",
    image: icon2,
  },
  {
    name: "Nội Tổng Quát",
    image: icon3,
  },
  { name: "Nội Tiết", image: icon4 },
  { name: "Da Liễu", image: icon5 },
  {
    name: "Nội Tim Mạch",
    image: icon6,
  },
  {
    name: "Nội Thần Kinh",
    image: icon7,
  },
  {
    name: "Nội Cơ Xương Khớp",
    image: icon8,
  },
  {
    name: "Tai Mũi Họng",
    image: icon9,
  },
  { name: "Mắt", image: icon10 },
  {
    name: "Nội Tiêu Hoà",
    image: icon11,
  },
  {
    name: "Nội Truyền Nhiễm",
    image: icon12,
  },
  { name: "Nội Hô Hấp", image: icon13 },
  {
    name: "Nội Tiết Niệu",
    image: icon14,
  },
  {
    name: "Ngoại Cơ Xương Khớp",
    image: icon15,
  },
  {
    name: "Sản - Phụ Khoa",
    image: icon16,
  },
];

export function SpecialtyList() {
  return (
    <div
      className="flex flex-col items-center w-full"
      style={{ maxWidth: "1180px", margin: "0 auto" }}
    >
      {/* Tiêu đề */}
      <div
        className="text-xl font-bold mb-8 text-center"
        style={{ marginTop: "32px", marginBottom: "32px" }}
      >
        CHUYÊN KHOA
      </div>

      {/* Danh sách các khoa */}
      <div className="flex flex-col items-center w-full">
        {/* Hàng đầu tiên của các khoa */}
        <div className="flex justify-center w-full gap-4 mb-4">
          {specialties.slice(0, 8).map((specialty, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[calc(100%/8)] h-[calc(345px/2)] bg-white shadow-md rounded-md border-2 border-transparent hover:border-sky-500 hover:shadow-lg transition-transform transform hover:scale-105 p-2"
            >
              <div className="w-20 h-20 overflow-hidden rounded-full mb-2">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center text-sm font-medium">
                {specialty.name}
              </div>
            </div>
          ))}
        </div>

        {/* Hàng thứ hai của các khoa */}
        <div className="flex justify-center w-full gap-4">
          {specialties.slice(8).map((specialty, index) => (
            <div
              key={index + 8}
              className="flex flex-col items-center justify-center w-[calc(100%/8)] h-[calc(345px/2)] bg-white shadow-md rounded-md border-2 border-transparent hover:border-sky-500 hover:shadow-lg transition-transform transform hover:scale-105 p-2"
            >
              <img
                src={specialty.image}
                alt={specialty.name}
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <div className="text-center text-sm font-medium">
                {specialty.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Link "Xem tất cả" */}
      <div className="mt-4 text-cyan-500 cursor-pointer hover:underline">
        Xem tất cả &gt;&gt;
      </div>
    </div>
  );
}
