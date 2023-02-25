import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animate.scss';
import './Tour.scss';
import VHL from "../assets/img/img-vinh-ha-long.png";
import Cap from "../assets/img/tour-cap.png";
import CV from "../assets/img/tour-cong-vien.png";
import CVNuoc from "../assets/img/tour-cong-vien-nuoc.png";

type Props = {}

const Tour = (props: Props) => {
    return (
        <section id="tour">
            <div className="container">
                <div className="row">
                    <h1>Mini Tour Cực Hấp Dẫn</h1>
                    <h1 className="mt-2">TRẢI NGHIỆM MỘT HẠ LONG KHÁC LẠ</h1>
                </div>
                <div className="row mt-58 wow fadeInUp" data-wow-delay=".5s">
                    <div className="col-lg-3 mt-4">
                        <div className="tour-card">
                            <img src={VHL} className="img-tour" alt="" />
                            <h2 className="mt-2">Tour Vịnh Hạ Long</h2>
                            <h2 className="mt-2"></h2>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="tour-card">
                            <img src={Cap} className="img-tour" alt="" />
                            <h2 className="mt-2">Cáp treo nữ hoàng</h2>
                            <h2 className="mt-2" />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="tour-card">
                            <img src={CV} className="img-tour" alt="" />
                            <h2 className="mt-2">Công viên Rồng</h2>
                            <h2 className="mt-2">(Sun World)</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4">
                        <div className="tour-card">
                            <img src={CVNuoc} className="img-tour" alt="" />
                            <h2 className="mt-2">Công viên nước</h2>
                            <h2 className="mt-2">(Sun World)</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col d-flex justify-content-center">
                        <a href="https://drive.google.com/file/d/15f_9mtDVMseWt5kBhHQS5MsbJA-ApC6_/view?usp=sharing" target="_blank" className="btn tour-btn d-flex justify-content-center align-items-center">
                            Chi tiết MiniTour
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Tour