import React from "react";
import { useNavigate } from "react-router-dom";

export function HospitalCard({ logo, name, address, rating, id }) {
  const navigate = useNavigate(); // Hook để điều hướng

  const handleBooking = () => {
    // Điều hướng đến trang "booking" kèm thông tin bệnh viện
    navigate("/booking", { state: { name, address, hospitalId: id } });
  };

  return (
    <div className="w-[277px] h-[385px] p-3 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col hover:scale-105 transition-transform">
      {/* Card Image */}
      <div className="h-[188px] w-full flex justify-center items-center mb-4 bg-gray-100 rounded-t-lg">
        <img
          src={`http://localhost:5000/images/${logo}`} // Cập nhật đường dẫn ảnh từ server
          alt={name}
          className="h-[130px] object-contain"
        />
      </div>

      {/* Card Content */}
      <div className="text-left w-full">
        {/* Name */}
        <h3
          className="text-lg font-bold text-gray-800 mb-2 truncate overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>

        {/* Address */}
        <p
          className="text-sm text-gray-600 mb-3 flex items-center truncate overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          <i className="fas fa-map-marker-alt text-cyan-500 mr-2"></i>{" "}
          {/* Icon địa chỉ */}
          {address}
        </p>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 mb-4">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <i key={i} className="fas fa-star mr-1"></i>
          ))}
          {rating % 1 !== 0 && <i className="fas fa-star-half-alt mr-1"></i>}
          <span className="text-sm font-semibold text-gray-700 ml-2">
            ({rating})
          </span>
        </div>

        {/* Booking Button */}
        <button
          onClick={handleBooking}
          className="w-full py-2 bg-cyan-500 text-white font-medium text-sm rounded-lg hover:bg-white hover:text-cyan-500 border-2 border-cyan-500 transition-all"
        >
          Đặt khám ngay
        </button>
      </div>
    </div>
  );
}
