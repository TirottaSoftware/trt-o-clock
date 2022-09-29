import { Link } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'
import './Sidebar.css';

const Sidebar = ({ open, hideSidebar }) => {
    return (
        <div className={open ? 'sidebar' : 'sidebar sidebar-hidden'}>
            <div className='sidebar-links'>
                <li>
                    <Link className='sidebar-link' to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='sidebar-link' to="/store">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link className='sidebar-link' to="/contact">
                        Contact
                    </Link>
                </li>
            </div>
            <div className='btn-hide' onClick={hideSidebar}>
                <ChevronDoubleRightIcon />
            </div>
        </div>
    )
}

export default Sidebar