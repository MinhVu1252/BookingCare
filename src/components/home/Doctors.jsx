import React from "react";

const doctors = [
    {
      photo: "/images/doctors/dr-nguyen.png",
      rating: 4.9,
      reviews: 143,
      role: "Bác sĩ Chuyên khoa II",
      name: "Nguyễn Văn A",
      specialty: "Tim mạch",
      fee: 500000,
      location: "Bệnh viện Chợ Rẫy",
    },
    {
      photo: "/images/doctors/dr-le.png",
      rating: 4.8,
      reviews: 120,
      role: "Thạc sĩ",
      name: "Lê Thị B",
      specialty: "Nhi khoa",
      fee: 450000,
      location: "Bệnh viện Nhi đồng 1",
    },
    {
      photo: "/images/doctors/dr-tran.png",
      rating: 4.7,
      reviews: 100,
      role: "Bác sĩ Chuyên khoa I",
      name: "Trần Văn C",
      specialty: "Da liễu",
      fee: 400000,
      location: "Bệnh viện Da Liễu TP.HCM",
    },
    {
      photo: "/images/doctors/dr-phan.png",
      rating: 5.0,
      reviews: 180,
      role: "Giáo sư",
      name: "Phan Thị D",
      specialty: "Thần kinh",
      fee: 600000,
      location: "Bệnh viện Nhân dân 115",
    },
    {
      photo: "/images/doctors/dr-vo.png",
      rating: 4.6,
      reviews: 90,
      role: "Thạc sĩ",
      name: "Võ Văn E",
      specialty: "Tai Mũi Họng",
      fee: 350000,
      location: "Bệnh viện Tai Mũi Họng TP.HCM",
    },
    {
      photo: "/images/doctors/dr-ho.png",
      rating: 4.5,
      reviews: 80,
      role: "Bác sĩ Chuyên khoa II",
      name: "Hồ Thị F",
      specialty: "Phụ sản",
      fee: 400000,
      location: "Bệnh viện Từ Dũ",
    },
  ];
  

export function DoctorCard({
  photo,
  rating,
  reviews,
  role,
  name,
  specialty,
  fee,
  location,
  onConsult
}) {
  return (
    <div
      className="w-[300px] p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col items-center text-center hover:scale-105 transition-transform"
    >
      {/* Doctor's Photo */}
      <div className="w-[130px] h-[130px] rounded-full overflow-hidden mb-4">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ratings and Reviews */}
      <div className="text-sm text-gray-600 flex items-center gap-4 mb-2">
        <div className="flex items-center">
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          Đánh giá: {rating.toFixed(1)}
        </div>
        <div className="flex items-center">
          <i className="fas fa-user text-gray-500 mr-1"></i>
          Lượt khám: {reviews}
        </div>
      </div>

      {/* Role */}
      <p className="text-lg text-cyan-500 font-medium mb-2">{role}</p>

      {/* Doctor's Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">{name}</h3>

      {/* Specialty */}
      <div className="flex items-center text-gray-600 text-sm mb-3">
        <i className="fas fa-stethoscope text-cyan-500 mr-2"></i>
        {specialty}
      </div>

      {/* Fee */}
      <div className="flex items-center text-gray-600 text-sm mb-3">
        <i className="fas fa-dollar-sign text-cyan-500 mr-2"></i>
        Giá khám: {fee} VNĐ
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-600 text-sm mb-5">
        <i className="fas fa-map-marker-alt text-cyan-500 mr-2"></i>
        {location}
      </div>

      {/* Consult Button */}
      <button
        onClick={onConsult}
        className="w-full py-2 bg-cyan-500 text-white font-medium text-sm rounded-lg hover:bg-white hover:text-cyan-500 border-2 border-cyan-500 transition-all"
      >
        Tư vấn ngay
      </button>
    </div>
  );
}

export function DoctorList({ doctors, onConsult }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          photo={doctor.photo}
          rating={doctor.rating}
          reviews={doctor.reviews}
          role={doctor.role}
          name={doctor.name}
          specialty={doctor.specialty}
          fee={doctor.fee}
          location={doctor.location}
          onConsult={() => onConsult(doctor)}
        />
      ))}
    </div>
  );
}
