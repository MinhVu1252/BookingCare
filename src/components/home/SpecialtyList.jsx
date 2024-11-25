import React from 'react';

// Dữ liệu về các chuyên khoa
const specialties = [
  { name: 'Bác sĩ Gia Đình', image: "/images/icon-specialties/khoa-bs-giadinh.png" },
  { name: 'Tiêu Hóa Gan Mật', image: '/images/icon-specialties/khoa-tieuhoa-ganmat.png' },
  { name: 'Nội Tổng Quát', image: '/images/icon-specialties/khoa-noi-tongquat.png' },
  { name: 'Nội Tiết', image: '/images/icon-specialties/khoa-noitiet.png' },
  { name: 'Da Liễu', image: '/images/icon-specialties/khoa-dalieu.png' },
  { name: 'Nội Tim Mạch', image: '/images/icon-specialties/khoa-noi-timmach.png' },
  { name: 'Nội Thần Kinh', image: '/images/icon-specialties/khoa-noi-thankinh.png' },
  { name: 'Nội Cơ Xương Khớp', image: '/images/icon-specialties/khoa-noi-coxuongkhop.png' },
  { name: 'Tai Mũi Họng', image: '/images/icon-specialties/khoa-taimuihong.png' },
  { name: 'Mắt', image: '/images/icon-specialties/khoa-mat.png' },
  { name: 'Nội Tiêu Hoà', image: '/images/icon-specialties/khoa-noi-tieuhoa.png' },
  { name: 'Nội Truyền Nhiễm', image: '/images/icon-specialties/khoa-noi-truyennhiem.png' },
  { name: 'Nội Hô Hấp', image: '/images/icon-specialties/khoa-noi-hohap.png' },
  { name: 'Nội Tiết Niệu', image: '/images/icon-specialties/khoa-noi-tietnieu.png' },
  { name: 'Ngoại Cơ Xương Khớp', image: '/images/icon-specialties/khoa-ngoai-coxuongkhop.png' },
  { name: 'Sản - Phụ Khoa', image: '/images/icon-specialties/khoa-san-phukhoa.png' },
];

export function SpecialtyList() {
  return (
    <div className="flex flex-col items-center w-full" style={{ maxWidth: '1180px', margin: '0 auto' }}>
      {/* Tiêu đề */}
      <div className="text-xl font-bold mb-8 text-center" style={{ marginTop: '32px', marginBottom: '32px' }}>
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

        <div className="text-center text-sm font-medium">{specialty.name}</div>
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
              <div className="text-center text-sm font-medium">{specialty.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Link "Xem tất cả" */}
      <div className="mt-4 text-cyan-500 cursor-pointer hover:underline">Xem tất cả &gt;&gt;</div>
    </div>
  );
}
