import React from 'react';
import { datacapnhatthuevaphaply, datatextimage } from '../Data/datathuevaphaply';
import FeaturedSlider from '../component/Slider/Sliderthuevaphaply';
import lienhe from '../assets/lienhe.jpg';
import Icon from '../component/icon';
import { Link } from 'react-router-dom';
export default function Thuevaphaply() {

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
        <section className="relative py-24 px-8 text-center overflow-hidden min-h-[600px] flex items-center">
            {/* Layer 1: Hình ảnh nền (Background Image) */}
            <div className="absolute inset-0 z-0">
                <img 
                src={datatextimage[0].src}// Bạn có thể thay bằng ảnh tòa nhà trong folder assets
                className="w-full h-full object-cover"
                alt="Office Building Background"
                />
                {/* Layer 2: Overlay tối để text trắng rõ hơn (giống trong ảnh mẫu) */}
                <div className="absolute inset-0 bg-[#1f2937]/85 mix-blend-multiply"></div>
            </div>

            {/* Layer 3: Nội dung (Content) */}
            <div className="relative z-10 max-w-4xl mx-auto w-full">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Cập Nhật Thuế Và Pháp Lý
                </h1>
                <p className="text-gray-300 mb-10 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                Cung cấp các thông tin chuyên sâu về thay đổi chính sách, quy định mới nhất cho doanh nghiệp tại khu vực Miền Trung.
                </p>
                
                <div className="relative max-w-2xl mx-auto group">
                <input 
                    type="text" 
                    placeholder="Tìm kiếm văn bản, tài liệu..." 
                    className="w-full py-5 px-8 rounded-sm text-gray-800 focus:outline-none shadow-2xl bg-white/95 backdrop-blur-sm transition-all focus:bg-white"
                />
                <button className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#7ca91e] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                </div>
            </div>
        </section>

      

      {/* 3. FEATURED POST */}
      <section className="py-12 px-8 md:px-24">
        <FeaturedSlider />
      </section>

      
      <section className="pb-20 px-8 md:px-24 flex flex-col  justify-center md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {datacapnhatthuevaphaply.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-4 bg-gray-100">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#7ca91e] font-bold text-[9px] uppercase tracking-tighter">{post.title}</span>
                  <span className="text-gray-400 text-[9px]">{post.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#7ca91e] transition-colors line-clamp-2 leading-snug mb-2">
                  {post.content}
                </h3>
                <p className="text-gray-500 text-[11px] line-clamp-3 leading-relaxed">
                  {post.content}
                </p>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-400">‹</button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1f2937] text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-400">›</button>
          </div>
        </div>

        
      </section>

      {/* 5. NEWSLETTER SECTION */}
      <section className="relative py-28 px-8 md:px-24 text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                src={lienhe}
                className="w-full h-full object-cover"
                alt="Contact background"
                />
                <div className="absolute inset-0 bg-[#1f2937]/80 mix-blend-multiply"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-white font-extrabold tracking-tighter text-4xl md:text-5xl mb-6">
                        Chúng tôi có thể trợ giúp
                    </h2>
                    <p className="text-[#d4ed71] font-bold tracking-widest text-lg md:text-2xl uppercase">
                        Liên lạc với đội ngũ chuyên gia của chúng tôi
                    </p>
                    <div className="w-20 h-1 bg-[#7ca91e] mx-auto mt-8"></div>
                </div>
                <div className="mt-16 flex justify-center">
                    <Link to='/lien-he' className="bg-[#7ca91e] border-2 border-[#7ca91e] px-10 py-4 font-bold text-white hover:bg-white hover:text-[#1f2937] hover:border-white transition-all duration-300 uppercase text-xs tracking-[0.2em] shadow-2xl">
                        Liên hệ với chúng tôi ngay
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}