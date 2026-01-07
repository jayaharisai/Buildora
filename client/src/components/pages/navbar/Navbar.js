import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeMenu, setActiveMenu] = useState(null);
  const [direction, setDirection] = useState('right');


  const menuItems = ['Dashboard', 'Projects'];


  useEffect(() => {
    if (location.pathname === '/main') {
      setActiveMenu('Dashboard');
    } else if (location.pathname === '/projects' || location.pathname === '/overview' || location.pathname === "/template_edit") {
      setActiveMenu('Projects');
    } else {
      setActiveMenu(null);
    }
  }, [location.pathname]);


  const handleMenuClick = (menu) => {
    const currentIndex = menuItems.indexOf(activeMenu);
    const newIndex = menuItems.indexOf(menu);
    
    if (newIndex > currentIndex) {
      setDirection('right');
    } else {
      setDirection('left');
    }
    
    setActiveMenu(menu);
    
    // Navigate to routes
    if (menu === 'Dashboard') {
      navigate('/main');
    } else if (menu === 'Projects') {
      navigate('/projects');
    }
  };


  const handleSettingsClick = () => {
    setActiveMenu(null);
    navigate('/settings');
  };

  const handleProfileClick = () => {
    setActiveMenu(null);
    navigate('/profile');
  };


  return (
    <div>
        <div className='dora_navbar'>
            <div className='dora_logo_'>
                <div>Buildora</div>
            </div>
            <div className='dora_menu_container'>
                <div className='dora_menu'>
                <ul>
                    <li 
                      className={activeMenu === 'Dashboard' ? `active ${direction}` : ''} 
                      onClick={() => handleMenuClick('Dashboard')}
                    >
                      Dashboard
                    </li>
                    <li 
                      className={activeMenu === 'Projects' ? `active ${direction}` : ''} 
                      onClick={() => handleMenuClick('Projects')}
                    >
                      Projects
                    </li>
                </ul>
                </div>
                <div 
                  className={`settings ${location.pathname === '/settings' ? 'active_settings' : ''}`} 
                  onClick={handleSettingsClick}
                >
                  <i className="bi bi-gear"></i> Settings
                </div>
                <div 
                  className={`profiles ${location.pathname === '/profile' ? 'active_profile' : ''}`} 
                  onClick={handleProfileClick}
                >
                  <i className="bi bi-person"></i> Profile
                </div>
            </div>
        </div>
    </div>
  )
}


export default Navbar
