import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animate.scss';
import './Home.scss';
import Logo from "../assets/img/logo/logo.png";
import Your5Fire from "../assets/img/logo/logo-your5fire.png";
type Props = {}

const Home = (props: Props) => {
    return (
        <section id="home">
            <img src={Logo} alt="" className="logo-cmc" />
            <img src={Your5Fire} alt="" className="logo-your5fire" />
            <div className="row" style={{ height: '100%' }}>
                <div className="home-content col-md-6 col-12 d-flex flex-column align-items-center justify-content-end" style={{ height: '100%' }}>
                    <a href="#event" className="btn btn-khampha mt-4 wow fadeInUp" data-wow-delay=".5s" />
                    <h1 className="mt-2 wow fadeInUp text-center d-none d-md-block fadeinup" style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>CHƯƠNG TRÌNH</h1>
                    <h1 className="mt-2 wow fadeInUp text-center d-none d-md-block fadeinup" style={{ color: '#FF6F09' }}>SIÊU HẤP DẪN</h1>
                    <h3 className="mt-2 wow fadeInUp text-center d-none d-md-block" data-wow-delay=".4s" style={{ color: 'white' }}>Thời gian: 05 - 07/08/2022</h3>
                    <h3 className="mt-2 wow fadeInUp text-center d-none d-md-block" data-wow-delay=".4s" style={{ color: 'white' }}>Địa điểm: Hạ Long, Quảng Ninh</h3>
                </div>
            </div>
        </section>
    )
}

export default Home