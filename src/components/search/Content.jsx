import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Time } from "./Time"; // Import Time component

export function Content() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/medicals")
      .then((response) => response.json())
      .then((data) => {
        setPackages(data);
        setFilteredPackages(data); // Ban đầu hiển thị toàn bộ gói khám
      })
      .catch((error) =>
        console.error("Error fetching medical packages:", error)
      );
  }, []);

  const handleSearch = ({ searchText, locationFilter, priceFilter }) => {
    let filtered = packages;

    // Lọc theo từ khóa
    if (searchText) {
      filtered = filtered.filter((pkg) =>
        pkg.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Lọc theo khu vực
    if (locationFilter) {
      filtered = filtered.filter((pkg) => pkg.location === locationFilter);
    }

    // Lọc theo mức giá
    if (priceFilter) {
      filtered = filtered.filter((pkg) => {
        const price = parseInt(pkg.price.replace(/[^0-9]/g, ""), 10);
        if (priceFilter === "low") return price < 2000000;
        if (priceFilter === "mid") return price >= 2000000 && price <= 4000000;
        if (priceFilter === "high") return price > 4000000;
        return true;
      });
    }

    setFilteredPackages(filtered);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1150px] mx-auto">
      <Search onSearch={handleSearch} />
      {filteredPackages.map((pkg) => (
        <div
          key={pkg.id}
          className="package-card flex w-full bg-white shadow-lg rounded-lg overflow-hidden mb-10"
        >
          <div className="package-left flex-1 p-5 flex">
            <div className="package-image">
              <img
                src={`http://localhost:5000/images/${pkg.image}`}
                alt={pkg.title}
                className="max-w-[140px] rounded-md mb-2 shadow-md mr-2"
              />
              <Link to={`/Detail/${pkg.id}`}>
                <div className="text-blue-400 cursor-pointer">Xem chi tiết</div>
              </Link>
            </div>
            <div className="package-content">
              <h3 className="package-title text-xl text-gray-800 mb-2">
                <span className="highlight text-blue-400 font-bold">
                  {pkg.title}
                </span>
              </h3>
              <p className="package-description text-lg text-gray-500 mb-2">
                {pkg.description}
              </p>
              <div className="package-location text-sm text-gray-400 flex items-center">
                <i className="location-icon text-xl mr-2">📍</i>
                <div className="countries text-lg font-bold">
                  {pkg.location}
                </div>
              </div>
            </div>
          </div>

          <div className="package-right flex-1 p-5 border-l border-gray-200">
            <div className="appointment-header text-xl font-medium mb-2 text-gray-800">
              Lịch gói
            </div>
            {/* Gọi component Time và truyền pkg.times vào */}
            <Time times={pkg.times} />
            <div className="appointment-info text-sm text-gray-500">
              <div>
                <div className="address text-lg font-bold">Địa chỉ:</div>
                <div className="hospital-name text-lg font-medium text-black my-2">
                  {pkg.hospital_name}
                </div>
              </div>
              <div className="address-name text-lg text-black mb-2">
                {pkg.address}
              </div>
              <div className="appointment-price flex mb-2">
                <div className="package-price-label text-lg font-bold mr-2">
                  Giá gói:
                </div>
                <div className="package-price-value text-lg">{pkg.price}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
