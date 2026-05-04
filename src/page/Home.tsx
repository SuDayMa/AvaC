import React from 'react';
import {datatextimage , datadichvu} from '../Data/datahome';
import Slidertintuc from '../component/Slider/Slidertintuc';
import { Link } from 'react-router-dom';
import lienhe from '../assets/lienhe.jpg';
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center px-8 md:px-24 overflow-hidden bg-[#0a192f]">
        {/* Background Image (Thay url bằng ảnh thực tế của bạn) */}
        <div className="absolute inset-0 z-0">
          {datatextimage[0].src && (
            <img 
              src={datatextimage[0].src} 
              className="w-full h-full object-cover" 
              alt={datatextimage[0].title} 
            />
          )}
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {datatextimage[0].title}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            {datatextimage[0].content}
          </p>
          <div className="flex space-x-4">
            <Link to="/lien-he" className="bg-[#7ca91e] hover:bg-[#6b921a] text-white px-6 py-3 font-semibold transition-colors">
              Liên hệ ngay
            </Link>
            <Link to="/dich-vu" className="border border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition-all">
              Khám phá dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE SECTION */}
      <section className="py-20 px-8 md:px-24 bg-[#fcfcfc]">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mt-2">Dịch vụ chuyên nghiệp</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {datadichvu.map((item, index) => (
            <Link to={item.link} key={index} className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="w-12 h-12 bg-[#f3f4f6] flex items-center justify-center mb-6 group-hover:bg-[#7ca91e] transition-colors">
                <span className="text-xl">📄</span>
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.content}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. POSITION SECTION */}
      <section className="bg-[#1f2937] py-20 px-8 md:px-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-6">VỊ THẾ DẪN ĐẦU TẠI MIỀN TRUNG</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Với trụ sở chính tại Nha Trang, chúng tôi kết hợp sự am hiểu sâu sắc về môi trường kinh doanh tại Khánh Hòa và khu vực Miền Trung với quy trình chuẩn mực từ mạng lưới Baker Tilly toàn cầu.
          </p>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p className="text-[#7ca91e] text-3xl font-bold">50.400</p>
              <p className="text-amber-50 text-xs uppercase mt-2">Nhân viên</p>
            </div>
            <div>
              <p className="text-[#7ca91e] text-3xl font-bold">$6.8 bn</p>
              <p className="text-amber-50 text-xs uppercase mt-2">Doanh thu toàn cầu</p>
            </div>
            <div>
              <p className="text-[#7ca91e] text-3xl font-bold">754</p>
              <p className="text-amber-50 text-xs uppercase mt-2">Văn Phòng</p>
            </div>
            <div>
              <p className="text-[#7ca91e] text-3xl font-bold">147</p>
              <p className="text-amber-50 text-xs uppercase mt-2">Quốc gia</p>
            </div>
          </div>
        </div>
        
      </section>

      {/* 5. LATEST UPDATES SECTION */}
      <section className="py-20 px-8 md:px-24 bg-white">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[#7ca91e] font-bold text-xs tracking-widest uppercase">Latest Updates</p>
            <h2 className="text-3xl font-bold text-[#111827] mt-2">Tin tức & Thông lệ</h2>
          </div>
          <Link to="/tin-tuc/tin-baker-tilly-ac" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-[#7ca91e] hover:border-[#7ca91e] transition-all">
            Xem tất cả →
          </Link>
        </div>

        <Slidertintuc />
      </section>

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