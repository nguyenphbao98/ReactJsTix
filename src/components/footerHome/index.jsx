import React from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import logog from '../../assets/img/cgv.png'

const iconPath = '../../assets/img';

function FooterHome() {

    return (
        <>
            {/* info */}
            <section className="intro--wrap">
            <div className="intro">
                <div className="container">
                <div className="row">
                    <div className="col-12 intro__bg">
                    <div className="intro__content mx-auto">
                        <div className="row">
                        <div className="col-12 col-md-6 intro__left text-center text-md-left text-white">
                            <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                            <p className="textLeft">người yêu điện ảnh</p>
                            <br />
                            <p className="textSmallLeft">
                            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                            rạp và đổi quà hấp dẫn.
                            </p>
                            <br />
                            <button className="btn intro__btn text-white">
                            App miễn phí - Tải về ngay!
                            </button>
                            <br />
                            <p className="textAppUnder">
                            TIX có hai phiên bản
                            <a className="tagA text-white" target="_blank" rel="noreferrer" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">iOS</a>
                            &amp;&nbsp;<a className="tagA text-white" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a>
                            </p>
                        </div>
                        <div className="col-12 col-md-6 intro__right">
                            <div className="swiper">
                            <img src="../images/mobile.png" alt="phone" />
                            <div className="wrap">
                                {/* <div className="wrap--cus">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                    <div className="swiper-slide"><img src="../images/slide6.jpg" alt="img" /></div>
                                    <div className="swiper-slide"><img src="../images/slide3.jpg" alt="img" /></div>
                                    <div className="swiper-slide"><img src="../images/slide4.jpg" alt="img" /></div>
                                    <div className="swiper-slide"><img src="../images/slide5.jpg" alt="img" /></div>
                                    </div>
                                </div>
                                </div> */}
                                {/* <div className="wrap--cus">
                                    {<Swiper className="swiper-wrapper"
                                        spaceBetween={50}
                                        slidesPerView={3}
                                        Autoplay={5000}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        >
                                        <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
                                        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
                                        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
                                        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
                                    </Swiper>}
                                </div> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- footer --> */}
            <footer className="footer">
            <div className="footer__content pb-5 pt-3">
                <div className="container">
                <div className="row footer__content__first">
                    {/* cate */}
                    <div className="col-12 col-md-5 d-none d-md-block footer__cate">
                    <p className="text-white">TIX</p>
                    <div className="row">
                        <div className="col-md-6 first__cate">
                        <a href="#">FAQ</a>
                        <a href="#">Brand Guidelines</a>
                        </div>
                        <div className="col-md-6 second__cate">
                        <a href="#">Thỏa thuận sử dụng</a>
                        <a href="#">Chính sách bảo mật</a>
                        </div>
                    </div>
                    </div>
                    {/* logo */}
                    <div className="col-12 col-md-4 d-none d-md-block footer__logo">
                    <p className="text-white">ĐỐI TÁC</p>
                    <div className="col-12 mb-3 footer__logo__content">
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src={`${logog}/cgv.png`} />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                    </div>
                    <div className="col-12 mb-3 footer__logo__content">
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                    </div>
                    <div className="col-12 mb-3 footer__logo__content">
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="img-fluid iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                    </div>
                    <div className="col-12 mb-3 footer__logo__content">
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="img-fluid iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/" title="CGV">
                        <img className="iconConnect" src="../images/cgv.png" />
                        </a>
                    </div>
                    </div>
                    {/* social */}
                    <div className="col-12 col-md-3 footer__social">
                    <div className="row">
                        <div className="col-md-6 d-none d-md-block text-center footer__social__app">
                        <p className="text-white">MOBILE APP</p>
                        <a target="_blank" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" title="Apple App">
                            <img className="iconApp" src="../images/apple-logo.png" />
                        </a>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" title="Android App">
                            <img className="iconApp" src="../images/android-logo.png" />
                        </a>
                        </div>
                        <div className="col-12 col-md-6 text-center footer__social__content">
                        <p className="text-white d-none d-md-block">SOCIAL</p>
                        <div className="row d-flex justify-content-center mb-2 d-block d-md-none">
                            <a className="text-white mx-3" href="/thoa-thuan-su-dung">Thỏa thuận sử dụng</a>
                            <a className="text-white mx-3" href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
                        </div>
                        <a target="_blank" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" title="Apple App">
                            <img className="iconApp" src="../images/facebook-logo.png" />
                        </a>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" title="Android App">
                            <img className="iconApp" src="../images/zalo-logo.png" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <hr className="hrFooter" />
                <div className="row footer__content__second">
                    <div className="col-12 col-md-1 px-0 py-0 my-2 footer__sponser">
                    <img src="../images/zion-logo.jpg" className="img-fluid" alt="logo" />
                    </div>
                    <div className="col-12 col-md-9 footer__second__content">
                    <span className="text-white">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                    <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                        Chí Minh, Việt Nam.</span>
                    <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />đăng
                        ký thay đổi lần&nbsp;thứ&nbsp;30,
                        ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                        Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
                        Minh cấp.
                    </span>
                    <span className="last__span">Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email:
                        <a className="span__mail" href="mailto:me.vn">support@tix.vn</a></span>
                    </div>
                    <div className="col-12 col-md-2 px-0 py-0 mt-2 footer__sponser">
                    <a href="http://online.gov.vn/Home/WebDetails/62782" target="_blank">
                        <img src="../images/d1e6bd560daa9e20131ea8a0f62e87f8.png" className="img-fluid" alt="logo" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </>
    )
}

export default FooterHome;