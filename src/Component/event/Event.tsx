import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animate.scss';
import './Event.scss';
import Line from "../assets/img/line.png";
import Title from "../assets/img/event-title.png";
import Event1 from "../assets/img/event1.png";
import Event2 from "../assets/img/event2.png";
import Event3 from "../assets/img/event3.png";



type Props = {}

const Event = (props: Props) => {
  return (
    <section id="event" className="position-relative">
  <img className="line" src={Line} alt="" />
  <div className="container">
    <div className="row">
      <div className="w-full d-flex justify-content-center mt-4">
        <img src={Title} className="event-img" alt="" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 d-flex flex-column align-items-center justify-content-between wow fadeInUp" data-wow-delay=".2s">
        <img src={Event1} style={{width: '286.84px', height: '233.23px'}} alt="" />
        <h2 className="text-white text-center" style={{fontSize: 18, fontWeight: 400}}>GIẢI&nbsp;&nbsp;CHẠY&nbsp;&nbsp;CUNG&nbsp;&nbsp;ĐƯỜNG</h2>
        <h2 className="text-white text-center" style={{fontSize: 18, fontWeight: 400}}>BIỂN&nbsp;&nbsp;ĐẸP&nbsp;&nbsp;NHẤT&nbsp;&nbsp;HẠ&nbsp;&nbsp;LONG</h2>
        <p className="text-white text-center" style={{fontFamily: '"Montserrat"', fontWeight: 700}}>Summer Race</p>
        <p className="text-white text-center" style={{fontFamily: '"Montserrat"', fontWeight: 700}}>Run to burn The Young</p>
        <a href="#race" className="btn btn-event mt-4">
          ĐĂNG KÝ NGAY
        </a>
      </div>
      <div className="col-lg-4 d-flex flex-column align-items-center justify-content-between wow fadeInUp" data-wow-delay=".2s">
        <img src={Event2} style={{width: '286.84px', height: '233.23px'}} alt="" />
        <h2 className="text-white text-center" style={{fontSize: 18, fontWeight: 400}}>ĐẠI&nbsp;&nbsp;NHẠC&nbsp;&nbsp;HỘI</h2>
        <h2 className="text-white text-center" style={{fontSize: 18, fontWeight: 400}}>ÂM&nbsp;&nbsp;THANH&nbsp;&nbsp;ÁNH&nbsp;&nbsp;SÁNG</h2>
        <p className="text-white text-center" style={{fontFamily: '"Montserrat"', fontWeight: 700}}>The Young Fire</p>
        <p className="text-white text-center" style={{fontFamily: '"Montserrat"', fontWeight: 700}}>Ca sĩ, DJ cực hot</p>
        <a href="#music" className="btn btn-event mt-4">
          CHI TIẾT SỰ KIỆN
        </a>
      </div>
      <div className="col-lg-4 d-flex flex-column align-items-center justify-content-between wow fadeInUp" data-wow-delay=".2s">
        <img src={Event3} style={{width: '286.84px', height: '233.23px'}} alt="" />
        <h2 className="text-white text-center" style={{fontSize: 18, fontWeight: 400}}>MINI&nbsp;&nbsp;TOUR</h2>
        <h2 className="text-white text-center" style={{fontSize: 18, fontWeight: 400}}>SIÊU&nbsp;&nbsp;HẤP&nbsp;&nbsp;DẪN</h2>
        <p className="text-white text-center" style={{fontFamily: '"Montserrat"', fontWeight: 700}}>Trải nghiệm một Hạ Long</p>
        <p className="text-white text-center" style={{fontFamily: '"Montserrat"', fontWeight: 700}}>khác lạ</p>
        <a href="#tour" className="btn btn-event mt-4">
          DANH SÁCH TOUR
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Event