import React from 'react';
import { datatextimage , datatextgioithieu } from '../Data/datagioithieu';
import { dataLeaders } from '../Data/dataleaders';
import Icon from '../component/icon';
import lienhe from '../assets/lienhe.jpg';
import { Link } from 'react-router-dom';


export default function Gioithieu() {
  const coreValues = [
    { time:'5/1991-5/1995', desc: 'Được thành lập, là một trong những Công ty kiểm toán độc lập hàng đầu tại Việt nam có trụ sở chính tại TP. Hồ Chí Minh', icon: <Icon name='right' /> },
    { time:'12/2003', desc: 'Chuyển đổi từ Công ty nhà nước sang Công ty Cổ phần Nhà nước', icon: <Icon name='right' /> },
    { time:'03/2004', desc: 'Trở thành thành viên độc lập của Tổ chức kế toán, kiểm toán và tư vấn quốc tế HLB International', icon: <Icon name='right' /> },
    { time:'02/2007', desc: 'Chuyển đổi từ Công ty Cổ phần sang Công ty TNHH nhiều thành viên', icon: <Icon name='right' /> },
    { time:'04/2010-Nay', desc: 'Gia nhập Baker Tilly International (Top 10 thế giới) - Tiếp tục gia tăng kinh nghiệm, đa dạng và chuyên sâu hóa dịch vụ mang lại giá trị cao nhất cho Quý Khách hàng', icon: <Icon name='right' /> },
  ];
  const leader = dataLeaders[0];
  

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={datatextimage[0].src} 
            className="w-full h-full object-cover" 
            alt={datatextimage[0].title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 md:px-24 pb-16">
          <h1 className="text-white text-3xl md:text-4xl font-bold border-l-4 border-[#7ca91e] pl-6">
           {datatextimage[0].title}
          </h1>
        </div>
      </section>

      {/* 2. TẦM NHÌN & SỨ MỆNH */}
      <section className="py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>{datatextgioithieu[0].content1}</p>
            <p>{datatextgioithieu[0].content2}</p>
          </div>
        </div>

        <div className="order-1 md:order-2">
            <div className="relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-full h-full border border-[#7ca91e]/30 -z-10"></div>
                <div className="space-y-12">
                    <div  className="group flex items-center space-x-8">
                    <div className="relative w-32 h-40 overflow-hidden bg-gray-100 shadow-sm">
                        <img 
                        src={leader.Image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-[#7ca91e]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="flex-1 border-b border-gray-100 pb-4">
                        <h4 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#7ca91e] transition-colors">
                        {leader.name}
                        </h4>
                        <p className="text-[#003366] font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
                        {leader.position}
                        </p>
                        <p className="text-[#003366] font-bold text-[10px] tracking-[0.2em] mt-1">
                        {leader.job}
                        </p>
                        <p className="text-[#003366] font-bold text-[10px] tracking-[0.2em] mt-1">
                        {leader.address}
                        </p>
                        <p className="text-[#003366] font-bold text-[10px] tracking-[0.2em] mt-1">
                        {leader.phone}
                        </p>
                        <p className="text-[#003366] font-bold text-[10px] tracking-[0.2em] mt-1">
                        {leader.email}
                        </p>
                        <div className="mt-4 flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <span className="text-[10px] font-black uppercase rounded-2xl border-[#1f2937] bg-[#1f2937] text-amber-50 border-1 p-[5px] ">Sơ lược tiểu sử</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    
      <section className="py-20 px-8 md:px-24 bg-[#1f2937] text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-[#7ca91e] pb-2">Lịch sử phát triển của Baker Tilly A&C</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className=" p-6 hover:bg-gray-800 transition-colors duration-300 rounded-lg">
              <div className="text-4xl mb-4 opacity-80 text-center text-[#7ca91e]">{val.icon}</div>
              <h3 className="font-bold text-lg mb-3 uppercase tracking-wider text-center">{val.time}</h3>
              <p className="text-sm text-gray-400 leading-6">{val.desc}</p>
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