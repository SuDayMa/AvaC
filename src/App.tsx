import Header from './component/Header';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Gioithieu from './page/Gioithieu';
import Dichvu from './page/Dichvu';
import Thuevaphaply from './page/Thuevaphaply';
import Tuyendung from './page/tuyendung';
import Tintuc from './page/Tintuc';
import Kiemtoanvadichvu from './page/Kiemtoanvadichvu';
import Kiemtoandautu from './page/kiemtoandautu';
import Tuvan from './page/tuvan';
import Lienhe from './page/Lienhe';
import DichvuDetail from './page/DichvuDetail';

import './App.css'
import ThuevaphaplyDetail from './page/ThuevaphaplyDetail';



function AppRouter() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Gioithieu />} />
        <Route path="/dich-vu" element={<Dichvu />} />
        <Route path="/cap-nhat-thue-va-phap-ly" element={<Thuevaphaply />} />
        <Route path="/tuyen-dung" element={<Tuyendung />} />
        <Route path="/tin-tuc/:slug" element={<Tintuc />} />
        <Route path="/kiem-toan-va-dich-vu-dam-bao" element={<Kiemtoanvadichvu />} />
        <Route path="/kiem-toan-dau-tu-xay-dung" element={<Kiemtoandautu />} />
        <Route path="/tu-van-va-dao-tao" element={<Tuvan />} />
        <Route path="/lien-he" element={<Lienhe />} />
        <Route path="/dich-vu/:slug" element={<DichvuDetail />} />
        <Route path="/cap-nhat-thue-va-phap-ly/:slug" element={<ThuevaphaplyDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
