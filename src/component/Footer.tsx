import Icon from './icon';
import logo from '../assets/BakerTilly AC white.png';
import { Link } from 'react-router';


export default function Footer() {
  const ac = 'https://www.google.com/maps/place/Chi+nh%C3%A1nh+C%C3%B4ng+ty+TNHH+Ki%E1%BB%83m+to%C3%A1n+v%C3%A0+T%C6%B0+v%E1%BA%A5n+A%26C+t%E1%BA%A1i+Nha+Trang/@12.2501154,109.1713696,17z/data=!3m1!4b1!4m6!3m5!1s0x31705d62ed96a465:0x49465735abc5a3ba!8m2!3d12.2501102!4d109.1739445!16s%2Fg%2F11rc1y_9cj?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D' 
  return (
    <div className="bg-[#111827] text-gray-400 py-12 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <img src={logo} alt="Baker Tilly A&C" className="h-13 w-auto" />
          <div className="text-sm leading-relaxed">
            <p>CHI NHÁNH MIỀN TRUNG</p>
            <p>Lô STH 06A.01 Đường số 13, Khu đô thị Lê Hồng Phong II, Phường Nam Nha Trang, Tỉnh Khánh Hòa, Việt Nam</p>
          </div>
          <div className="flex space-x-3 pt-2">
            <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center text-[10px]"><Icon name='medal'/></div>
            <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center text-[10px]"><Link to={ac}><Icon name='link'/></Link></div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-white font-bold text-lg">Chức năng</h2>
          <ul className="text-sm space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors"><Link to="/dich-vu">Dịch vụ</Link></li>
            <li className="hover:text-white cursor-pointer transition-colors"><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li className="hover:text-white cursor-pointer transition-colors"><Link to="/cap-nhat-thue-va-phap-ly">Cập nhật thuế và pháp lý</Link></li>
            <li className="hover:text-white cursor-pointer transition-colors"><Link to="/tuyen-dung">Tuyển dụng</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-white font-bold text-lg">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">Global Network</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms of Use</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-white font-bold text-lg"><Icon name='facebook' /></h2>
          <h2 className="text-white font-bold text-lg">Now, for tomorrow</h2>
          
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-[11px] text-gray-500 max-w-7xl mx-auto">
        <p>© 2026 Baker Tilly A&C</p>
      </div>
    </div>
  );
}