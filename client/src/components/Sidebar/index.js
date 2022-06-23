import { Link } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'
import './Sidebar.css';

const Sidebar = ({ open, hideSidebar }) => {
    return (
        <div className={open ? 'sidebar' : 'sidebar sidebar-hidden'}>
            <div className='btn-hide' onClick={hideSidebar}>
                <ChevronDoubleRightIcon />
            </div>
        </div>
    )
}

export default Sidebar