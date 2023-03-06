import {
  home,
  homeActive,
  tasks,
  tasksActive,
  user,
  userActive,
  support,
  supportActive
} from '../assets/images';

// color
export const COLOR = {
  PRIMARY_COLOR: "#FF8228",
  SECONDARY_COLOR: "#1BB55C",
  backgroundWhite: "#FAFAFA",
  white: "#FFFFFF",
  borderColor: "#D3D3D3",
  gray: "#50555C",
  lightGrey: "#EBEBEB",
  black: "#000"
};

// color
export const Spacing = {
  XXS : 2,// 2;
  XS: 4,// 4;
  S: 8,// 8;
  M: 12,// 12;
  L: 16,// 16;
  XL: 24,// 24
  XXL: 36// 36
};

// service name
export const SERVICE = [
  'Giúp việc theo giờ',
  'Chăm sóc người bệnh, người cao tuổi',
  'Tổng vệ sinh',
  'Vệ sinh máy lạnh',
  'Nấu ăn gia đình',
  'Giặt ủi',
  'Khử khuẩn',
  'Vệ sinh sofa, rèm, nệm',
  'bTaskee cho doanh nghiệp'
];

// duration
export const LIST_DURATION = [
  { room: 55, value: 2 },
  { room: 85, value: 3 },
  { room: 105, value: 4 }
]

// minutes
export const MINUTES_ARRAY = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

// reason cancel
export const REASON_CANCEL_LIST = [
  { key: "ASKER_BUSY", value: "Bận việc đột xuất." },
  { key: "POSTED_WRONG_DATE", value: "Đăng nhầm ngày." },
  { key: "ASKER_DONT_NEED_ANYMORE", value: "Không cần công việc này nữa." },
  { key: "NO_TASKER_ACCEPT", value: "Chưa có người nhận." },
];

// type house
export const TYPE_HOUSE = [
  { key: "HOME", value: "Nhà/nhà phố", placeholder: "Số nhà 1, hẻm 2" },
  { key: "APARTMENT", value: "Căn hộ", placeholder: "Lầu 1, phòng 2, block A" },
  { key: "VILLA", value: "Biệt thự", placeholder: "Số nhà 1, hẻm 2" }
];

// city support
export const CITY_LIST = [
  {
    "name": "Hồ Chí Minh",
    "key": "Hồ Chí Minh|Ho Chi Minh|HoChiMinh|HCM|HCMC",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Quận2|Quận 2|Quans 2|Quan 2|Quan 2|Districts 2|District 2|Districts2 District2",
        "name": "Quận 2"
      },
      {
        "key": "Quận3|Quận 3|Quans 3|Quan 3|Quan 3|Districts 3|District 3|Districts3 District3",
        "name": "Quận 3"
      },
      {
        "key": "Quận4|Quận 4|Quans 4|Quan 4|Quan 4|Districts 4|District 4|Districts4 District4",
        "name": "Quận 4"
      },
      {
        "key": "Quận5|Quận 5|Quans 5|Quan 5|Quan 5|Districts 5|District 5|Districts5 District5",
        "name": "Quận 5"
      },
      {
        "key": "Quận6|Quận 6|Quans 6|Quan 6|Quan 6|Districts 6|District 6|Districts6 District6",
        "name": "Quận 6"
      },
      {
        "key": "Quận7|Quận 7|Quans 7|Quan 7|Quan 7|Districts 7|District 7|Districts7 District7",
        "name": "Quận 7"
      },
      {
        "key": "Quận8|Quận 8|Quans 8|Quan 8|Quan 8|Districts 8|District 8|Districts8 District8",
        "name": "Quận 8"
      },
      {
        "key": "Quận9|Quận 9|Quans 9|Quan 9|Quan 9|Districts 9|District 9|Districts9 District9",
        "name": "Quận 9"
      },
      {
        "key": "Quận10|Quận 10|Quans 10|Quan 10|Quan 10|Districts 10|District 10|Districts10 District10",
        "name": "Quận 10"
      },
      {
        "key": "Quận11|Quận 11|Quans 11|Quan 11|Quan 11|Districts 11|District 11|Districts11 District11",
        "name": "Quận 11"
      },
      {
        "key": "Quận12|Quận 12|Quans 12|Quan 12|Quan 12|Districts 12|District 12|Districts12 District12",
        "name": "Quận 12"
      },
      {
        "key": "Bình Thạnh|BinhThanh|Binh Thanh",
        "name": "Bình Thạnh"
      },
      {
        "key": "Bình Tân|BinhTan|Binh Tan",
        "name": "Bình Tân"
      },
      {
        "key": "Bình Chánh|BinhChanh|Binh Chanh",
        "name": "Bình Chánh"
      },
      {
        "key": "Tân Bình|TanBinh|Tan Binh",
        "name": "Tân Bình"
      },
      {
        "key": "Tân Phú|TanPhu|Tan Phu",
        "name": "Tân Phú"
      },
      {
        "key": "Nhà Bè|NhaBe|Nha Be",
        "name": "Nhà Bè"
      },
      {
        "key": "Củ Chi|CuChi|Cu Chi",
        "name": "Củ Chi"
      },
      {
        "key": "Hóc Môn|HocMon|Hoc Mon",
        "name": "Hóc Môn"
      },
      {
        "key": "Thủ Đức|ThuDuc|ThuDuc",
        "name": "Thủ Đức"
      },
      {
        "key": "Gò Vấp|GoVap|Go Vap",
        "name": "Gò Vấp"
      },
      {
        "key": "Cần Giờ|CanGio|Can Gio",
        "name": "Cần Giờ"
      },
      {
        "key": "Phú Nhuận|PhuNhuan|Phu Nhuan",
        "name": "Phú Nhuận"
      },
      {
        "key": "Quận1|Quận 1|Quans 1|Quan 1|Quan 1|Districts 1|District 1|Districts1 District1",
        "name": "Quận 1"
      }
    ]
  },
  {
    "name": "Đà Nẵng",
    "key": "Đà Nẵng|Da Nang|DaNang",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Hải Châu|HaiChau|Hai Chau",
        "name": "Hải Châu"
      },
      {
        "key": "Thanh Khê|ThanhKhe|Thanh Khe",
        "name": "Thanh Khê"
      },
      {
        "key": "Sơn Trà|SonTra|Son Tra",
        "name": "Sơn Trà"
      },
      {
        "key": "Ngũ Hành Sơn|NguHanhSon|Ngu Hanh Son",
        "name": "Ngũ Hành Sơn"
      },
      {
        "key": "Liên Chiểu|LienChieu|Lien Chieu",
        "name": "Liên Chiểu"
      },
      {
        "key": "Hòa Vang|HoaVang|Hoa Vang",
        "name": "Hòa Vang"
      },
      {
        "key": "Cẩm Lệ|CamLe|Cam Le",
        "name": "Cẩm Lệ"
      },
      {
        "key": "Hoàng Sa|HoangSa|Hoang Sa",
        "name": "Hoàng Sa"
      }
    ]
  },
  {
    "name": "Bình Dương",
    "key": "Bình Dương|Binh Duong|BinhDuong",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Thủ Dầu Một|ThuDauMot|Thu Dau Mot",
        "name": "Thủ Dầu Một"
      },
      {
        "key": "Bến Cát|BenCat|Ben Cat",
        "name": "Bến Cát"
      },
      {
        "key": "Dĩ An|DiAn|Di An",
        "name": "Dĩ An"
      },
      {
        "key": "Tân Uyên|TanUyen|Tan Uyen",
        "name": "Tân Uyên"
      },
      {
        "key": "Thuận An|ThuanAn|Thuan An",
        "name": "Thuận An"
      },
      {
        "key": "Dầu Tiếng|DauTieng|Dau Tieng",
        "name": "Dầu Tiếng"
      },
      {
        "key": "Phú Giáo|PhuGiao|Phu Giao",
        "name": "Phú Giáo"
      },
      {
        "key": "Bàu Bàng|BauBang|Bau Bang",
        "name": "Bàu Bàng"
      }
    ]
  },
  {
    "name": "Đồng Nai",
    "key": "Đồng Nai|Dong Nai|DongNai",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Biên Hòa|BienHoa|Bien Hoa",
        "name": "Biên Hòa"
      },
      {
        "key": "Cẩm Mỹ|CamMy|Cam My",
        "name": "Cẩm Mỹ"
      },
      {
        "key": "Định Quán|DinhQuan|Dinh Quan",
        "name": "Định Quán"
      },
      {
        "key": "Long Khánh|LongKhanh|Long Khanh",
        "name": "Long Khánh"
      },
      {
        "key": "Long Thành|LongThanh|Long Thanh",
        "name": "Long Thành"
      },
      {
        "key": "Nhơn Trạch|NhonTrach|Nhon Trach",
        "name": "Nhơn Trạch"
      },
      {
        "key": "Tân Phú|TanPhu|Tan Phu",
        "name": "Tân Phú"
      },
      {
        "key": "Thống Nhất|ThongNhat|Thong Nhat",
        "name": "Thống Nhất"
      },
      {
        "key": "Trảng Bom|TrangBom|Trang Bom",
        "name": "Trảng Bom"
      },
      {
        "key": "Vĩnh Cửu|VinhCuu|Vinh Cuu",
        "name": "Vĩnh Cửu"
      },
      {
        "key": "Xuân Lộc|XuanLoc|Xuan Loc",
        "name": "Xuân Lộc"
      }
    ]
  },
  {
    "name": "Hải Phòng",
    "key": "Hải Phòng|HaiPhong|Hai Phong",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Hồng Bàng|HongBang|Hong Bang",
        "name": "Hồng Bàng"
      },
      {
        "key": "Dương Kinh|DuongKinh|Duong Kinh",
        "name": "Dương Kinh"
      },
      {
        "key": "Đồ Sơn|DoSon|Do Son",
        "name": "Đồ Sơn"
      },
      {
        "key": "Bạch Long Vĩ|BachLongVi|Bach Long Vi",
        "name": "Bạch Long Vĩ"
      },
      {
        "key": "Cát Hải|CatHai|Cat Hai",
        "name": "Cát Hải"
      },
      {
        "key": "Vĩnh Bảo|VinhBao|Vinh Bao",
        "name": "Vĩnh Bảo"
      },
      {
        "key": "Tiên Lãng|TienLang|Tien Lang",
        "name": "Tiên Lãng"
      },
      {
        "key": "Kiến Thụy|KienThuy|Kien Thuy",
        "name": "Kiến Thụy"
      },
      {
        "key": "An Lão|An Lao|An Lao",
        "name": "An Lão"
      },
      {
        "key": "Hải An|HaiAn|Hai An",
        "name": "Hải An"
      },
      {
        "key": "Thủy Nguyên|ThuyNguyen|Thuy Nguyen",
        "name": "Thủy Nguyên"
      },
      {
        "key": "Kiến An|KienAn|Kien An",
        "name": "Kiến An"
      },
      {
        "key": "Lê Chân|LeChan|Le Chan",
        "name": "Lê Chân"
      },
      {
        "key": "Ngô Quyền|NgoQuyen|Ngo Quyen",
        "name": "Ngô Quyền"
      },
      {
        "key": "An Dương|AnDuong|An Duong",
        "name": "An Dương"
      }
    ]
  },
  {
    "name": "Lâm Đồng",
    "key": "Lâm Đồng|Lam Dong|Lam Dong",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Đức Trọng|DucTrong|Duc Trong",
        "name": "Đức Trọng"
      },
      {
        "key": "Đơn Dương|DonDuong|Don Duong",
        "name": "Đơn Dương"
      },
      {
        "key": "Bảo Lộc|BaoLoc|Bao Loc",
        "name": "Bảo Lộc"
      },
      {
        "key": "Đạ Tẻh|DaTeh|Da Teh",
        "name": "Đạ Tẻh"
      },
      {
        "key": "Bảo Lâm|BaoLam|Bao Lam",
        "name": "Bảo Lâm"
      },
      {
        "key": "Đạ Huoai|DaHuoai|Da Huoai",
        "name": "Đạ Huoai"
      },
      {
        "key": "Lạc Dương|LacDuong|Lac Duong",
        "name": "Lạc Dương"
      },
      {
        "key": "Cát Tiên|CatTien|Cat Tien",
        "name": "Cát Tiên"
      },
      {
        "key": "Lâm Hà|LamHa|Lam Ha",
        "name": "Lâm Hà"
      },
      {
        "key": "Di Linh|DiLinh",
        "name": "Di Linh"
      },
      {
        "key": "Đà Lạt|DaLat|Da Lat",
        "name": "Đà Lạt"
      },
      {
        "key": "Đam Rông|DamRong|Dam Rong",
        "name": "Đam Rông"
      }
    ]
  },
  {
    "name": "Khánh Hòa",
    "key": "Khánh Hòa|KhanhHoa|Khanh Hoa",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Cam Ranh|CamRanh",
        "name": "Cam Ranh"
      },
      {
        "key": "Trường Sa|TruongSa|Truong Sa",
        "name": "Trường Sa"
      },
      {
        "key": "Ninh Hòa|NinhHoa|Ninh Hoa",
        "name": "Ninh Hòa"
      },
      {
        "key": "Khánh Sơn|KhanhSon|Khanh Son",
        "name": "Khánh Sơn"
      },
      {
        "key": "Khánh Vĩnh|KhanhVinh|Khanh Vinh",
        "name": "Khánh Vĩnh"
      },
      {
        "key": "Diên Khánh|DienKhanh|Dien Khanh",
        "name": "Diên Khánh"
      },
      {
        "key": "Vạn Ninh|VanNinh|Van Ninh",
        "name": "Vạn Ninh"
      },
      {
        "key": "Cam Lâm|CamLam|Cam Lam",
        "name": "Cam Lâm"
      },
      {
        "key": "Nha Trang|NhaTrang",
        "name": "Nha Trang"
      }
    ]
  },
  {
    "name": "Cần Thơ",
    "key": "Cần Thơ|Can Tho|CanTho",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Cờ Đỏ|CoDo|Co Do",
        "name": "Cờ Đỏ"
      },
      {
        "key": "Phong Điền|PhongDien|Phong Dien",
        "name": "Phong Điền"
      },
      {
        "key": "Ô Môn|OMon|O Mon",
        "name": "Ô Môn"
      },
      {
        "key": "Cái Răng|CaiRang|Cai Rang",
        "name": "Cái Răng"
      },
      {
        "key": "Bình Thủy|BinhThuy|Binh Thuy",
        "name": "Bình Thủy"
      },
      {
        "key": "Ninh Kiều|NinhKieu|Ninh Kieu",
        "name": "Ninh Kiều"
      },
      {
        "key": "Thốt Nốt|ThotNot|Thot Not",
        "name": "Thốt Nốt"
      },
      {
        "key": "Vĩnh Thạnh|VinhThanh|Vinh Thanh",
        "name": "Vĩnh Thạnh"
      },
      {
        "key": "Thới Lai|ThoiLai|Thoi Lai",
        "name": "Thới Lai"
      }
    ]
  },
  {
    "name": "Hà Nội",
    "key": "Hà Nội|Ha Noi|HaNoi",
    "status": "ACTIVE",
    "district": [
      {
        "key": "Hoàn Kiếm|HoanKiem|Hoan Kiem",
        "name": "Hoàn Kiếm"
      },
      {
        "key": "Ba Đình|BaDinh|Ba Dinh",
        "name": "Ba Đình"
      },
      {
        "key": "Cầu Giấy|CauGiay|Cau Giay",
        "name": "Cầu Giấy"
      },
      {
        "key": "Đống Đa|DongDa|Dong Da",
        "name": "Đống Đa"
      },
      {
        "key": "Hà Đông|HaDong|Ha Dong",
        "name": "Hà Đông"
      },
      {
        "key": "Hoàng Mai|HoangMai|Hoang Mai",
        "name": "Hoàng Mai"
      },
      {
        "key": "Long Biên|LongBien|Long Bien",
        "name": "Long Biên"
      },
      {
        "key": ", Tu Liem|,Tu Liem| Từ Liêm|Từ Liêm|Tu Liem|TuLiem",
        "name": "Từ Liêm"
      },
      {
        "key": "Nam Từ Liêm|NamTuLiem|Nam Tu Liem",
        "name": "Nam Từ Liêm"
      },
      {
        "key": "Bắc Từ Liêm|BacTuLiem|Bac Tu Liem",
        "name": "Bắc Từ Liêm"
      },
      {
        "key": "Tây Hồ|TayHo|Tay Ho",
        "name": "Tây Hồ"
      },
      {
        "key": "Thanh Xuân|ThanhXuan|Thanh Xuan",
        "name": "Thanh Xuân"
      },
      {
        "key": "Thanh Trì|ThanhTri|Thanh Tri",
        "name": "Thanh Trì"
      },
      {
        "key": "a Lâm|GiaLam|Gia Lam",
        "name": "Gia Lâm"
      },
      {
        "key": "Đông Anh|DongAnh|Dong Anh",
        "name": "Đông Anh"
      },
      {
        "key": "Sóc Sơn|SocSon|Soc Son",
        "name": "Sóc Sơn"
      },
      {
        "key": "Sơn Tây|SonTay|Son Tay",
        "name": "Sơn Tây"
      },
      {
        "key": "Ba Vì|BaVi|Ba Vi",
        "name": "Ba Vì"
      },
      {
        "key": "Phúc Thọ|PhucTho|Phuc Tho",
        "name": "Phúc Thọ"
      },
      {
        "key": "Thạch Thất|ThachThat|Thach That",
        "name": "Thạch Thất"
      },
      {
        "key": "Quốc Oai|QuocOai|Quoc Oai",
        "name": "Quốc Oai"
      },
      {
        "key": "Chương Mỹ|ChuongMy|Chuong My",
        "name": "Chương Mỹ"
      },
      {
        "key": "Đan Phượng|DanPhuong|Dan Phuong",
        "name": "Đan Phượng"
      },
      {
        "key": "Hoài Đức|HoaiDuc|Hoai Duc",
        "name": "Hoài Đức"
      },
      {
        "key": "Thanh Oai|ThanhOai|Thanh Oai",
        "name": "Thanh Oai"
      },
      {
        "key": "Mỹ Đức|MyDuc|My Duc",
        "name": "Mỹ Đức"
      },
      {
        "key": "Ứng Hoà|UngHoa|Ung Hoa",
        "name": "Ứng Hoà"
      },
      {
        "key": "Thường Tín|ThuongTin|Thuong Tin",
        "name": "Thường Tín"
      },
      {
        "key": "Phú Xuyên|PhuXuyen|Phu Xuyen",
        "name": "Phú Xuyên"
      },
      {
        "key": "Mê Linh|MeLinh|Me Linh",
        "name": "Mê Linh"
      },
      {
        "key": "Hai Bà Trưng|HaiBaTrung|Hai Ba Trung",
        "name": "Hai Bà Trưng"
      }
    ]
  }
];

// icon tab bar
export const iconHome = {
  active: homeActive,
  inActive: home
};
export const iconListTask = {
  active: tasksActive,
  inActive: tasks
};
export const iconUser = {
  active: userActive,
  inActive: user
};
export const iconSupport = {
  active: supportActive,
  inActive: support
};