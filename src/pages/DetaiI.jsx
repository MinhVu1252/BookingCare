import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function Detail() {
  const [packageData, setPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/medicals/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch package data");
        }
        const data = await response.json();
        setPackageData(data);
      } catch (err) {
        setError("An error occurred while fetching the package data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackageData();
  }, [id]);

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 p-4" role="alert">
        {error}
      </div>
    );
  if (!packageData)
    return <div className="text-center p-4">No package data found.</div>;

  return (
    <div className="container mx-auto p-5 max-w-screen-xl">
      <header className="flex gap-6 mb-6 bg-white p-4 rounded shadow">
        <div className="flex-1">
          <img
            src={`http://localhost:5000/images/${packageData.image}`}
            alt={packageData.title}
            className="header-image w-20 h-20 rounded-full object-cover mb-3"
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
            {packageData.title}
          </h1>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            {packageData.description}
          </p>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            Gói xét nghiệm tại {packageData.hospital_name}.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            {packageData.location}
          </p>
        </div>
      </header>

      <main className="flex gap-6 flex-col md:flex-row">
        <section className="flex-2 bg-white p-5 rounded shadow">
          <h2 className="text-blue-600 text-lg font-medium mb-4 flex items-center gap-1">
            Hôm nay - {new Date().toLocaleDateString("vi-VN")}
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {packageData.times.map((time, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 transition duration-200"
              >
                {time}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500">Chọn và đặt (Phí đặt lịch 0đ)</p>
        </section>

        <aside className="flex-1">
          <div className="bg-white p-5 rounded shadow mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              ĐỊA CHỈ XÉT NGHIỆM
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {packageData.hospital_name}
            </p>
            <p className="text-sm text-gray-600">{packageData.address}</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-gray-700">
                DANH SÁCH CƠ SỞ XÉT NGHIỆM
              </h3>
              <button className="text-blue-600 text-sm hover:underline">
                Xem chi tiết
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm text-gray-700">GIÁ XÉT NGHIỆM:</h3>
              <span className="text-sm text-gray-700">{packageData.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-sm text-gray-700">LOẠI BẢO HIỂM ÁP DỤNG:</h3>
              <button className="text-blue-600 text-sm hover:underline">
                Xem chi tiết
              </button>
            </div>
          </div>
        </aside>
      </main>

      <section className="bg-white p-5 rounded shadow mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {packageData.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {packageData.content}
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Gói xét nghiệm tại {packageData.hospital_name}.
        </h2>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {packageData.hospital_description}
        </p>
      </section>
    </div>
  );
}
