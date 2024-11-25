import React from "react";

import banner2 from "./banner-img2.png";


const features = [
    { icon: "/images/icon-banner/icon1.png", text: "Đặt khám tại cơ sở" },
    { icon: "/images/icon-banner/icon2.png", text: "Đặt khám theo bác sĩ" },
    { icon: "/images/icon-banner/icon3.png", text: "Tư vấn khám bệnh qua video" },
    { icon: "/images/icon-banner/icon4.png", text: "Đặt lịch xét nghiệm" },
    { icon: "/images/icon-banner/icon5.png", text: "Gói khám sức khỏe" },
    { icon: "/images/icon-banner/icon6.png", text: "Đặt lịch tiêm chủng" },
    { icon: "/images/icon-banner/icon7.png", text: "Y tế tại nhà" },
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
            <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full px-6 py-3 rounded-lg text-lg text-gray-800 bg-white shadow-md"
            />
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
