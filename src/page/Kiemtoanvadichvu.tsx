import {datatextimage, datakiemtoan} from '../Data/datadichvu'
import lienhe from '../assets/lienhe.jpg';
import Icon from '../component/icon';
import { Link } from 'react-router-dom';
export default function Kiemtoanvadichvu() {
 


 
  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative h-[600px] flex items-center px-8 md:px-24 bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={datatextimage[1].src}
            className="w-full h-full object-cover opacity-40"
            alt="Office background"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
        
        <button
 
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
            {datatextimage[1].title}
        </h1>
        </div>
      </section>

        <section className="py-20 px-8 md:px-24 grid grid-cols-1 bg-gray-200 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <h1 className="text-4xl font-bold  text-center ]">{datatextimage[1].content}</h1>
                </div>
              </div>
            </section>

      <section className="py-20 px-8 md:px-24 text-center">
              <h2 className="text-3xl font-bold text-[#111827] mb-2">Kiểm toán và dịch vụ đảm bảo</h2>
              <div className="w-16 h-1 bg-[#7ca91e] mx-auto mb-16"></div>
      
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {datakiemtoan.map((item, index) => (
                  <div key={index} className="border border-gray-100 p-10 text-left hover:shadow-2xl transition-all group cursor-pointer bg-white">
                    <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all"></div>
                    <h3 className="font-bold text-lg mb-4 text-[#111827] group-hover:text-[#7ca91e] transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.content}
                    </p>
                     <div className="mt-4 flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <Link to={item.link} className="text-[10px] font-black uppercase tracking-widest border-b-2 border-gray-200 group-hover:border-[#7ca91e] pb-1 transition-all">
                      Xem chi tiết 
                    </Link>
                    </div>
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