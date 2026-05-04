import { Link, useParams } from "react-router-dom";
import { datatintucbaker } from "../Data/datatintuc";

export default function Tintuc() {
    const { slug } = useParams();

    if (!slug) {
        return <div className="text-center py-20">Danh mục không tồn tại!</div>;
    }
    
    // Tìm dữ liệu tương ứng với slug trên URL (ví dụ: 'tin-baker-tilly-ac')
    const categoryData = datatintucbaker[slug as keyof typeof datatintucbaker];

    // Nếu không tìm thấy slug phù hợp, hiển thị thông báo lỗi
    if (!categoryData) {
        return <div className="text-center py-20">Danh mục không tồn tại!</div>;
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 1. HERO SECTION - Cập nhật tiêu đề động theo categoryData.title */}
            <section className="relative py-24 px-8 text-center overflow-hidden min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={categoryData.src}
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-[#1f2937]/85 mix-blend-multiply"></div>
                </div>
    
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase">
                        {categoryData.title}
                    </h1>
                    <p className="text-gray-300 mb-10 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Cập nhật những thông tin mới nhất và chuyên sâu về {categoryData.title} tại Baker Tilly A&C.
                    </p>
                    
                </div>
            </section>

            {/* 3. FEATURED POST */}
            <section className="py-12 px-8 md:px-24">
            </section>
    
            {/* 4. LIST POSTS - Sử dụng categoryData.sections */}
            <section className="pb-20 px-8 md:px-24 flex flex-col justify-center md:flex-row gap-12">
                <div className="md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categoryData.sections.map((post: (typeof categoryData.sections)[number]) => (
                            <div key={post.id} className="group cursor-pointer">
                                <div className="aspect-video overflow-hidden mb-4 bg-gray-100">
                                    {/* Vì dữ liệu của bạn chưa có img cho từng bài, mình tạm để placeholder */}
                                    <img 
                                        src={post.img}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        alt={post.title} 
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[#7ca91e] font-bold text-[9px] uppercase tracking-tighter">
                                        {post.tem}
                                    </span>
                                    <span className="text-gray-400 text-[9px]">{post.time}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 group-hover:text-[#7ca91e] transition-colors line-clamp-2 leading-snug mb-2 text-sm">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-[11px] line-clamp-3 leading-relaxed">
                                    {/* Sử dụng title làm nội dung tạm nếu chưa có content chi tiết */}
                                    {post.title}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="mt-16 flex justify-center space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-400">‹</button>
                        <button className="w-8 h-8 flex items-center justify-center bg-[#1f2937] text-white text-xs">1</button>
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs">2</button>
                        <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-400">›</button>
                    </div>
                </div>
            </section>
    
            {/* 5. CONTACT SECTION */}
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