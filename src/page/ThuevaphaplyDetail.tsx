import { useParams, Link } from 'react-router-dom';
import { datathuevaphaplydetail, datacapnhatthuevaphaply } from '../Data/datathuevaphaply'; // Đường dẫn file data của bạn

export default function ThuevaphaplyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? datathuevaphaplydetail[slug as keyof typeof datathuevaphaplydetail] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bản tin không tồn tại</h2>
          <Link to="/thue-va-phap-ly" className="text-[#7ca91e] hover:underline font-bold uppercase text-xs tracking-widest">
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#111827]">
      
      {/* 2. ARTICLE HEADER (Kiểu báo chí) */}
      <header className="max-w-4xl mx-auto pt-16 pb-12 px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#7ca91e] text-white text-[9px] font-black px-2 py-1 uppercase tracking-tighter">
            {post.category}
          </span>
          <span className="text-gray-400 text-xs font-medium">|</span>
          <time className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
            {post.date}
          </time>
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-[1.2] mb-8 text-justify">
          {post.title}
        </h1>

      </header>

      {/* 3. MAIN ARTICLE IMAGE */}
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img 
            src={post.src} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <p className="text-[10px] text-gray-400 italic mt-4 text-right">
          Ảnh minh họa: Các quy định mới về quản lý thuế năm 2026.
        </p>
      </div>

      {/* 4. ARTICLE CONTENT (Sạch sẽ, dễ đọc) */}
      <article className="max-w-3xl mx-auto px-8 pb-32">
        <div className="space-y-16">
          {post.sections?.map((section) => (
            <div key={section.id} className="group">
              
              {/* Tiêu đề phần (Heading) */}
              {section.heading && (
                <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-[#7ca91e]"></span>
                  {section.heading}
                </h2>
              )}

              {/* Nội dung dạng Highlight (Lead Paragraph) */}
              {section.type === 'highlight' && (
                <div className="relative">
                  <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-800 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-[#7ca91e]">
                    {section.content}
                  </p>
                  <div className="clear-both"></div>
                </div>
              )}

              {/* Nội dung dạng Văn bản thông thường */}
              {section.type === 'text' && (
                <p className="text-lg text-gray-600 leading-[1.8] text-justify font-light">
                  {section.content}
                </p>
              )}

              {/* Nội dung dạng Danh sách (List) */}
              {section.type === 'list' && (
                <ul className="space-y-6 mt-8">
                  {section.items?.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start bg-gray-50/50 p-6 border-l-2 border-gray-100 hover:border-[#7ca91e] hover:bg-white transition-all shadow-sm">
                      <span className="text-[#7ca91e] font-black text-xs pt-1">0{i + 1}.</span>
                      <span className="text-sm font-bold text-gray-700 uppercase tracking-tight leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </article>

      {/* 6. RELATED NEWS (Giới thiệu các tin khác) */}
      <section className="bg-gray-50 py-24 px-8 md:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[10px] font-black text-[#7ca91e] uppercase tracking-[0.4em] mb-4">
                Tiếp tục cập nhật
                </p>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-16">
                Bản tin pháp luật liên quan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {datacapnhatthuevaphaply.map((post, index) => (
                    <div key={index} className="text-left group cursor-pointer">
                    {/* Cố định khung hình ảnh (ví dụ tỉ lệ 16:9) */}
                    <div className="aspect-video mb-4 overflow-hidden bg-gray-200">
                        <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    
                    <p className="text-[9px] font-bold text-gray-400 mb-2">
                        {post.date}
                    </p>
                    <h4 className="text-sm font-black uppercase leading-snug group-hover:text-[#7ca91e] transition-colors line-clamp-2">
                        {post.title}
                    </h4>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
}