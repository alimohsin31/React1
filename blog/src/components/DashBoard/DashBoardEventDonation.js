import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

function DashBoardEventDonation() {
  return (
    <>
      <Row className="my-4 px-2" style={{ height: "7rem" }}>
        <Col className="px-2" md={4}>
          <div className="border border-light h-100 Donations-bg-img">
            <Row className="w-100">
              <Col
                md={9}
                className="text-white"
                style={{ alignSelf: "center" }}
              >
                <p className="mb-0 pl-1">Total Donations</p>
                <h5 className="pl-1">$35,258</h5>
              </Col>
              <Col md={3} style={{ alignSelf: "center" }}>
                <div
                  className="text-center"
                  style={{
                    position: "relative",
                    height: "3rem",
                    width: "3rem",
                    borderRadius: "50%",
                    border: "1px solid #ffffff",
                    padding: "0.2rem",
                    verticalAlign: "middle",
                  }}
                >
                  <FontAwesomeIcon
                    className="fs-5 text-white"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                    icon={faSackDollar}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="px-2" md={4}>
          <div className="border border-light h-100 Donations-bg-img">
            <Row className="w-100">
              <Col
                md={9}
                className="text-white"
                style={{ alignSelf: "center" }}
              >
                <p className="mb-0 pl-1">Total Events</p>
                <h5 className="pl-1">1500</h5>
              </Col>
              <Col md={3} style={{ alignSelf: "center" }}>
                <div
                  className="text-center"
                  style={{
                    position: "relative",
                    height: "3rem",
                    width: "3rem",
                    borderRadius: "50%",
                    border: "1px solid #ffffff",
                    padding: "0.2rem",
                    verticalAlign: "middle",
                  }}
                >
                  <FontAwesomeIcon
                    className="fs-5 text-white"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                    icon={faSackDollar}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="px-2" md={4}>
          <div className="border border-light h-100 Donations-bg-img">
            <Row className="w-100">
              <Col
                md={9}
                className="text-white"
                style={{ alignSelf: "center" }}
              >
                <p className="mb-0 pl-1">Completed Events</p>
                <h5 className="pl-1">1200</h5>
              </Col>
              <Col md={3} style={{ alignSelf: "center" }}>
                <div
                  className="text-center"
                  style={{
                    position: "relative",
                    height: "3rem",
                    width: "3rem",
                    borderRadius: "50%",
                    border: "1px solid #ffffff",
                    padding: "0.2rem",
                    verticalAlign: "middle",
                  }}
                >
                  <FontAwesomeIcon
                    className="fs-5 text-white"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                    icon={faSackDollar}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DashBoardEventDonation;
