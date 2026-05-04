import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import dữ liệu
import { datacapnhatthuevaphaply } from "../../Data/datathuevaphaply";

export default function FeaturedSlider() {
    const dataFeatured = datacapnhatthuevaphaply;
  return (
      <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper shadow-sm"
>
  {dataFeatured.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="flex flex-col md:flex-row bg-white border border-gray-100 overflow-hidden group cursor-pointer h-auto md:h-[450px] items-stretch">
        
        <div className="md:w-2/3 w-full h-64 md:h-full overflow-hidden">
          <img 
            src={item.img} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt={item.title}
          />
        </div>

        <div className="md:w-1/3 p-10 flex flex-col justify-center bg-[#fcfcfc] text-left">
          <span className="text-[#7ca91e] font-bold text-[10px] uppercase tracking-widest mb-4 block">
            {item.title}
          </span>
          
          {/* Dùng line-clamp để giới hạn số dòng, tránh việc chữ quá dài làm vỡ khung */}
          <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#7ca91e] transition-colors line-clamp-2">
            {item.content}
          </h2>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-4">
            {item.content}
          </p>
          
          {/* mt-auto đẩy nút xuống dưới cùng nếu phần chữ ngắn */}
          <button className="bg-[#1f2937] text-white text-[10px] font-bold py-3 px-8 w-fit hover:bg-[#7ca91e] transition-colors uppercase tracking-widest mt-auto">
            Đọc tiếp
          </button>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      

  );
}