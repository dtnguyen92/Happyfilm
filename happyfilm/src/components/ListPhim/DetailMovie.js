import React, { Component } from 'react';
import *as  action from './../../redux/action/Action';
import { connect } from 'react-redux';


class DetailMovie extends Component {

    state = {
        loading: false
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        this.props.detailMovie(id);

    }

    renderTable = () => {
        let { movie } = this.props
        new Date("2019-01-02T14:10:00").toLocaleTimeString();

        if (movie.lichChieu) {
            return movie.lichChieu.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td> {new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                    </tr>
                );
            })
        }

    }

    render() {
        let { movie } = this.props;
        return (
            <div className="detail_movie container" style={{ backgroundColor: "white" }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={movie.hinhAnh} />
                    </div>
                    <div className="col-md-6">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td >Ten Phim</td>
                                    <td>{movie.tenPhim}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td > Mo Ta</td>
                                    <td>{movie.moTa}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Cum Rap</th>
                                    <th>Ten Rap</th>
                                    <th>Ngay Chieu</th>
                                    <th>Gio Chieu</th>
                                </tr>
                            </thead>
                            <tbody>
                            { loading && <i className='fa fa-refresh fa-sipn'></i>}
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }


}

const mapDispatchToProps = dispatch => {
    return {
        detailMovie: (id) => {
            dispatch(action.actDetailMovieAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);

