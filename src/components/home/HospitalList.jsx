import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HospitalCard } from './HospitalCard';

export function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const hospitalsPerPage = 4;

  // Fetch dữ liệu từ API
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hospitals');
        // Kiểm tra nếu response là mảng và có dữ liệu
        if (Array.isArray(response.data) && response.data.length > 0) {
          setHospitals(response.data);
        } else {
          console.error('Dữ liệu bệnh viện không hợp lệ:', response.data);
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu bệnh viện:', error);
      }
    };

    fetchHospitals();
  }, []);

  // Phân trang
  const indexOfLastHospital = (currentPage + 1) * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = hospitals.slice(indexOfFirstHospital, indexOfLastHospital);

  const nextPage = () => {
    if (currentPage < Math.ceil(hospitals.length / hospitalsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Tiêu đề */}
      <div className="text-xl font-bold mb-4 text-center">
        CƠ SỞ Y TẾ ĐẶT KHÁM NHIỀU NHẤT
      </div>

      {/* Container cho các card bệnh viện và nút điều hướng */}
      <div className="relative flex items-center w-full justify-center gap-4 mt-5">
        {/* Nút trước */}
        <button
          onClick={prevPage}
          className="absolute left-0 text-gray-500 bg-white w-6 h-6 text-xl font-bold flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-100 transition-all"
          aria-label="Trang trước"
          style={{ marginLeft: '100px' }}
          disabled={currentPage === 0} // Disable khi đang ở trang đầu
        >
          &lt;
        </button>

        {/* Danh sách bệnh viện */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {currentHospitals.length > 0 ? (
            currentHospitals.map((hospital, index) => (
              <HospitalCard
                key={index}
                logo={hospital.logo}
                name={hospital.name}
                address={hospital.location}  
                rating={hospital.rating}
                reviews={hospital.reviews}  
              />
            ))
          ) : (
            <div className="w-full text-center text-gray-500">Không có dữ liệu bệnh viện</div>
          )}
        </div>

        {/* Nút sau */}
        <button
          onClick={nextPage}
          className="absolute right-0 text-gray-700 w-10 h-10 text-xl font-bold flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-200 transition-all"
          aria-label="Trang sau"
          style={{ marginRight: '100px' }}
          disabled={currentPage >= Math.ceil(hospitals.length / hospitalsPerPage) - 1} // Disable khi đã ở trang cuối
        >
          &gt;
        </button>
      </div>

      {/* Link "Xem tất cả" */}
      <div className="mt-4 text-cyan-500 cursor-pointer">Xem tất cả &gt;&gt;</div>
    </div>
  );
}
