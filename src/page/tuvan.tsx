import { datatextimage, datatuvan } from '../Data/datadichvu';
import lienhe from '../assets/lienhe.jpg';
import Icon from '../component/icon';
import { Link } from 'react-router-dom';

export default function Tuvan() {
  const post = datatextimage[3];

  return (
    <div className="bg-white min-h-screen font-sans text-[#111827]">
      {/* 1. HERO SECTION - Tối giản & Tập trung vào tiêu đề */}
      <section className="relative h-[500px] flex items-center px-8 md:px-24 bg-[#0a192f]">
        <div className="absolute inset-0 z-0">
          <img
            src={datatextimage[3].src}
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Office background"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <Link 
            to="/dich-vu" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
          >
            <Icon name="left" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Quay lại dịch vụ</span>
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
            {datatextimage[3].title}
          </h1>
          <div className="w-16 h-1 bg-[#7ca91e]"></div>
        </div>
      </section>

      {/* 2. MAIN CONTENT - Bố cục tối giản, sạch sẽ */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {post.sections?.map((section) => (
              <div key={section.id} className="animate-fade-in">
                
                {/* Tiêu đề mục mảnh mai */}
                {section.heading && (
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#7ca91e] mb-8">
                    {section.heading}
                  </h3>
                )}

                {/* Nội dung dạng Highlight - Nhẹ nhàng hơn */}
                {section.type === 'highlight' && (
                  <div className="py-2 mb-10">
                    <p className="text-2xl md:text-3xl font-medium leading-snug text-gray-900 border-l-2 border-gray-900 pl-8">
                      {section.content}
                    </p>
                  </div>
                )}

                {/* Nội dung dạng Text - Tăng khoảng cách dòng để dễ đọc */}
                {section.type === 'text' && (
                  <p className="text-lg text-gray-500 leading-loose text-justify font-light">
                    {section.content}
                  </p>
                )}

                {section.type === 'list' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-4">
                    {section.items?.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 py-4 border-b border-gray-100 group">
                        <span className="text-[#7ca91e] font-bold mt-0.5">-</span>
                        <span className="text-sm font-bold text-gray-700 uppercase tracking-tight group-hover:text-black transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. CALL TO ACTION - Phẳng & Tối giản */}
      <section className="relative py-28 px-8 md:px-24 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070" 
                        className="w-full h-full object-cover" 
                        alt="Contact" 
                    />
                    <div className="absolute inset-0 bg-[#1f2937]/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-white font-extrabold tracking-tighter text-4xl mb-6">Chúng tôi có thể trợ giúp</h2>
                    <p className="text-[#d4ed71] font-bold tracking-widest text-lg uppercase">Liên lạc với đội ngũ chuyên gia của chúng tôi</p>
                    <div className="mt-12">
                        <Link to='/lien-he' className="bg-[#7ca91e] border-2 border-[#7ca91e] px-10 py-4 font-bold text-white hover:bg-white hover:text-[#1f2937] hover:border-white transition-all duration-300 uppercase text-xs tracking-[0.2em] shadow-2xl">
                        Liên hệ với chúng tôi ngay
                        </Link>
                    </div>
                </div>
            </section>
    </div>
  );
}