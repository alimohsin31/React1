import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import SingleBlog from './SingleBlog';
import BlogSideBar from './BlogSideBar';
import HeaderNews from './HeaderNews';
import HeroNews from './HeroNews';

function SingleNews() {
    const [drawer, drawerAction] = useToggle(false);
    const {id} = useParams();
    // const [data, setData] = useState([]);

    // useEffect(() => {

    //     fetch('http://localhost:8081/get-blog')
    //     .then(res   => res.json())
    //     .then(data  => setData(data))
    //     .then(data  => console.warn(data))
    //     .catch(err  => console.log(err));

    // },[]);

    //     const allDatas = data.find((allDatas) => data.id === id);
    //     console.warn(allDatas);
    //     const {author_Name, author_Email} = allDatas; 

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            <HeroNews
                title="Blog"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/blog', title: 'Blogs' },
                    { link: `/blog/single-blog/${id}`, title: 'Blog' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <SingleBlog />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SingleNews;
