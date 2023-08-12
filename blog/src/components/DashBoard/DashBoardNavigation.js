// import logo from '../../images/DashBoardImages/logo.png';
import logo2 from '../../assets/images/8-1.png';
import Home from '../../images/DashBoardImages/Home.svg';
import Events from '../../images/DashBoardImages/Events.svg';
import MediaAnnouncements from '../../images/DashBoardImages/MediaAnnouncements.svg';
import PhotoVideoUploads from '../../images/DashBoardImages/Photo&VideoUploads.svg';
import Testimonials from '../../images/DashBoardImages/Testimonials.svg';
import Members from '../../images/DashBoardImages/Members.svg';
import {NavLink} from 'react-router-dom';

function DashBoardNavigation() {
    return(
        <div>
            <div className='db-logo my-4'>
                <img src={logo2} alt='logo' width={50} className='pl-2'/>
                <span className=' text-uppercase fs-6 text-white'>BigLeap Media</span>
            </div>

            <div className='db-menu'>
                <span className='pl-4 fs-6 text-uppercase text-mute text-start py-3' style={{color:'#676D74'}}>menu</span>
                <ul className='list-unstyled db-menu-list py-3'>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={Home} alt='Home' width={20}/> <NavLink className='text-decoration-none db-menu-link' to="/dashboard"><small>Home</small></NavLink>
                    </li>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={Events} alt='Events' width={20}/> <NavLink className='text-decoration-none db-menu-link' to="/dashboard-blog"><small>Blogs</small></NavLink>
                    </li>
                    {/* <li className='text-capitalize pl-4 py-3 db-menu-item active'>
                        <img src={Home} alt='Home' width={20}/> <Link className='text-decoration-none active db-menu-link' to="/dashboard"><small>Home</small></Link>
                    </li>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={Events} alt='Events' width={20}/> <Link className='text-decoration-none db-menu-link' to="/dashboard-blog"><small>Blogs</small></Link>
                    </li>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={MediaAnnouncements} alt='MediaAnnouncements' width={20}/> <Link className='text-decoration-none db-menu-link' to="/events"><small>media announcements</small></Link>
                    </li>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={PhotoVideoUploads} alt='PhotoVideoUploads' width={20}/> <Link className='text-decoration-none db-menu-link' to="/events"><small>photo & video uploads</small></Link>
                    </li>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={Testimonials} alt='Testimonials' width={20}/> <Link className='text-decoration-none db-menu-link' to="/events"><small>testimonials</small></Link>
                    </li>
                    <li className='text-capitalize pl-4 py-3 db-menu-item'>
                        <img src={Members} alt='Members' width={20}/> <Link className='text-decoration-none db-menu-link' to="/events"><small>members</small></Link>
                    </li> */}
                            
                </ul>
            </div>
        </div>
    )
}

export default DashBoardNavigation;