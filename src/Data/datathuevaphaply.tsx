import Thuevaphaply1 from "../assets/thue-phap-ly-1.jpg";
import Thuevaphaply2 from "../assets/thue-phap-ly-2.jpg";
import Thuevaphaply3 from "../assets/thue-phap-ly-3.jpg";
import Thuevaphaply4 from "../assets/thue-phap-ly-4.jpg";
import Thuevaphaply5 from "../assets/thue-phap-ly-5.jpg";
import Thuevaphaply6 from "../assets/thue-phap-ly-6.png";
import Bantinthue from "../assets/Bản tin A&C.jpg";

export const datatextimage = [
    {
        src: Bantinthue,
        title: 'Cập nhật thuế và pháp lý',
    }
]

export const datacapnhatthuevaphaply = [
    {
        img: Thuevaphaply1,
        id: 1,
        title: 'Cập nhật thuế và pháp lý',
        content: 'Thông Tư 20/2026/TT-BTC hướng dẫn Thuế TNDN',
        date:'Ngày đăng - 23/03/2026',
        link: '/cap-nhat-thue-va-phap-ly/thong-tu-20-2026-tt-btc-huong-dan-thue-tndn'
    },
    {
        img: Thuevaphaply2,
        id: 2,
        title: 'Cập nhật thuế và pháp lý',
        content: 'Bản tin thuế: những thay đổi cốt lõi từ nghị định 68/2026/NĐ-CP quản lý thuế hộ kinh doanh',
        date:'Ngày đăng 09/03/2026',
        link: '/cap-nhat-thue-va-phap-ly/ban-tin-thue-nhung-thay-doi-cot-loi-tu-nghi-dinh-68-2026-nd-cp-quan-ly-thue-ho-kinh-doanh'
    },
    {
        img: Thuevaphaply3,
        id: 3,
        title: 'Cập nhật thuế và pháp lý',
        content: 'Công Văn 296/CT-CS: hướng dẫn xác định nghĩa vụ thuế nhà thầu đối với dịch vụ trung tâm dữ liệu & điện toán đám mây',
        date:'Ngày đăng 07/02/2026',
        link: '/cap-nhat-thue-va-phap-ly/cong-van-296-ct-cs-huong-dan-xac-dinh-nghia-vu-thue-nha-thau-doi-voi-dich-vu-trung-tam-du-lieu-dien-toan-da-may'
    },
    {
        img: Thuevaphaply4,
        id: 4,
        title: 'Cập nhật thuế và pháp lý',
        content: 'Nghị định 359/2025/NĐ-CP: bãi bỏ ràng buộc trách nhiệm người bán trong hoàn thuế & cơ chế GTGT cho hàng nông sản',
        date:'Ngày đăng 05/01/2026',
        link: '/cap-nhat-thue-va-phap-ly/nghi-dinh-359-2025-nd-cp-bai-bo-rang-buoc-trach-nhiem-nguoi-ban-trong-hoan-thue-co-che-gtgt-cho-hang-nong-san'
    },
    {
        img: Thuevaphaply5,
        id: 5,
        title: 'Cập nhật thuế và pháp lý',
        content: 'Những lưu ý quan trọng về phạm vi thanh toán không dùng tiền mặt theo nghị định 320/2025/NĐ-CP',
        date:'Ngày đăng 25/12/2025',
        link: '/cap-nhat-thue-va-phap-ly/nhung-luu-y-quan-trong-ve-pham-vi-thanh-toan-khong-dung-tien-mat-theo-nghi-dinh-320-2025-nd-cp'
    },
    {
        img: Thuevaphaply6,
        id: 6,
        title: 'Cập nhật thuế và pháp lý',
        content: 'Những lưu ý quan trọng về phạm vi thanh toán không dùng tiền mặt theo nghị định 320/2025/NĐ-CP',
        date:'Ngày đăng - 25/12/2025',
        link: '/cap-nhat-thue-va-phap-ly/nhung-luu-y-quan-trong-ve-pham-vi-thanh-toan-khong-dung-tien-mat-theo-nghi-dinh-320-2025-nd-cp'
    }
]



export const datathuevaphaplydetail = {
    'thong-tu-20-2026-tt-btc-huong-dan-thue-tndn': {
        src: Thuevaphaply1,
        category: 'Cập nhật thuế và pháp lý', 
        title: 'Thông Tư 20/2026/TT-BTC hướng dẫn Thuế TNDN',
        date: '23/03/2026',
        sections: [
            {
                id: 1,
                type: 'highlight',
                content: 'Ngày 12/03/2026, Bộ Tài chính ban hành Thông tư 20/2026/TT-BTC hướng dẫn chi tiết Luật Thuế TNDN số 67/2025/QH15, tập trung vào hồ sơ chi phí, doanh thu xuất khẩu và Thuế nhà thầu trong nền kinh tế số.'
            },
            {
                id: 2,
                type: 'text',
                heading: 'Tổng quan phạm vi điều chỉnh:',
                content: 'Thông tư này chuẩn hóa hệ thống hồ sơ chứng từ cho các khoản chi đặc thù, quy định hồ sơ hưởng ưu đãi thuế, nguyên tắc xác định doanh thu tính thuế và đặc biệt là chính sách Thuế nhà thầu đối với các giao dịch thương mại điện tử.'
            },
            {
                id: 3,
                type: 'list',
                heading: 'Chuẩn hóa hồ sơ chi phí được trừ:',
                items: [
                    'Chi tài trợ (Y tế, Giáo dục...): Sử dụng Mẫu số 01/TNDN theo quy định mới',
                    'Mua hàng không hóa đơn: Lập bảng kê Mẫu số 02/TNDN; thanh toán không dùng tiền mặt từ 05 triệu đồng/ngày trở lên',
                    'Nhân viên thanh toán hộ: Chấp nhận chi phí nếu có quy chế ủy quyền và thực hiện thanh toán không dùng tiền mặt',
                    'Cơ chế chuyển tiếp 2025: Tiếp tục áp dụng Thông tư 96/2015/TT-BTC đối với các khoản chi cũ để đảm bảo tính ổn định'
                ]
            },
            {
                id: 4,
                type: 'text',
                heading: 'Điểm mới về Doanh thu & Thuế nhà thầu:',
                content: 'Doanh thu hàng xuất khẩu được xác định tại thời điểm chuyển giao quyền sở hữu. Đối với Thuế nhà thầu, phạm vi chịu thuế được mở rộng sang nền tảng số xuyên biên giới, đồng thời miễn thuế cho hoạt động tái cơ cấu nội bộ tập đoàn không làm thay đổi công ty mẹ tối cao.'
            },
            {
                id: 5,
                type: 'list',
                heading: 'Khuyến nghị thực hiện từ Baker Tilly A&C:',
                items: [
                    'Khẩn trương cập nhật quy chế tài chính về việc ủy quyền thanh toán hộ cho người lao động',
                    'Rà soát các hợp đồng dịch vụ xuyên biên giới để xác định nghĩa vụ Thuế nhà thầu theo cơ chế mới',
                    'Sử dụng các biểu mẫu mới (01/TNDN, 02/TNDN) ngay trong kỳ quyết toán thuế gần nhất',
                    'Liên hệ chuyên gia để tận dụng tối đa cơ chế chuyển tiếp cho kỳ tính thuế năm 2025'
                ]
            }
        ]
    },
    'ban-tin-thue-nhung-thay-doi-cot-loi-tu-nghi-dinh-68-2026-nd-cp-quan-ly-thue-ho-kinh-doanh': {
    src: Thuevaphaply2, // Đường dẫn ảnh minh họa
    category: 'Cập nhật thuế và pháp lý', 
    title: 'Những thay đổi cốt lõi từ Nghị định 68/2026/NĐ-CP về Thuế Hộ kinh doanh',
    date: '09/03/2026',
    sections: [
        {
            id: 1,
            type: 'highlight',
            content: 'Ngày 05/03/2026, Chính phủ ban hành Nghị định 68/2026/NĐ-CP nâng ngưỡng doanh thu miễn thuế lên 500 triệu đồng và áp dụng phương pháp tính thuế dựa trên Lợi nhuận cho hộ kinh doanh quy mô lớn.'
        },
        {
            id: 2,
            type: 'list',
            heading: 'Ngưỡng doanh thu và Phương pháp tính thuế TNCN:',
            items: [
                'Doanh thu ≤ 500 triệu đồng/năm: Miễn thuế GTGT và thuế TNCN.',
                'Doanh thu > 500 triệu - 03 tỷ đồng: Thuế TNCN tính theo tỷ lệ % trên doanh thu (được trừ 500 triệu trước khi tính thuế).',
                'Doanh thu > 03 tỷ đồng: Bắt buộc tính thuế theo phương pháp "Thu nhập tính thuế" (Doanh thu - Chi phí hợp lý).',
                'Cho thuê bất động sản: Bắt buộc nộp theo tỷ lệ % doanh thu (không áp dụng trừ chi phí).'
            ]
        },
        {
            id: 3,
            type: 'text',
            heading: 'Quản lý thuế đối với Thương mại điện tử (TMĐT):',
            content: 'Các sàn TMĐT có chức năng thanh toán chịu trách nhiệm khấu trừ, kê khai và nộp thuế thay cho hộ kinh doanh trên từng giao dịch. Đối với sàn không có chức năng thanh toán, hộ kinh doanh phải tự kê khai. Số thuế sàn đã nộp thay sẽ được trừ vào số thuế phải nộp khi quyết toán năm.'
        },
        {
            id: 4,
            type: 'list',
            heading: 'Quy định về Hóa đơn điện tử (HĐĐT):',
            items: [
                'Doanh thu ≥ 01 tỷ đồng: Bắt buộc sử dụng HĐĐT có mã hoặc khởi tạo từ máy tính tiền.',
                'Doanh thu 500 triệu - dưới 01 tỷ đồng: Không bắt buộc dùng HĐĐT thường xuyên (cấp theo từng lần phát sinh nếu cần).',
                'Kiểm kê chuyển tiếp: Hộ kinh doanh chuyển sang nộp thuế theo lợi nhuận phải nộp Bảng kê hàng tồn kho/máy móc trước ngày 20/04/2026.'
            ]
        },
        {
            id: 5,
            type: 'text',
            heading: 'Khuyến nghị tuân thủ từ Baker Tilly A&C:',
            content: 'Hộ kinh doanh cần khẩn trương đánh giá mức doanh thu dự kiến năm 2026 và thực hiện kiểm kê tài sản/hàng tồn kho tại thời điểm 31/12/2025. Việc lưu trữ hóa đơn chi phí đầu vào trở nên cực kỳ quan trọng đối với các hộ kinh doanh quy mô lớn để tối ưu hóa số thuế phải nộp.'
        }
    ]
    },
    'cong-van-296-ct-cs-huong-dan-xac-dinh-nghia-vu-thue-nha-thau-doi-voi-dich-vu-trung-tam-du-lieu-dien-toan-da-may': {
    src: Thuevaphaply3, // Đường dẫn ảnh minh họa dịch vụ số
    category: 'Cập nhật thuế và pháp lý', 
    title: 'Công Văn 296/CT-CS: Thuế nhà thầu dịch vụ Cloud & Data Center',
    date: '07/02/2026',
    sections: [
        {
            id: 1,
            type: 'highlight',
            content: 'Ngày 19/01/2026, Cục Thuế ban hành Công văn 296/CT-CS làm rõ việc xác định nghĩa vụ thuế Nhà thầu dựa trên Luật Viễn thông và Luật Sở hữu trí tuệ đối với các dịch vụ số phổ biến.'
        },
        {
            id: 2,
            type: 'text',
            heading: 'Định danh dịch vụ Viễn thông (Thuế GTGT):',
            content: 'Công văn xác định dịch vụ Trung tâm dữ liệu (Data Center), Điện toán đám mây (Cloud Computing) và OTT thuộc nhóm Dịch vụ Viễn thông. Việc này chấm dứt sự không thống nhất khi trước đây các dịch vụ này thường được xem là dịch vụ phần mềm.'
        },
        {
            id: 3,
            type: 'list',
            heading: 'Tác động về thuế suất GTGT:',
            items: [
                'Từ 01/07/2025: Dịch vụ viễn thông qua nền tảng số của Nhà thầu nước ngoài chịu thuế suất GTGT 10%.',
                'Trước 01/07/2025: Doanh nghiệp cần rà soát lại việc kê khai dưới dạng "Dịch vụ phần mềm" (0% GTGT) vì đây được xem là vùng rủi ro cao.',
                'Yêu cầu tuân thủ: Cập nhật ngay mức thuế suất 10% trên các tờ khai thuế nhà thầu phát sinh theo thực tế.'
            ]
        },
        {
            id: 4,
            type: 'text',
            heading: 'Tiền bản quyền và Thuế TNDN:',
            content: 'Căn cứ Luật Sở hữu trí tuệ 2022, doanh nghiệp phải phân tách rõ bản chất khoản chi để xác định là "Tiền bản quyền" hay "Dịch vụ thông thường". Tiền bản quyền chịu thuế TNDN nhà thầu 10%, cao gấp đôi so với mức 5% của dịch vụ thông thường.'
        },
        {
            id: 5,
            type: 'list',
            heading: 'Khuyến nghị từ Baker Tilly A&C:',
            items: [
                'Rà soát hợp đồng với các nhà cung cấp lớn như Google, AWS, Microsoft để xác định đúng tính chất dịch vụ.',
                'Chủ động kê khai điều chỉnh bổ sung nếu phát hiện áp dụng sai thuế suất GTGT hoặc TNDN trước đó.',
                'Lưu trữ hồ sơ minh chứng bản chất dịch vụ để giải trình với cơ quan thuế khi có thanh kiểm tra.',
                'Liên tục cập nhật sự giao thoa giữa luật thuế và các luật chuyên ngành (Viễn thông, SHTT) để tránh rủi ro truy thu.'
            ]
        }
    ]
    },
    'nghi-dinh-20-2026-nd-cp-huong-dan-chi-tiet-uu-dai-mien-thue-va-ho-tro-mat-bang-theo-nghi-quyet-198': {
    src: Thuevaphaply4, // Đường dẫn ảnh minh họa
    category: 'Cập nhật thuế và pháp lý', 
    title: 'Nghị định 20/2026/NĐ-CP: Ưu đãi thuế và Hỗ trợ mặt bằng theo Nghị quyết 198',
    date: '23/01/2026',
    sections: [
        {
            id: 1,
            type: 'highlight',
            content: 'Ban hành ngày 15/01/2026, Nghị định 20 cụ thể hóa các gói ưu đãi thuế TNDN, TNCN và cơ chế hỗ trợ đất đai nhằm bứt phá kinh tế tư nhân, đặc biệt là SME và Startup.'
        },
        {
            id: 2,
            type: 'list',
            heading: 'Ưu đãi Thuế Thu nhập doanh nghiệp (TNDN):',
            items: [
                'Doanh nghiệp nhỏ và vừa (SME): Miễn thuế TNDN 03 năm liên tục kể từ khi cấp đăng ký kinh doanh lần đầu.',
                'Startup & Tổ chức hỗ trợ: Miễn thuế 02 năm và giảm 50% trong 04 năm tiếp theo đối với thu nhập từ hoạt động khởi nghiệp sáng tạo.',
                'Nhà đầu tư thiên thần: Miễn thuế TNDN và TNCN đối với thu nhập từ chuyển nhượng vốn góp vào doanh nghiệp khởi nghiệp sáng tạo.',
                'Chi phí R&D: Được tính vào chi phí được trừ bằng 200% chi phí thực tế khi xác định thu nhập chịu thuế.'
            ]
        },
        {
            id: 3,
            type: 'text',
            heading: 'Hỗ trợ nhân tài và Thuế TNCN:',
            content: 'Nhằm thu hút chuyên gia và nhà khoa học, Nghị định cho phép miễn thuế TNCN trong 02 năm và giảm 50% trong 04 năm tiếp theo đối với thu nhập từ tiền lương, tiền công tại các Startup và Trung tâm R&D.'
        },
        {
            id: 4,
            type: 'list',
            heading: 'Hỗ trợ mặt bằng và Chuyển đổi số:',
            items: [
                'Giảm tiền thuê đất: Hỗ trợ giảm tối thiểu 30% tiền thuê lại đất trong 05 năm đầu tại các KCN, vườn ươm công nghệ.',
                'Tài sản công: SME được ưu tiên và hỗ trợ giá thuê đối với nhà, đất là tài sản công chưa sử dụng hết công suất.',
                'Phần mềm kế toán: Cung cấp miễn phí nền tảng kế toán tích hợp hóa đơn điện tử và chữ ký số cho doanh nghiệp siêu nhỏ và hộ kinh doanh.',
                'Đào tạo quản trị: Ngân sách Nhà nước hỗ trợ 100% chi phí khóa đào tạo về quản trị doanh nghiệp, kế toán và thuế.'
            ]
        },
        {
            id: 5,
            type: 'text',
            heading: 'Khuyến nghị tuân thủ từ Baker Tilly A&C:',
            content: 'Doanh nghiệp cần rà soát kỹ đối tượng hưởng ưu đãi để tránh rủi ro truy thu. Bắt buộc phải hạch toán riêng thu nhập từ hoạt động được ưu đãi và chuẩn bị hồ sơ chứng minh tư cách chuyên gia, nhà khoa học theo đúng quy định của Luật Khoa học và Công nghệ.'
        }
    ]
    },
   'nghi-dinh-359-2025-nd-cp-bai-bo-rang-buoc-trach-nhiem-nguoi-ban-trong-hoan-thue-co-che-gtgt-cho-hang-nong-san': {
    src: Thuevaphaply5, // Đường dẫn ảnh minh họa
    category: 'Cập nhật thuế và pháp lý', 
    title: 'Nghị định 359/2025/NĐ-CP: Bãi bỏ ràng buộc hoàn thuế & Cơ chế GTGT nông sản',
    date: '05/01/2026',
    sections: [
        {
            id: 1,
            type: 'highlight',
            content: 'Ban hành ngày 31/12/2025 và có hiệu lực từ 01/01/2026, Nghị định 359 chính thức bãi bỏ quy định dừng hoàn thuế của người mua do lỗi nợ thuế của người bán, đồng thời phân định rõ cơ chế GTGT cho hàng nông sản.'
        },
        {
            id: 2,
            type: 'list',
            heading: 'Cơ chế thuế GTGT đối với hàng nông sản:',
            items: [
                'Doanh nghiệp/HTX (khấu trừ) bán cho Doanh nghiệp/HTX khác: Không phải kê khai, tính nộp thuế GTGT nhưng vẫn được khấu trừ thuế đầu vào.',
                'Bán cho hộ cá nhân kinh doanh hoặc người tiêu dùng: Phải tính thuế GTGT với mức thuế suất 5%.',
                'Hộ cá nhân kinh doanh hoặc doanh nghiệp nộp trực tiếp: Áp dụng tỷ lệ thuế GTGT 1% trên doanh thu.'
            ]
        },
        {
            id: 3,
            type: 'text',
            heading: 'Thay đổi đột phá về Hoàn thuế GTGT:',
            content: 'Nghị định bãi bỏ hoàn toàn điều kiện buộc người mua chịu trách nhiệm liên đới nếu người bán chưa nộp tờ khai hoặc nợ thuế. Điều này giúp tách biệt trách nhiệm pháp lý, bảo vệ dòng tiền cho các doanh nghiệp làm ăn chân chính và giảm thiểu rủi ro ách tắc hồ sơ hoàn thuế do lỗi từ phía nhà cung cấp.'
        },
        {
            id: 4,
            type: 'list',
            heading: 'Quy định chuyển tiếp và Tháo gỡ hồ sơ tồn đọng:',
            items: [
                'Hồ sơ nộp trước 01/01/2026 chưa có quyết định hoàn: Không phải đáp ứng điều kiện "người bán đã kê khai, nộp thuế" đối với hóa đơn liên quan.',
                'Quy định này giúp giải tỏa các "điểm nghẽn" pháp lý cho các hồ sơ đang bị dừng hoàn thuế trước đây.'
            ]
        },
        {
            id: 5,
            type: 'text',
            heading: 'Khuyến nghị từ Baker Tilly A&C:',
            content: 'Doanh nghiệp cần rà soát lại hệ thống hóa đơn điện tử để tách biệt dòng thuế suất (0% hoặc 5%) theo đúng đối tượng khách hàng. Đồng thời, cần chủ động làm việc với cơ quan thuế đối với các hồ sơ hoàn đang vướng mắc để áp dụng ngay cơ chế mới nhằm sớm giải ngân tiền hoàn thuế.'
        }
    ]
    },
    'nhung-luu-y-quan-trong-ve-pham-vi-thanh-toan-khong-dung-tien-mat-theo-nghi-dinh-320-2025-nd-cp': {
    src: Thuevaphaply6, // Đường dẫn ảnh minh họa
    category: 'Cập nhật thuế và pháp lý', 
    title: 'Lưu ý về phạm vi thanh toán không dùng tiền mặt theo Nghị định 320/2025/NĐ-CP',
    date: '25/12/2025',
    sections: [
        {
            id: 1,
            type: 'highlight',
            content: 'Nghị định 320/2025/NĐ-CP (có hiệu lực từ 15/12/2025) chính thức điều chỉnh ngưỡng thanh toán không dùng tiền mặt xuống mức 05 triệu đồng và mở rộng phạm vi sang các khoản thanh toán khác ngoài mua hàng hóa, dịch vụ.'
        },
        {
            id: 2,
            type: 'text',
            heading: 'Quy định mới về chi phí được trừ:',
            content: 'Tại Điểm c, Khoản 1, Điều 9, Nghị định quy định các khoản chi từng lần từ 05 triệu đồng trở lên phải có chứng từ thanh toán không dùng tiền mặt mới được tính là chi phí hợp lý. Điểm cốt lõi là sự xuất hiện của cụm từ "các khoản thanh toán khác", cho thấy sự kiểm soát bao quát hơn đối với mọi dòng tiền chi ra.'
        },
        {
            id: 3,
            type: 'list',
            heading: 'Các khoản chi cần lưu ý đặc biệt:',
            items: [
                'Chi bồi thường hợp đồng có giá trị từ 05 triệu đồng trở lên.',
                'Các khoản chi hỗ trợ trực tiếp không thông qua hóa đơn mua bán.',
                'Các khoản chi phí tài chính đặc thù của doanh nghiệp.',
                'Các giao dịch trực tiếp với cá nhân có giá trị vượt ngưỡng quy định.'
            ]
        },
        {
            id: 4,
            type: 'text',
            heading: 'Thay đổi về tư duy quản lý:',
            content: 'Trước đây, doanh nghiệp thường chỉ áp dụng quy định này cho các giao dịch có hóa đơn GTGT. Nghị định mới đã xóa nhòa ranh giới này, yêu cầu tính minh bạch cho cả những khoản chi không phát sinh từ hoạt động mua bán thông thường.'
        },
        {
            id: 5,
            type: 'list',
            heading: 'Khuyến nghị thực thi từ Baker Tilly A&C:',
            items: [
                'Cập nhật ngay hạn mức chi tiêu tiền mặt tại quỹ xuống dưới 05 triệu đồng để phù hợp quy định mới.',
                'Ưu tiên phương thức chuyển khoản cho mọi giao dịch với cá nhân để đảm bảo tính minh bạch.',
                'Rà soát và bóc tách chi tiết các khoản chi bằng tiền mặt để tránh vượt ngưỡng 05 triệu đồng từng lần.',
                'Thực hiện thanh toán không dùng tiền mặt cho tất cả các khoản chi phí khác để thuận lợi cho công tác giải trình sau này.'
            ]
        }
    ]
}
}