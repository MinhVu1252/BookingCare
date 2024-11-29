import React, { useState } from "react";

export function Search({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  // Gọi hàm onSearch khi người dùng nhấn nút Search
  const handleSearch = () => {
    onSearch({ searchText, locationFilter, priceFilter });
  };

  // Gọi hàm onSearch ngay khi thay đổi Location
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationFilter(value);
    onSearch({ searchText, locationFilter: value, priceFilter });
  };

  // Gọi hàm onSearch ngay khi thay đổi Price
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceFilter(value);
    onSearch({ searchText, locationFilter, priceFilter: value });
  };

  return (
    <div className="bg-yellow-400 p-5 rounded-lg shadow-md w-full max-w-6xl mx-auto mt-12 mb-12">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          class="ml-3 px-4 py-2 bg-gray-200 rounded-full font-bold hover:bg-gray-300"
          onClick={handleSearch} // Thực hiện tìm kiếm khi nhấn nút
        >
          Search
        </button>
      </div>

      <div className="flex justify-between">
        <select
          className="px-4 py-2 rounded-full border border-gray-300 bg-white w-1/5 focus:outline-none cursor-pointer"
          value={locationFilter}
          onChange={handleLocationChange} // Tự động tìm kiếm khi thay đổi khu vực
        >
          <option value="">Khu vực</option>
          <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
          <option value="Thành phố Hà Nội">Thành phố Hà Nội</option>
          <option value="Thành phố Đà Nẵng">Thành phố Đà Nẵng</option>
          <option value="Thành phố Cần Thơ">Thành phố Cần Thơ</option>
        </select>

        <select
          className="px-4 py-2 rounded-full border border-gray-300 bg-white w-1/5 focus:outline-none cursor-pointer"
          value={priceFilter}
          onChange={handlePriceChange} // Tự động tìm kiếm khi thay đổi mức giá
        >
          <option value="">Mức giá</option>
          <option value="low">Dưới 2,000,000đ</option>
          <option value="mid">2,000,000đ - 4,000,000đ</option>
          <option value="high">Trên 4,000,000đ</option>
        </select>
      </div>
    </div>
  );
}
