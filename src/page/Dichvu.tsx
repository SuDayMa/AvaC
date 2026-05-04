import React from 'react';
import { datatextimage, datadichvu } from '../Data/datadichvu';
import lienhe from '../assets/lienhe.jpg';
import { Link } from 'react-router-dom';
export default function Dichvu() {
  

  const workflow = [
    { step: '01', title: 'TIẾP NHẬN & KHẢO SÁT', desc: 'Lắng nghe nhu cầu và khảo sát thực tế tại doanh nghiệp.' },
    { step: '02', title: 'LẬP KẾ HOẠCH & BÁO GIÁ', desc: 'Đề xuất giải pháp và lộ trình triển khai chi tiết.' },
    { step: '03', title: 'THỰC HIỆN NGHIỆP VỤ', desc: 'Triển khai công việc theo đúng tiến độ và tiêu chuẩn.' },
    { step: '04', title: 'PHÁT HÀNH BÁO CÁO', desc: 'Bàn giao kết quả và tư vấn cải thiện sau nghiệp vụ.' },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center px-8 md:px-24 bg-[#0a192f]">
        <div className="absolute inset-0 z-0">
          <img 
            src={datatextimage[0].src} 
            className="w-full h-full object-cover opacity-30"
            alt="Dịch vụ"
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
            {datatextimage[0].title}
          </h1>
          <p className="text-gray-300 text-lg">
            Từ kiểm toán đến tư vấn thuế, chúng tôi cung cấp các giải pháp chuyên sâu giúp doanh nghiệp tối ưu hóa hoạt động.
          </p>
        </div>
      </section>

      {/* 2. DANH MỤC DỊCH VỤ */}
      <section className="py-20 px-8 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-[#111827] mb-2">Danh Mục Dịch Vụ</h2>
        <div className="w-16 h-1 bg-[#7ca91e] mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {datadichvu.map((item, index) => (
            <div key={index} className="border border-gray-100 p-10 text-left hover:shadow-2xl transition-all group cursor-pointer bg-white">
              <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all"></div>
              <h3 className="font-bold text-lg mb-4 text-[#111827] group-hover:text-[#7ca91e] transition-colors uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {item.content}
              </p>
               <div className="mt-4 flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-gray-200 group-hover:border-[#7ca91e] pb-1 transition-all">
                Xem chi tiết 
              </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. QUY TRÌNH TRIỂN KHAI */}
      <section className="py-24 px-8 md:px-24 text-center bg-[#1f2937]">
        <h2 className="text-3xl font-bold mb-2 text-white">Quy Trình Triển Khai</h2>
        <p className=" text-sm italic text-[#7ca91e] mb-16">Chuyên nghiệp – Minh bạch – Hiệu quả</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {workflow.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-900 font-bold text-xl bg-white relative z-10">
                {item.step}
              </div>
              {/* Line connector for desktop */}
              {idx < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gray-100 -z-0"></div>}
              <h4 className="font-bold text-xs mb-3 tracking-tighter uppercase  text-[#7ca91e] ">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
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