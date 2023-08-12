import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false }) {
    return (
        <>
            {lang ? (
                <ul>
                    <li>
                        <a href="#">
                            أنا <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">الصفحة الرئيسية 1</Link>
                            </li>
                            <li>
                                <Link to="/home-two">الصفحة الرئيسية 2</Link>
                            </li>
                            <li>
                                <Link to="/home-three">المنزل 3</Link>
                            </li>
                            <li>
                                <Link to="/home-four">المنزل 4</Link>
                            </li>
                            <li>
                                <Link to="/home-five">المنزل 5</Link>
                            </li>
                            <li>
                                <Link to="/home-six">الصفحة الرئيسية 6</Link>
                            </li>
                            <li>
                                <Link to="/home-seven">المنزل 7</Link>
                            </li>
                            <li>
                                <Link to="/home-eight">الصفحة الرئيسية 8</Link>
                            </li>
                            <li>
                                <Link to="/home-dark">الصفحة الرئيسية الظلام</Link>
                            </li>
                            <li>
                                <Link to="/home-rtl">الصفحة الرئيسية Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/service">خدمة</Link>
                    </li>
                    <li>
                        <a href="#">
                            الصفحات <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/about-us">عن</Link>
                            </li>
                            <li>
                                <Link to="/error">خطأ</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            أخبار <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/news">صفحة الأخبار </Link>
                            </li>
                            <li>
                                <Link to="/news/single-news">أخبار واحدة</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">اتصل</Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/service">Service</Link> */}
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <a href="#">
                            Services 
                            <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">
                                    SEO Services 
                                    <i className="fal fa-angle-right" />
                                </a>
                                <ul className='sub-menu'>
                                    <li>
                                        <Link to="/seo-services/australia">Australia</Link>
                                    </li>
                                    <li>
                                        <Link to="/seo-services/canada">Canada</Link>
                                    </li>
                                    <li>
                                        <Link to="/seo-services/usa">USA</Link>
                                    </li>
                                    <li>
                                        <Link to="/seo-services/dubai">Dubai</Link>
                                    </li>        
                                </ul>
                            </li>
                            <li>
                                <Link to="/services/web-development">Web Development</Link>
                            </li>
                            <li>
                                <Link to="/services/guest-post-outreach">Guest Post Outreach</Link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <Link to="/blog">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
