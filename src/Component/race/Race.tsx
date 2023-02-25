import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animate.scss';
import './Race.scss';
import Cat from "../assets/img/cat.png";
import Vector from "../assets/img/vector.png";
import SummerRace from "../assets/img/summer-race.png";
import PersonRace from "../assets/img/persion-race.png";
import No from "../assets/img/no.png";
import QRHL from "../assets/img/QR-HL.png";
import Click from "../assets/img/click.png";
import QR from "../assets/img/QR.png";


type Props = {}

const Race = (props: Props) => {
    return (
        <section id="race" className="position-relative">
            <img src={Cat} alt="" className="position-absolute img-left" />
            <img src={Vector} alt="" className="position-absolute img-right" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={SummerRace} className="race-banner wow fadeInUp" data-wow-delay=".5s" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img className="position-absolute persion-race wow fadeInUp" data-wow-delay=".5s" src={PersonRace} alt="" />
                    </div>
                </div>
                <div className="row">
                    <h1 style={{ color: '#1297E0' }}>Giải thưởng siêu hấp dẫn:</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-between">
                        <div className="mt-4 d-flex  wow fadeInUp" data-wow-delay=".5s">
                            <div className="d-flex flex-column align-items-center" style={{ marginRight: 24 }}>
                                <img src={No} style={{ width: '108.57px', height: '24.48px' }} alt="" />
                                <div className="gift text-center mt-2">
                                </div>
                            </div>
                            <div className="gift-content ">
                                <h3>Giải chạy Marathon tại Hạ Long</h3>
                                <p style={{ fontFamily: '"Montserrat"' }}><strong>Cự li 3km</strong></p>
                                <p style={{ fontFamily: '"Montserrat"' }}><strong>Cự li 6km</strong></p>
                                <p style={{ fontFamily: '"Montserrat"', fontWeight: 800, fontSize: 24, color: '#F68920' }}><strong>Tổng giải thưởng lên đến 70 triệu</strong></p>
                            </div>
                        </div>
                        <a className="btn mt-4 btn-chi-tiet-the-le" href="https://drive.google.com/file/d/1-MfS-JJR5TVstytHZHUQKYvcSTY11ZX7/view?usp=sharing" target="_blank" style={{ backgroundColor: '#1297E0', color: '#FFFFFF', fontSize: 18 }}>Chi tiết thể lệ</a>
                        <div className="mt-4 d-flex flex-column justify-content-between">
                            <h1 style={{ color: '#1297E0' }}>Hướng dẫn đăng ký</h1>
                            <div className="mt-4" style={{ fontFamily: '"Montserrat"', fontSize: 21, fontStyle: 'normal', fontWeight: 700, lineHeight: 26 }}>
                                <p><strong>Bước 1:</strong> Click hoặc quét mã QRCode</p>
                                <p><strong>Bước 2:</strong> Điền thông tin đăng ký</p>
                            </div>
                            <div className="mt-4" style={{ fontFamily: '"Montserrat"', fontSize: 21, fontStyle: 'normal', fontWeight: 700, lineHeight: 26 }}>
                                <div className="mt-4 d-flex align-items-center">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfubPeveYfKrRy57R1nyIcb69bZ2bVWEPkeLLoUIm-b5_fhyg/viewform" target="_blank" className="position-relative d-flex justify-content-center align-items-center wow fadeInUp" data-wow-delay=".5s" style={{ padding: 20, background: '#FFFFFF', boxShadow: '0px 4px 18px rgba(163, 163, 163, 0.25)', borderRadius: 18 }}>
                                        <img src={QRHL} alt="" className="img-qr" />
                                        <img src={Click} alt="" className="click-img" />
                                    </a>
                                    <div className="ml-4">
                                        <h3 style={{ marginLeft: 35, color: '#1297E0', fontSize: 18, fontFamily: '"Dela Gothic One"' }}>Click hoặc Quét QRCode để đăng ký</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-between">
                        <div className="mt-4 d-flex  wow fadeInUp" data-wow-delay=".5s">
                            <div className="d-flex flex-column align-items-center" style={{ marginRight: 24 }}>
                                <img src={No} style={{ width: '108.57px', height: '24.48px' }} alt="" />
                                <div className="gift text-center mt-2">
                                </div>
                            </div>
                            <div className="gift-content ">
                                <h3>Giải chạy trực tuyến</h3>
                                <p style={{ fontFamily: '"Montserrat"' }}><strong>Chạy Cá nhân</strong></p>
                                <p style={{ fontFamily: '"Montserrat"' }}><strong>Chạy Tập thể</strong></p>
                                <p style={{ fontFamily: '"Montserrat"', fontWeight: 800, fontSize: 24, color: '#F68920' }}><strong>Tổng giải thưởng lên đến 30 triệu</strong></p>
                            </div>
                        </div>
                        <a className="btn mt-4 btn-chi-tiet-the-le" href="https://drive.google.com/file/d/10fNhMi02GaRNjOtVZZa4GIBjfNzRwyvT/view?usp=sharing" target="_blank" style={{ backgroundColor: '#1297E0', color: '#FFFFFF', fontSize: 18 }}>Chi tiết thể lệ</a>
                        <div className="mt-4 d-flex flex-column justify-content-between">
                            <h1 style={{ color: '#1297E0' }}>Hướng dẫn đăng ký</h1>
                            <div className="mt-4" style={{ fontFamily: '"Montserrat"', fontSize: 21, fontStyle: 'normal', fontWeight: 700, lineHeight: 26 }}>
                                <p><strong>Bước 1:</strong> Quét mã QRCode để tải App Vietrace365</p>
                                <p><strong>Bước 2:</strong> Tạo tài khoản và đăng nhập vào App</p>
                                <p><strong>Bước 3:</strong> Lựa chọn và đăng ký giải chạy Summer Race của CMC Global</p>
                                <div className="mt-4 d-flex align-items-center">
                                    <div className="d-flex justify-content-center align-items-center wow fadeInUp" data-wow-delay=".5s" style={{ padding: 20, background: '#FFFFFF', boxShadow: '0px 4px 18px rgba(163, 163, 163, 0.25)', borderRadius: 18 }}>
                                        <img src={QR} alt="" className="img-qr" />
                                    </div>
                                    <div className="ml-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Race