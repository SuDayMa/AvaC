import {datatextimage} from '../Data/datadichvu'
import lienhe from '../assets/lienhe.jpg';
import Icon from '../component/icon';
import { Link } from 'react-router-dom';
export default function Kiemtoandautu() {
 

const post = datatextimage[2];
 
  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative h-[600px] flex items-center px-8 md:px-24 bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={datatextimage[2].src}
            className="w-full h-full object-cover opacity-40"
            alt="Office background"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
        {/* Nút bấm mới theo phong cách Back Button */}
        <button // Thêm sự kiện quay lại trang trước
            className="flex items-center border border-white/60 rounded-full mb-6 group hover:bg-white/10 transition-all overflow-hidden"
        >
            <Link to="/dich-vu" className="flex items-center">
                <div className="px-2 py-2 border-r border-white/60 text-white ">
                <Icon name="left" />
            </div>

                <div className="px-4 py-2 text-white font-medium text-sm">
                    Dịch vụ
                </div>
            </Link>
        </button>

        <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {datatextimage[2].title}
        </h1>
        </div>
      </section>

        <section className="py-20 px-8 md:px-24 bg-gray-200">
            <div className="max-w-5xl mx-auto">
                {/* Tiêu đề chính của trang dịch vụ */}
                <h1 className="text-4xl font-extrabold text-[#111827] text-center mb-16 uppercase tracking-tight">
                {post.title}
                </h1>

                <div className="space-y-12">
                {post.sections?.map((section) => (
                    <div key={section.id} className="text-gray-700 leading-relaxed">
                    
                    {/* 1. Hiển thị tiêu đề phụ nếu có */}
                    {section.heading && (
                        <h3 className="text-xl font-bold text-[#111827] mb-4 uppercase border-l-4 border-[#7ca91e] pl-4">
                        {section.heading}
                        </h3>
                    )}

                    {/* 2. Hiển thị nội dung dạng Highlight (nhấn mạnh) */}
                    {section.type === 'highlight' && (
                        <div className="bg-white/50 p-8 border-t-2 border-[#7ca91e] shadow-sm italic text-lg text-gray-800">
                        "{section.content}"
                        </div>
                    )}

                    {/* 3. Hiển thị nội dung dạng Text thông thường */}
                    {section.type === 'text' && (
                        <p className="text-base md:text-lg">
                        {section.content}
                        </p>
                    )}

                    {/* 4. Hiển thị nội dung dạng Danh sách (List) */}
                    {section.type === 'list' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 bg-white/30 p-8 rounded-sm">
                        {section.items?.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                            <span className="text-[#7ca91e] font-bold mt-1">✓</span>
                            <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                        </div>
                    )}
                    
                    </div>
                ))}
                </div>
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
                    <button className="bg-[#7ca91e] border-2 border-[#7ca91e] px-10 py-4 font-bold text-white hover:bg-white hover:text-[#1f2937] hover:border-white transition-all duration-300 uppercase text-xs tracking-[0.2em] shadow-2xl">
                        Liên hệ với chúng tôi ngay
                    </button>
                </div>
            </div>
        </section>


    </div>
  );
}