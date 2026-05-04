import Icon from './icon';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/BakerTilly AC.png';

export default function Header() {
  const menuItems = [
    {
      id: 1, name: 'Dịch vụ', link: '/dich-vu', sub: [
        { id: 1, name: 'Kiểm toán và dịch vụ đảm bảo', link: '/kiem-toan-va-dich-vu-dam-bao' },
        { id: 2, name: 'Kiểm toán Đầu tư xây dựng', link: '/kiem-toan-dau-tu-xay-dung' },
        { id: 3, name: 'Tư vấn và Đào tạo', link: '/tu-van-va-dao-tao' },
      ]
    },
    {
      id: 2, name: 'Giới thiệu', link: '/gioi-thieu', 
    },
    { id: 3, name: 'Cập nhật thuế và pháp lý', link: '/cap-nhat-thue-va-phap-ly' },
    {
      id: 4, name: 'Tin tức', sub: [
        { id: 1, name: 'Tin Baker Tilly A&C', link: '/tin-tuc/tin-baker-tilly-ac' },
        { id: 2, name: 'Thông báo Đào tạo', link: '/tin-tuc/thong-bao-dao-tao' },
      ]
    },
    { id: 5, name: 'Tuyển dụng', link: '/tuyen-dung' },
  ];

  const location = useLocation();

  return (
    <div className='sticky top-0 z-50 shadow-sm'>
      <div className="bg-[#F3F4F6] px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center">
          <Link to='/'>
            <h1 className="text-xl font-extrabold text-black tracking-tight">
              <img src={logo} alt="Baker Tilly A&C" className="h-13 w-auto" />
            </h1>
          </Link>
        </div>

        <nav className="flex items-center space-x-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.link;
            const hasSub = item.sub && item.sub.length > 0;

            return (
              <div key={item.id} className="relative group py-2">
                <Link
                  to={item.link || '#'}
                  className={`text-[13px] font-bold tracking-wide flex items-center space-x-1 transition-colors
                    ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                >
                  <span>{item.name}</span>
                  {hasSub && (
                    <Icon name="down" />
                  )}
                  
                  {/* Hiệu ứng gạch chân */}
                  <span className={`absolute left-0 right-0 bottom-1 h-0.5 bg-black transform transition-transform duration-300
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </Link>

                {/* Dropdown Menu (Chỉ hiện khi có sub) */}
                {hasSub && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.sub.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.link}
                          className="block px-6 py-3 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#7ca91e] border-b border-gray-50 last:border-0 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center text-gray-700 hover:text-black cursor-pointer p-1">
          <Icon name="language" />
        </div>
      </div>
    </div>
  );
}