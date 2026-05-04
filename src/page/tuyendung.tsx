import {datatextimage , gioithieu, datatuyendung} from '../Data/datatuyendung'
import lienhe from '../assets/lienhe.jpg';
import { Link } from 'react-router-dom';
export default function Tuyendung() {

  const jobs = datatuyendung
 
  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative h-[600px] flex items-center px-8 md:px-24 bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={datatextimage[0].src}
            className="w-full h-full object-cover opacity-40"
            alt="Office background"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {datatextimage[0].title}
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Khởi đầu sự nghiệp cùng một trong những cộng đồng làm việc chuyên nghiệp tại Miền Trung.
          </p>
          <button className="bg-[#d4ed71] hover:bg-[#c2dc50] text-[#111827] px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all">
            Xem các vị trí đang tuyển
          </button>
        </div>
      </section>

        <section className="py-20 px-8 md:px-24 grid grid-cols-1 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <h1 className="text-4xl font-bold  text-center ]">{gioithieu[0].title}</h1>
                  <p>{gioithieu[0].content1}</p>
                  <p>{gioithieu[0].content2}</p>
                  <p>{gioithieu[0].content3}</p>
                </div>
              </div>
            </section>

      <section className="py-20 px-8 md:px-24 bg-[#f3f4f6]/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mt-2">Tuyển Dụng</h2>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job) => (
            <div key={job.id} className="bg-white p-8 flex flex-col border border-gray-100 hover:border-[#7ca91e] transition-all shadow-sm group">
            <div className="flex-1 text-left w-full">
                <div className="mb-6 h-24 w-full overflow-hidden bg-gray-50 border border-gray-100"> 
                <img 
                    src={job.src} 
                    alt={job.title} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                </div>
                
                <h3 className="text-xl font-bold text-[#111827] mb-3 tracking-tight group-hover:text-[#7ca91e] transition-colors">
                {job.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 mb-6">
                {job.content}
                </p>
            </div>
            
            <div className="mt-auto pt-4">
                <button className="bg-[#d4ed71] text-[#111827] px-8 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-[#1f2937] hover:text-white transition-all shadow-sm">
                Ứng tuyển ngay
                </button>
            </div>
            </div>
        ))}
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 text-center bg-[#1f2937]">
        <h2 className="text-3xl font-bold mb-16 text-white">Quy trình tuyển dụng</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Nộp hồ sơ', desc: 'Gửi CV và các bằng cấp liên quan qua cổng thông tin.' },
            { step: '02', title: 'Kiểm tra năng lực', desc: 'Bài test kiến thức chuyên môn và khả năng phân tích.' },
            { step: '03', title: 'Phỏng vấn', desc: 'Gặp gỡ bộ phận nhân sự và các chuyên gia chuyên môn.' },
            { step: '04', title: 'Tiếp nhận thử việc', desc: 'Chào mừng bạn gia nhập đại gia đình Baker Tilly A&C.' },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="w-12 h-12 bg-white text-black rounded-sm flex items-center justify-center mx-auto mb-6 font-bold relative z-10">
                {item.step}
              </div>
              {idx < 3 && <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-gray-200 -z-0"></div>}
              <h4 className="font-bold text-sm mb-3 uppercase text-white">{item.title}</h4>
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