import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { datatintuc } from '../../Data/datatintuc'; // Đường dẫn tới file data của bạn

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const NewsSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper !pb-14"
      >
        {datatintuc.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="group cursor-pointer mb-4">
              <div className="aspect-video overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={post.src} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={post.title} 
                />
              </div>
              <p className="text-gray-400 text-[11px] font-medium mb-2 uppercase tracking-wider">
                {post.date}
              </p>
              <h3 className="font-bold text-[#111827] group-hover:text-[#7ca91e] transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style dangerouslySetInnerHTML={{ __html: `
        .mySwiper .swiper-pagination-bullet-active {
          background: #7ca91e !important;
        }
        .mySwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
      `}} />
    </>
  );
};

export default NewsSlider;