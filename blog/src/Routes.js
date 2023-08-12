import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AboutUsTwo from './components/AboutUs/AboutUsTwo';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeDark from './components/HomeDark';
// import HomeEight from './components/HomeEight';
// import HomeFive from './components/HomeFive';
// import HomeFour from './components/HomeFour';
// import HomeOne from './components/HomeOne';
// import HomeRtl from './components/HomeRtl';
// import HomeSeven from './components/HomeSeven';
// import HomeSix from './components/HomeSix';
// import HomeThree from './components/HomeThree';
// import Hometwo from './components/HomeTwo';
import News from './components/News';
import SingleNews from './components/News/SingleNews';
import Service from './components/Service';
import ServicesAustralia from './components/Service/ServicesAustralia';
import ServicesCanada from './components/Service/ServicesCanada';
import ServicesUSA from './components/Service/ServicesUSA';
import ServicesDubai from './components/Service/ServicesDubai';
import ServicesWebDevelopment from './components/Service/ServicesWebDevelopment';
import ServicesGuestPostOutreach from './components/Service/ServicesGuestPostOutreach';
// import Blogs from './components/Blogs/Index';
import Shops from './components/Shops';
import ShopDetails from './components/Shops/Details';
import DashBoard from './components/DashBoard/Index';
import DashBoardBlog from './components/DashBoardBlog/index';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={HomeDark} />
                            {/* <Route exact path="/home-two" component={Hometwo} /> */}
                            {/* <Route exact path="/home-three" component={HomeThree} /> */}
                            {/* <Route exact path="/home-four" component={HomeFour} /> */}
                            {/* <Route exact path="/home-five" component={HomeFive} /> */}
                            {/* <Route exact path="/home-six" component={HomeSix} /> */}
                            {/* <Route exact path="/home-seven" component={HomeSeven} /> */}
                            {/* <Route exact path="/home-eight" component={HomeEight} /> */}
                            {/* <Route exact path="/home-dark" component={HomeDark} /> */}
                            {/* <Route exact path="/home-rtl" component={HomeRtl} /> */}
                            <Route exact path="/blog" component={News} />
                            <Route exact path="/blog/single-blog/:id" component={SingleNews} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/seo-services/australia" component={ServicesAustralia} />
                            <Route exact path="/seo-services/canada" component={ServicesCanada} />
                            <Route exact path="/seo-services/usa" component={ServicesUSA} />
                            <Route exact path="/seo-services/dubai" component={ServicesDubai} />
                            <Route exact path="/services/web-development" component={ServicesWebDevelopment} />
                            <Route exact path="/services/guest-post-outreach" component={ServicesGuestPostOutreach} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route exact path="/contact-us" component={Contact} />
                            {/* <Route exact path="/blog" component={Blogs} /> */}
                            <Route exact path="/error" component={Error} />
                            <Route exact path="/about-us-another" component={AboutUsTwo} />
                            <Route exact path="/shops" component={Shops} />
                            <Route exact path="/shops/shop-details" component={ShopDetails} />
                            <Route exact path="/dashboard" component={DashBoard} />
                            <Route exact path="/dashboard-blog" component={DashBoardBlog} />
                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
