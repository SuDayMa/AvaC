import { useParams, Link } from 'react-router-dom';
import { datadetail } from '../Data/datadichvu'; // Sử dụng đúng kho dữ liệu chi tiết
import lienhe from '../assets/lienhe.jpg';
import Icon from '../component/icon';

export default function DichvuDetails() {
    const { slug } = useParams<{ slug: string }>();
    
    const post = slug ? datadetail[slug as keyof typeof datadetail] : null;

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Nội dung đang được cập nhật...</p>
                <Link to="/dich-vu" className="ml-4 text-blue-500 underline">Quay lại</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* HERO SECTION - Tối ưu hóa hiển thị */}
            <section className="relative h-[500px] md:h-[600px] flex items-center px-8 md:px-24 bg-[#0a192f] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={post.src}
                        className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
                        alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-transparent to-transparent"></div>
                </div>
                
                <div className="relative z-10 max-w-3xl">
                    <button className="flex items-center border border-white/40 rounded-full mb-8 group hover:bg-white hover:border-white transition-all overflow-hidden">
                        <Link to="/kiem-toan-va-dich-vu-dam-bao" className="flex items-center">
                            <div className="px-3 py-2 border-r border-white/40 group-hover:border-[#0a192f] text-white group-hover:text-[#0a192f] transition-colors">
                                <Icon name="left" />
                            </div>
                            <div className="px-5 py-2 text-white group-hover:text-[#0a192f] font-bold text-xs uppercase tracking-widest transition-colors">
                                Kiểm toán và dịch vụ đảm bảo
                            </div>
                        </Link>
                    </button>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] uppercase tracking-tighter">
                        {post.title}
                    </h1>
                    <div className="w-20 h-1.5 bg-[#7ca91e]"></div>
                </div>
            </section>

            {/* CONTENT SECTION - Phong cách Corporate hiện đại */}
            <section className="py-24 px-8 md:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-20">
                        {post.sections?.map((section, index) => (
                            <div key={section.id} className="relative group">
                                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                    
                                    {/* Số thứ tự mờ làm điểm nhấn */}
                                    <div className="hidden md:block text-8xl font-black text-gray-50 group-hover:text-gray-100 transition-colors select-none">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>

                                    <div className="flex-1 pt-4">
                                        {section.heading && (
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="h-[2px] w-12 bg-[#7ca91e]"></div>
                                                <h3 className="text-xl font-black text-[#111827] uppercase tracking-widest">
                                                    {section.heading}
                                                </h3>
                                            </div>
                                        )}

                                        {/* Render dựa trên Type */}
                                        {section.type === 'highlight' && (
                                            <div className="relative pl-12 py-2 border-l-4 border-[#7ca91e]">
                                                <p className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed italic">
                                                    {section.content}
                                                </p>
                                            </div>
                                        )}

                                        {section.type === 'text' && (
                                            <p className="text-lg text-gray-600 leading-[1.8] text-justify font-light">
                                                {section.content}
                                            </p>
                                        )}

                                        {section.type === 'list' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                {section.items?.map((item, i) => (
                                                    <div key={i} className="flex items-center p-6 bg-gray-50 border-l-2 border-transparent hover:border-[#7ca91e] hover:bg-white hover:shadow-xl transition-all duration-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#7ca91e] mr-4 flex-shrink-0"></div>
                                                        <span className="text-sm font-bold text-gray-700 uppercase leading-tight">
                                                            {item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {index !== post.sections.length - 1 && (
                                    <div className="h-[1px] w-full bg-gray-100 mt-20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-32 px-8 md:px-24 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={lienhe}
                        className="w-full h-full object-cover"
                        alt="Contact"
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/90 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-white font-black tracking-tighter text-4xl md:text-6xl mb-8 uppercase">
                        Giải pháp tối ưu cho doanh nghiệp
                    </h2>
                    <p className="text-[#d4ed71] font-bold tracking-[0.3em] text-sm md:text-lg uppercase mb-12">
                        Kết nối với các chuyên gia của Baker Tilly A&C ngay hôm nay
                    </p>
                    <Link to="/lien-he">
                        <button className="bg-[#7ca91e] px-12 py-5 font-black text-white hover:bg-white hover:text-[#0a192f] transition-all duration-500 uppercase text-xs tracking-[0.25em] shadow-2xl">
                            Liên hệ tư vấn
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}