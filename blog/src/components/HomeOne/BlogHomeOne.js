import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import blogOne from '../../assets/images/blog-1.jpg';
// import blogOne from '../../assets/images/blog1.png';
// import blogOne from '../../assets/images/blogOne.png';
// import blogTwo from '../../assets/images/blog-2.jpg';
// import blogTwo from '../../assets/images/blogTwo.png';
// import blogThree from '../../assets/images/blog-3.jpg';
// import blogThree from '../../assets/images/blog3.svg';

function BlogHomeOne({ className }) {

    const [data, setData] = useState([]);
    const {id} = useParams();
    // let t = new Date();
    // let Times = t.toLocaleDateString();

    useEffect(() => {
        
        fetch('http://localhost:8081/blog')
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.warn(data))
        .catch(err => console.log(err));


    }, [])

    console.warn(data);
    return (
        <>
            <section className={`appie-blog-area pt-90 pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Latest blog posts</h3>
                                <p>Different layouts and styles for team sections.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {

                            data.map((d, i) => (

                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="appie-blog-item mt-30 wow animated fadeInUp"
                                        data-wow-duration="3000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="thumb">
                                            <img src={`http://localhost:8081/images/` + d.blog_image_1} alt="" width={370} height={350}/>
                                        </div>
                                        <div className="content">
                                            <div className="blog-meta">
                                                <ul>
                                                    {/* <li>March 10, 2022</li> */}
                                                    <li>{d.blog_created_at.substr(0,10)}</li>
                                                    <li>
                                                        {/* <a href="#" className='text-uppercase'>{d.blog_heading}</a> */}
                                                        <Link className='text-uppercase' to={`/blog/single-blog/${d.id}`}>{d.blog_heading}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                {/* <a href="/news/single-news">
                                                    Introducing New Apps Design for our iOS App
                                                    {d.blog_text_First.substr(0,35)}
                                                </a> */}
                                                <Link to={`/blog/single-blog/${d.id}`}>{d.blog_text_First.substr(0,35)}</Link>
                                            </h3>
                                            {/* <a href="#"> */}
                                                {/* Learn More  */}
                                                <Link to={`/blog/single-blog/${d.id}`} style={{fontWeight: 500}}>Learn More <i className="fal fa-arrow-right" /></Link> 
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>

                             ) )
                        
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeOne;
