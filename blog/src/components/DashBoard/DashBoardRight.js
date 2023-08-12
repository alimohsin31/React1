import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import churchE from "../../images/DashBoardImages/churchE.png";
import soulful from "../../images/DashBoardImages/soulful.png";
import peaceful from "../../images/DashBoardImages/peaceful.png";
import jesu from "../../images/DashBoardImages/jesu.png";
// import admin from '../../images/DashBoardImages/admin.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

function DashBoardRight() {

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
        <div className="mt-3 mb-4" style={{ borderLeft: "3px solid #4C7FB5" }}>
            <h5 className="text-uppercase text-white pl-2">recent blogs</h5>
        </div>
        <div className="" style={{ background: "#13181E", padding: "1rem 1rem", height: '30rem', overflowY: 'scroll' }}>

            {
                data.map( (d, i) => (
                <Row className="mb-3">
                    <Col md={4}>
                        <img src={`http://localhost:8081/images/` + d.blog_image_1} alt="churchE" className="w-100" fluid />
                    </Col>
                    <Col md={8} className="text-start" style={{ alignSelf: "center" }}>
                        <p className="text-uppercase mb-0 text-white fw-bold">
                        {d.blog_heading.substr(0,19)}
                        </p>
                        <small style={{ color: "#676D74" }}>{d.blog_text_First.substr(0,25)}</small>
                        <br />
                        <small style={{ color: "#676D74" }}>
                        <FontAwesomeIcon className="fe-5 pr-2" icon={faCalendarCheck} /> 
                        {/* 10th May, 2021 6:00pm */}
                        {d.blog_created_at.substr(0,10)}
                        </small>
                    </Col>
                </Row>
            ))
            }
            {/* <Row className="mb-3">
                <Col md={4}>
                    <img src={soulful} alt="soulful" className="w-100" fluid />
                </Col>
                <Col md={8} className="text-start" style={{ alignSelf: "center" }}>
                    <p className="text-uppercase mb-0 text-white fw-bold">
                    church events
                    </p>
                    <small style={{ color: "#676D74" }}>lorem ipsum lorem</small>
                    <br />
                    <small style={{ color: "#676D74" }}>
                    <FontAwesomeIcon className="fs-5" icon={faCalendarCheck} /> 10th
                    May, 2021 6:00pm
                    </small>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={4}>
                    <img src={peaceful} alt="peaceful" className="w-100" fluid />
                </Col>
                <Col md={8} className="text-start" style={{ alignSelf: "center" }}>
                    <p className="text-uppercase mb-0 text-white fw-bold">
                    church events
                    </p>
                    <small style={{ color: "#676D74" }}>lorem ipsum lorem</small>
                    <br />
                    <small style={{ color: "#676D74" }}>
                    <FontAwesomeIcon className="fs-5" icon={faCalendarCheck} /> 10th
                    May, 2021 6:00pm
                    </small>
                </Col>
            </Row>
            <Row className="">
                <Col md={4}>
                    <img src={jesu} alt="jesu" className="w-100" fluid />
                </Col>
                <Col md={8} className="text-start" style={{ alignSelf: "center" }}>
                    <p className="text-uppercase mb-0 text-white fw-bold">
                    church events
                    </p>
                    <small style={{ color: "#676D74" }}>lorem ipsum lorem</small>
                    <br />
                    <small style={{ color: "#676D74" }}>
                    <FontAwesomeIcon className="fs-5" icon={faCalendarCheck} /> 10th
                    May, 2021 6:00pm
                    </small>
                </Col>
            </Row> */}
        </div>

        <div className="my-4" style={{ borderLeft: "3px solid #4C7FB5" }}>
            <h5 className="text-uppercase text-white pl-2">my admins</h5>
            {/* <p className='text-capitalize ps-3'>manage your events</p> */}
        </div>
        <div style={{ background: "#13181E", padding: "1rem 1rem" }}>
            <Row className="mb-3">
                <Col md={4}>
                    <img src={soulful} alt="soulful" className="w-100" fluid />
                </Col>
                <Col md={8} className="text-start" style={{ alignSelf: "center" }}>
                    <p className="text-uppercase mb-0 text-white fw-bold">
                    jonathan smith
                    </p>
                    <small style={{ color: "#676D74" }} className="text-capitalize">
                    main admin
                    </small>
                </Col>
            </Row>
            <Row className="">
                <Col md={4}>
                    <img src={soulful} alt="soulful" className="w-100" fluid />
                </Col>
                <Col md={8} className="text-start" style={{ alignSelf: "center" }}>
                    <p className="text-uppercase mb-0 text-white fw-bold">
                    jessics roy
                    </p>
                    <small style={{ color: "#676D74" }} className="text-capitalize">
                    main admin
                    </small>
                </Col>
            </Row>
        </div>
    </>
  );
}

export default DashBoardRight;
