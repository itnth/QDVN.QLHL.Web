export const CommonStored = {
  Status: [
    { value: 'MOI', label: 'Mới' },
    { value: 'TIEPNHAN', label: 'Tiếp nhận' },
    { value: 'TAMDUNG', label: 'Tạm dừng' },
    { value: 'HOANTHANH', label: 'Hoành thành' },
  ],
  UnitType: [
    { value: 'TIEUDOI', label: 'Tiểu đội' },
    { value: 'TRUNGDOI', label: 'Trung đội' },
    { value: 'DAIDOI', label: 'Đại đội' },
    { value: 'TIEUDOAN', label: 'Tiểu đoàn' },
    { value: 'TRUNGDOAN', label: 'Trung đoàn' },
    { value: 'LUUDOAN', label: 'Lữ đoàn' },
    { value: 'SUDOAN', label: 'Sư đoàn' },
    { value: 'QUANDOAN', label: 'Quân đoàn' },
  ],
  Ranks: [
    { value: 'DAITUONG', label: 'Đại tướng' },
    { value: 'THUONGTUONG', label: 'Thượng tướng' },
    { value: 'TRUNGTUONG', label: 'Trung tướng' },
    { value: 'THIEUTUONG', label: 'Thiếu tướng' },
    { value: 'DAITA', label: 'Đại tá' },
    { value: 'THUONGTA', label: 'Thượng tá' },
    { value: 'TRUNGTA', label: 'Trung tá' },
    { value: 'THIEUTA', label: 'Thiếu tá' },
    { value: 'DAIUY', label: 'Đại úy' },
    { value: 'THUONGUY', label: 'Thượng úy' },
    { value: 'TRUNGUY', label: 'Trung úy' },
    { value: 'THIEUUY', label: 'Thiếu úy' },
    { value: 'HOCVIEN', label: 'Học viên' },
    { value: 'THUONGUY', label: 'Thượng sĩ' },
    { value: 'TRUUNGSI', label: 'Trung sĩ' },
    { value: 'HASI', label: 'Hạ sĩ' },
    { value: 'BINHNHAT', label: 'Binh nhất' }
  ],
  DeviceTypes: [
    { value: 'MUBAOHIEU', label: 'Mũ bảo hiểm' },
    { value: 'GIAPTHAN', label: 'Giáp thân' },
    { value: 'MAUNGUYTRANG', label: 'Mẫu ngụy trang' },
    { value: 'SUNGNGAN', label: 'Súng ngắn' },
    { value: 'SUNGTRUONG', label: 'Súng trường' },
    { value: 'SUNGTIEULIEN', label: 'Súng tiểu liên' },
    { value: 'SUNGBANTIA', label: 'Súng bắn tỉa' },
    { value: 'SUNGMAY', label: 'Súng máy' },
    { value: 'SUNGPHONGLUU', label: 'Súng phóng lựu' },
    { value: 'KHAC', label: 'Khác' },
  ],
  Positions: [
    { value: 'TULENH', label: 'Tư lệnh' },
    { value: 'CHINHUY', label: 'Chính ủy' },
    { value: 'CHUNHIEM', label: 'Chủ nhiệm' },
    { value: 'TONGCUCTRUONG', label: 'Tổng cục trưởng' },
    { value: 'TRUONGBAN', label: 'Trưởng ban' },
    { value: 'GIAMDOC', label: 'Giám đốc' },
    { value: 'HIEUTRUONG', label: 'Hiệu trưởng' },
    { value: 'PHOGIAMDOC', label: 'Phó Giám đốc' },
    { value: 'PHOCHINHUY', label: 'Phó chính ủy' },
    { value: 'CUCTRUONGCACCUC', label: 'Cục trưởng các Cục' },
    { value: 'CHANHAN', label: 'Chánh án' },
    { value: 'VIENTRUONG', label: 'Viện trưởng' },
    { value: 'PHOCHUNHIEM', label: 'Phó Chủ nhiệm' },
    { value: 'CHUTICH', label: 'Chủ tịch' },
    { value: 'TONGGIAMDOC', label: 'Tổng giám đốc' },
    { value: 'CHUNHIEMCHINHTRI', label: 'Chủ nhiệm Chính trị' },
    { value: 'PHOTHAMMUUTRUONG', label: 'Phó Tham mưu trưởng' },
    { value: 'PHOCHUNHIEMCHINHTRI', label: 'Phó Chủ nhiệm Chính trị' },
    { value: 'TONGBIENTAP', label: 'Tổng Biên tập' },
    { value: 'SUDOANTRUONG', label: 'Sư đoàn trưởng' },
    { value: 'CHIHUYTRUONG', label: 'Chỉ huy trưởng' },
    { value: 'CUCTRUONGCUCHAUCAN', label: 'Cục trưởng Cục Hậu cần' },
    { value: 'CUCTRUONGCUCKYTHUAT', label: 'Cục trưởng Cục Kỹ thuật' },
    { value: 'CHINHUYCUCHAUCAN', label: 'Chính ủy Cục Hậu cần' },
    { value: 'CHINHUYCUCKYTHUAT', label: 'Chính ủy Cục Kỹ thuật' },
    { value: 'CHANHVANPHONG', label: 'Chánh Văn phòng' },
    { value: 'CHANHTHANHTRA', label: 'Chánh Thanh tra' },
    { value: 'LUDOANTRUONG', label: 'Lữ đoàn trưởng' },
    { value: 'PHOSUDOANTRUONG', label: 'Phó Sư đoàn trưởng' },
    { value: 'TRUNGDOANTRUONG', label: 'Trung đoàn trưởng' },
    { value: 'PHOTRUNGDOANTRUONG', label: 'Phó Trung đoàn trưởng' },
    { value: 'TIEUDOANTRUONG', label: 'Tiểu đoàn trưởng' },
    { value: 'PHOTIEUDOANTRUONG', label: 'Phó Tiểu đoàn trưởng' },
    { value: 'DAIDOITRUONG', label: 'Đại đội trưởng' },
    { value: 'CHINHTRIVIENDAIDOI', label: 'Chính trị viên Đại đội' },
    { value: 'PHODAIDOITRUONG', label: 'Phó Đại đội trưởng' },
    { value: 'CHINHTRIVIENPHODAIDOI', label: 'Chính trị viên phó Đại đội' },
    { value: 'TRUNGDOITRUONG', label: 'Trung đội trưởng' },

  ]
}
