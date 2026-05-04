import {datatextimage} from '../Data/datadichvu'
import lienhe from '../assets/lienhe.jpg';
import Icon from '../component/icon';
import { Link } from 'react-router-dom';
export default function Kiemtoanbaocao() {
 

const post = datatextimage[4];
 
  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative h-[600px] flex items-center px-8 md:px-24 bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={datatextimage[4].src}
            className="w-full h-full object-cover opacity-40"
            alt="Office background"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
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
            {datatextimage[4].title}
        </h1>
        </div>
      </section>

        <section className="py-24 px-8 md:px-24 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header trang với gạch chân trang trí */}
                <div className="text-left mb-20 relative">
                <h1 className="text-4xl md:text-5xl font-black text-[#111827] uppercase leading-tight">
                    {post.title}
                </h1>
                <div className="w-24 h-2 bg-[#7ca91e] mt-6"></div>
                </div>

                <div className="grid grid-cols-1 gap-16">
                {post.sections?.map((section, index) => (
                    <div key={section.id} className="relative group">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        
                        {/* Số thứ tự trang trí chạy dọc bên trái */}
                        <div className="hidden md:block text-6xl font-black text-gray-100 group-hover:text-[#7ca91e]/20 transition-colors duration-500">
                        {(index + 1).toString().padStart(2, '0')}
                        </div>

                        <div className="flex-1">
                        {/* Tiêu đề phụ với Style hiện đại */}
                        {section.heading && (
                            <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-8 bg-[#7ca91e]"></div>
                            <h3 className="text-lg font-extrabold text-[#111827] uppercase tracking-wider">
                                {section.heading}
                            </h3>
                            </div>
                        )}

                        {/* 1. Hiển thị dạng Highlight (Style thẻ trích dẫn) */}
                        {section.type === 'highlight' && (
                            <div className="relative pl-10">
                            <span className="absolute left-0 top-0 text-6xl text-[#7ca91e] font-serif leading-none opacity-50">“</span>
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed italic">
                                {section.content}
                            </p>
                            </div>
                        )}

                        {/* 2. Hiển thị dạng Text (Style tối giản) */}
                        {section.type === 'text' && (
                            <p className="text-lg text-gray-600 leading-loose text-justify max-w-4xl">
                            {section.content}
                            </p>
                        )}

                        {/* 3. Hiển thị dạng Danh sách (Style Thẻ Grid hiện đại) */}
                        {section.type === 'list' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {section.items?.map((item, i) => (
                                <div key={i} className="flex items-center p-6 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-[#7ca91e] transition-all duration-300 group/item">
                                <div className="w-2 h-2 rounded-full bg-[#7ca91e] mr-4"></div>
                                <span className="text-sm font-bold text-gray-700 uppercase tracking-tight group-hover/item:text-[#111827]">
                                    {item}
                                </span>
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
                    </div>
                    
                    {/* Đường kẻ phân cách giữa các section */}
                    {index !== post.sections.length - 1 && (
                        <div className="h-[1px] w-full bg-gray-100 mt-16"></div>
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