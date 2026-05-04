import { offices, datatextimage } from "../Data/datalienhe";
import { Link } from "react-router-dom";
export default function Lienhe() {
    return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[450px] flex items-center px-8 md:px-24 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={datatextimage[0].src} 
            className="w-full h-full object-cover opacity-60"
            alt="Contact background"
          />
          {/* Vòng tròn trang trí giống trong hình */}
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] border border-white/20 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] border border-white/20 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] border border-white/20 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white tracking-tight">{datatextimage[0].title}</h1>
        </div>
      </section>

      {/* 2. FORM & SOCIAL INFO SECTION */}
      <section className="py-20 px-8 md:px-24 flex flex-col md:flex-row gap-16">
        {/* Left Side: Form */}
        <div className="md:w-3/5 text-left">
          <h2 className="text-xl font-bold uppercase mb-2 tracking-wide">Gửi Email liên hệ</h2>
          <p className="text-xs text-gray-500 mb-8 italic">Quý khách vui lòng nhập thông tin vào khung bên dưới </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase mb-1">Tên doanh nghiệp</label>
              <input type="text" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Người liên hệ*</label>
                <input type="text" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Chức danh</label>
                <input type="text" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Email*</label>
                <input type="email" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Điện thoại*</label>
                <input type="tel" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" required />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase mb-1">Dịch vụ yêu cầu</label>
              <input type="text" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase mb-1">Tiêu đề</label>
              <input type="text" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase mb-1">Nội dung tin nhắn*</label>
              <textarea rows={4} className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-black" required></textarea>
            </div>
            
            
            <button className="bg-[#1f2937] text-white px-8 py-2 text-xs font-bold uppercase hover:bg-[#7ca91e] transition-colors">
              Gửi đi
            </button>
          </form>
        </div>

        {/* Right Side: Social & Work Hours */}
        <div className="md:w-2/5 text-left space-y-12">
          <div>
            <h2 className="text-xl font-bold uppercase mb-2">Mạng xã hội</h2>
            <p className="text-xs text-gray-500 mb-4">Kết nối với chúng tôi trên các phương tiện truyền thông xã hội.</p>
            <div className="w-8 h-8 bg-[#1f2937] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#7ca91e] transition-colors">
              f
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold uppercase mb-2">Giờ làm việc</h2>
            <p className="text-xs font-bold mb-2">Thứ Hai - Thứ Sáu (8:00AM - 5:00PM)</p>
            <span className="inline-block bg-[#1f2937] text-white text-[9px] px-3 py-1 font-bold uppercase tracking-tighter">Thứ Bảy & Chủ Nhật: Nghỉ</span>
          </div>
        </div>
      </section>

      {/* 3. BRANCHES SECTION */}
      <section className="py-20 px-8 md:px-24 bg-[#e5f1f1]">
        <h2 className="text-3xl font-bold text-[#111827] mb-12 text-left uppercase">Văn Phòng</h2>
        
        {/* Main Office Centered */}
        <div className="flex justify-center mb-12">
          <div className="bg-white max-w-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={offices[0].img} alt={offices[0].name} className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <h3 className="font-bold text-sm text-[#7ca91e] border-b border-gray-100 pb-2 mb-3">{offices[0].name}</h3>
              <p className="text-[11px] text-gray-600 mb-1 leading-relaxed"><b>Địa chỉ:</b> {offices[0].address}</p>
              <p className="text-[11px] text-gray-600 mb-1"><b>Điện thoại:</b> {offices[0].phone}</p>
              <p className="text-[11px] text-gray-600 mb-1"><b>Fax:</b> {offices[0].fax}</p>
              <p className="text-[11px] text-gray-600 mb-3"><b>Email:</b> {offices[0].email}</p>
              <Link to={offices[0].link} className="text-[10px] text-[#7ca91e] font-bold cursor-pointer hover:underline">Bản đồ đến đây</Link>
            </div>
          </div>
        </div>

        {/* Other Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.slice(1).map((office) => (
            <div key={office.id} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={office.img} alt={office.name} className="w-full h-40 object-cover" />
              <div className="p-6 text-left">
                <h3 className="font-bold text-sm text-[#7ca91e] border-b border-gray-100 pb-2 mb-3">{office.name}</h3>
                <p className="text-[11px] text-gray-600 mb-1 leading-relaxed"><b>Địa chỉ:</b> {office.address}</p>
                <p className="text-[11px] text-gray-600 mb-1"><b>Điện thoại:</b> {office.phone}</p>
                <p className="text-[11px] text-gray-600 mb-1"><b>Fax:</b> {office.fax}</p>
                <p className="text-[11px] text-gray-600 mb-3"><b>Email:</b> {office.email}</p>
                <Link to={office.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#7ca91e] font-bold cursor-pointer hover:underline">
                  Bản đồ đến đây
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}