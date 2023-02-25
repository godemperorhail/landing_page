import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animate.scss';
import './Footer.scss';
import Your5 from "../assets/img/your5.png";
import YoungFire from "../assets/img/img-tuoi-tre-nhiet-huyet.png";
import Logo from "../assets/img/footer/cmcglobal_logo.png";
import FbIcon from "../assets/img/footer/facebook_icon.png";

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 d-flex flex-column align-items-center flex-lg-row justify-content-lg-start justify-content-center">
                        <img src={Your5} className="your5-footer" alt="" />
                        <img src={YoungFire} className="tuoi-tre-footer" alt="" />
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
                        <div className=" d-flex flex-column justify-content-center align-items-center">
                            <h3 className="text-white" style={{ fontFamily: '"Montserrat"' }}>Đơn vị tổ chức</h3>
                            <img className="mt-2" src={Logo} alt="" style={{ width: 114 }} />
                            <div className="mt-2 d-flex justify-content-center">
                                <a href="https://www.facebook.com/cmcglobalsky" target="_blank">
                                    <img src={FbIcon} alt="" style={{ width: 35 }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer