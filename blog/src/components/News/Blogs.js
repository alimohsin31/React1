import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import blogImg1 from '../../assets/images/blog/1.jpg';
// import blogImg2 from '../../assets/images/blog/2.jpg';
// import blogImg3 from '../../assets/images/blog/3.jpg';
// import blogImg4 from '../../assets/images/blog/4.jpg';
// import blogImg5 from '../../assets/images/blog/5.jpg';
// import blogImg6 from '../../assets/images/blog/6.jpg';
// import blogImg7 from '../../assets/images/blog/7.jpg';
// import blogImg8 from '../../assets/images/blog/8.jpg';

function Blogs() {


    const [data, setData] = useState([]);

    useEffect( () => {

        fetch('http://localhost:8081/get-blog')
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.warn(data))
        .catch(err => console.log(err))

    },[])

    return (
        <>

            
            <div className="row">
                {
                    data?.map( (d, i) => (
                <div className="col-lg-6">
                    <div className="post-item-1">
                        <img src={`http://localhost:8081/images/` + d.blog_image_1} alt="" style={{ height: '300px', width: '360px'}}/>
                        <div className="b-post-details">
                            <div className="bp-meta">
                                {/* <a href="#">
                                    <i className="fal fa-clock"></i>
                                    April 22, 2020
                                    {d.blog_created_at.substr(0,10)}
                                </a> */}
                                <Link to={`/blog/single-blog/${d.id}`}>
                                    <i className="fal fa-clock"></i>
                                    {/* April 22, 2020 */}
                                    {d.blog_created_at.substr(0,10)}
                                </Link>
                                {/* <a href="#">
                                <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                                <Link to={`/blog/single-blog/${d.id}`}>
                                    <i className="fal fa-comments"></i>6 Comments
                                </Link>
                            </div>
                            <h3>
                                {/* <a href="/news/single-news">
                                    Build A Full Web Chat App From Scratch.
                                    
                                </a> */}
                                <Link to={{pathname: `/blog/single-blog/${d.id}`, state: {state: { data: d }} }}>
                                    {d.blog_heading}
                                </Link>
                            </h3>
                            {/* <a className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a> */}
                            <Link className="read-more" to={`/blog/single-blog/${d.id}`}>
                                {d.blog_heading}
                            </Link>
                        </div>
                    </div>
                </div>
                
                    )
                )}
            </div>
            
            <div className="row">
                <div className="col-lg-12">
                    <div className="bisylms-pagination">
                        <span className="current">01</span>
                        <a href="#">02</a>
                        <a className="next" href="#">
                            next<i className="fal fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
