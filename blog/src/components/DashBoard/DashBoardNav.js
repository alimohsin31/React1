import DashBoardNavigation from './DashBoardNavigation';
import DashBoardSearch from './DashBoardSearch';
import DashBoardTable from './DashBoardTable';
import DashBoardRight from './DashBoardRight';
import DashBoardEventDonation from './DashBoardEventDonation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBell } from '@fortawesome/free-solid-svg-icons';

import { Avatar } from 'react-profile-avatar';
import 'react-profile-avatar/dist/index.css';
// import logo from '../../images/DashBoardImages/logo.png';
import logo2 from '../../assets/images/8-1.png';
// import logo2 from '../../assets/images/8-1.png';
import Notifications from '../../images/DashBoardImages/Notifications.png';
import Message from '../../images/DashBoardImages/Message.png';



function DashBoardNav() {
    return(
        <div style={{overflow: 'hidden'}}>
        
            <Row>
                <Col md={2} style={{backgroundColor: '#13181E'}}>
                    <DashBoardNavigation />
                </Col>
                <Col md={10} style={{background: '#000000'}}>
                    <Container>
                        <Row className='my-3'>
                            <Col md={3}>
                                <DashBoardSearch />
                            </Col>
                            <Col md={9} >
                                <div style={{float: 'right', display: 'flex', gap: '0.8rem'}}>
                                    <Button style={{position: 'relative', background: '#272F37', border: 'none'}}>
                                        <img src={Notifications} alt='Notifications' width={25} /> <Badge bg="danger" style={{position: 'absolute', top: '-0.5rem', right:'-0.5rem'}}>9</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button style={{position: 'relative', background: '#272F37', border: 'none'}}>
                                        <img src={Message} alt='Message' width={25} /> <Badge bg="danger" style={{position: 'absolute', top: '-0.5rem', right:'-0.5rem'}}>9</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    {/* <Avatar name={'John Doe'} colour={'#ffffff'} imageSrc={logo2} size={50}/> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={8}>
                                <div style={{borderLeft: '3px solid #4C7FB5'}}>
                                    <h5 className='text-uppercase text-white pl-2 mb-0'>hello david</h5>
                                    <p className='text-capitalize pl-2'>manage your events</p>
                                </div>

                                <DashBoardEventDonation />

                                
                                    <div style={{borderLeft: '3px solid #4C7FB5'}}>
                                        <h5 className='text-uppercase text-white pl-2 my-4'>recent donations</h5>
                                    </div>
                                
                                
                                <Col md={12} style={{background: '#13181E'}}>
                                    <DashBoardTable />
                                </Col>
                            </Col>

                            <Col md={4}>
                                <DashBoardRight />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        
        </div>
    )
}

export default DashBoardNav;