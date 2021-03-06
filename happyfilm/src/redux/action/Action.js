import React from 'react';
import * as ActionType from './../constants/ActionType';
import Axios from 'axios';


const actsingUp = (user) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user,
        })
            .then(result => {
                console.log(result.data);
                alert('dang ky thanh cong')
            })
            .catch(error => {
                console.log(error);
            })
    }

};
const actLogin = (user) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
            .then(result => {
                dispatch({
                    type: ActionType.CLIENT_LOGIN,
                    user: result.data
                })
                localStorage.setItem('accessToken', result.data.accessToken);
            })
            .catch(error => {
                console.log(error);
            })
    }
}
const layDuLieu = ListFilm => {
    return {
        type: ActionType.LAY_DATA,
        ListFilm
    }
}

const layThongTinrap = ListRap => {
    return {
        type: ActionType.LAY_DATA_RAP,
        ListRap
    }
}
const layThongTinLichChieu = ListLichChieu => {
    return {
        type: ActionType.LAY_THONG_TIN_LICH_CHIEU,
        ListLichChieu
    }
}

const actOnListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                dispatch(layDuLieu(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const actDetailMovieAPI = id => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_CHI_TIET_PHIM,
                    movie: result.data,
                    loading: result.status
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const actListRapAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
            .then(result => {
                dispatch(layThongTinrap(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
const actLichChieuRapAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_LICH_CHIEU_RAP,
                    Cinema: result.data,
                    loading: true
                }
                )
            })
            .catch(error => {
                console.log(error)
            })
    }
}
const actLichChieuPhimAPI = (id) => {
    return dispatch => (
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_LICH_CHIEU_PHIM,
                    CinemaMovie: result.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    )
}
const actListRapHeThongAPI = id => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_CHI_TIET_RAP,
                    ListCinemas: result.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}
const actdatVePhimAPI = thongTinDatVe => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            data: thongTinDatVe,
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('accessToken')
            }
        })
            .then(result => {
                dispatch({
                    type: ActionType.DAT_VE_PHIM,
                    danhSachGhe: result.data
                })

            })
            .catch(error => {
                console.log(error)
            })
    }
}

// lấy danh sách phòng vé
const actDanhSachPhongVe = id => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_DS_PHONG_VE,
                    dSachLichChieu: result.data,
                    loading: result.status
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
const actFilterMovie = keyword => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${keyword}`
        })
            .then(result => {
                dispatch(layDuLieu(result.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export { actdatVePhimAPI, layDuLieu, layThongTinrap, actOnListMovieAPI, actListRapAPI, actDetailMovieAPI, actListRapHeThongAPI, actLichChieuRapAPI, layThongTinLichChieu, actLogin, actsingUp, actLichChieuPhimAPI, actDanhSachPhongVe, actFilterMovie }

