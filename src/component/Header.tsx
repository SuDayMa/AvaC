import React, { useState } from 'react';
import Icon from './icon';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/BakerTilly AC.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State cho Mobile Menu
  const [activeSub, setActiveSub] = useState(null); // State cho Accordion sub-menu trên mobile
  
  const menuItems = [
    {
      id: 1, name: 'Dịch vụ', link: '/dich-vu', sub: [
        { id: 1, name: 'Kiểm toán và dịch vụ đảm bảo', link: '/kiem-toan-va-dich-vu-dam-bao' },
        { id: 2, name: 'Kiểm toán Đầu tư xây dựng', link: '/kiem-toan-dau-tu-xay-dung' },
        { id: 3, name: 'Tư vấn và Đào tạo', link: '/tu-van-va-dao-tao' },
      ]
    },
    { id: 2, name: 'Giới thiệu', link: '/gioi-thieu' },
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

  const toggleSub = (id : any ) => {
    setActiveSub(activeSub === id ? null : id);
  };

  return (
    <div className='sticky top-0 z-50 shadow-sm'>
      {/* --- PC & Tablet Header --- */}
      <div className="bg-[#F3F4F6] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to='/'>
            <img src={logo} alt="Baker Tilly A&C" className="h-10 md:h-13 w-auto" />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
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
                  {hasSub && <Icon name="down" />}
                  <span className={`absolute left-0 right-0 bottom-1 h-0.5 bg-black transform transition-transform duration-300
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </Link>

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

        {/* Icons Right */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-gray-700 hover:text-black cursor-pointer p-1">
            <Icon name="language" />
          </div>
          
          {/* Nút 3 gạch (Mobile Hamburger) */}
          <button 
            className="md:hidden text-green w-10 p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Icon name="close" />  :  <Icon name="menu" />} 
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => {
            const hasSub = item.sub && item.sub.length > 0;
            const isSubOpen = activeSub === item.id;

            return (
              <div key={item.id} className="border-b border-gray-50 last:border-0 pb-2">
                <div className="flex items-center justify-between py-2">
                  <Link 
                    to={item.link || '#'} 
                    className="text-[14px] font-bold text-gray-700"
                    onClick={() => !hasSub && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {hasSub && (
                    <button onClick={() => toggleSub(item.id)} className="p-2">
                      <div className={`transition-transform duration-300 ${isSubOpen ? 'rotate-180' : ''}`}>
                         <Icon name="down" />
                      </div>
                    </button>
                  )}
                </div>

                {/* Sub items cho mobile */}
                {hasSub && isSubOpen && (
                  <div className="bg-gray-50 rounded-lg mt-1 ml-2">
                    {item.sub.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.link}
                        className="block px-4 py-3 text-[13px] font-semibold text-gray-600 hover:text-[#7ca91e]"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          
          <div className="py-4 flex items-center space-x-2 text-gray-700 font-bold text-sm">
            <Icon name="language" />
          </div>
        </div>
      </div>
    </div>
  );
}