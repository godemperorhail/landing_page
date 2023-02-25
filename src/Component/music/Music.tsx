import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animate.scss';
import './Music.scss';
import PersonMusic from "../assets/img/persion-music.png";
import KvMusic from "../assets/img/kv-music.png";
import MusicTitle from "../assets/img/music-title.png";
import MusicIcon from "../assets/img/not-nhac-icon.png";
import DjIcon from "../assets/img/dj-icon.png";
import MicIcon from "../assets/img/mic-icon.png";


type Props = {}

const Music = (props: Props) => {
    return (
        <section id="music">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column align-items-center wow fadeInUp" data-wow-delay=".5s">
                        <img src={PersonMusic} className="persion-music" alt="" />
                        <img src={KvMusic} alt="" className="kv-music" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center wow fadeInUp" data-wow-delay=".5s">
                        <h1>Đại nhạc hội</h1>
                        <h1>Âm thanh ánh sáng</h1>
                        <img src={MusicTitle} className="event-title" alt="" />
                        <div style={{ fontFamily: '"Montserrat"' }}>
                            <div className="mt-4 d-flex ">
                                <img src={MusicIcon} style={{ width: 46, height: 46, marginRight: 12 }} alt="" />
                                <div>
                                    <p className="text-white">Sân khấu siêu hoành tráng, hiệu ứng "đỉnh của chóp"</p>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <img src={DjIcon} style={{ width: 46, height: 46, marginRight: 12 }} alt="" />
                                <div>
                                    <p className="text-white">Ca sĩ khách mời nổi tiếng, Quán quân Học viện Ngôi Sao, một loạt Hit TOP Trending</p>
                                    <p className="text-white"> DJ cực chất, xuất hiện tại chương trình Rap Việt siêu hot. Hứa hẹn đốt cháy sân khấu với những giai điệu bùng nổ.</p>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <img src={MicIcon} style={{ width: 46, height: 46, marginRight: 12 }} alt="" />
                                <div>
                                    <p className="text-white">Các tiết mục văn nghệ “hút mắt” đến từ những thành viên tài năng nhất của CMC Global</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Music