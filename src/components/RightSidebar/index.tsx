import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Avatar, Badge, styled, List, Drawer, useMediaQuery, useTheme } from '@mui/material';
import SubPanel from '../SubPanel';
import AvatarImage from '../../assets/person_f.png';
import './RightSidebar.scss';
import { subNavItems } from './CustomComponents';

interface NavItem {
  id: number;
  title: string;
  labelIcon?: string;
  mainNavItem?: string;
  subItems?: NavItem[];
}

const NavIcon: React.FC = () => {
  return <span className="icon"></span>;
};

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100%',
  zIndex: 1300, 
  transition: '0.5s all',
}));

const NavItems = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'center',
  width: '100%',
  paddingTop: 6,
  transition: '0.5s all',
}));

const RightSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentNavItem, setCurrentNavItem] = useState<NavItem | null>(null);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavItemClick = (title: string) => {
    if (title === 'Home') {
      navigate('/');
      setIsExpanded(false);
      setCurrentNavItem(null);
    } else if (subNavItems[title].length > 0) {
      setCurrentNavItem({ id: Date.now(), title });
      setIsExpanded(true);
    } else {
      setCurrentNavItem(null);
      setIsExpanded(false);
    }
  };

  const handleClose = () => {
    setCurrentNavItem(null);
    setIsExpanded(false);
  };

  return (
    <SidebarContainer role="presentation" className="sidebarContainer" ref={containerRef}>
      <aside className="sidebar" style={{ zIndex: 1301 }}>
        <Box className="profileAvatar">
          <Avatar className="customAvatar" alt="Profile Photo" src={AvatarImage} />
        </Box>
        <NavItems className="navItems">
          <NavLink to="/" className="navItem home-ico" onClick={() => handleNavItemClick('Home')}>
            <NavIcon />
          </NavLink>
          {Object.keys(subNavItems).map((key) => (
            <NavLink
              key={key}
              to={`/${key.toLowerCase()}`}
              className={`navItem ${key.toLowerCase()}`}
              onClick={() => handleNavItemClick(key)}
            >
              <NavIcon />
              {key === 'Notifications' && (
                <Badge
                  variant="dot"
                  sx={{
                    top: '-6px',
                    left: '-5px',
                    '& .MuiBadge-dot': {
                      backgroundColor: '#00E132',
                    },
                  }}
                />
              )}
              {subNavItems[key].length > 0 && !isExpanded && (
                <Box className="toggleExpand" onClick={() => setIsExpanded(true)}>
                  <span className="expand-ico"></span>
                </Box>
              )}
            </NavLink>
          ))}
          <hr className="divider" />
          <Box className="configNavItems">
            <NavLink to="/settings" className="navItem settings">
              <NavIcon />
            </NavLink>
            <NavLink to="/logout" className="navItem logout">
              <NavIcon />
            </NavLink>
          </Box>
        </NavItems>
      </aside>
      <Drawer
        variant="temporary"
        open={isExpanded}
        anchor="right"
        onClose={isMobile ? handleClose : undefined}
        ModalProps={{
          container: containerRef.current,
          style: { position: 'absolute', pointerEvents: isMobile ? 'auto' : 'none' },
          ...(isMobile ? {} : { hideBackdrop: true }),
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            top: '0', 
            right: '65px', 
            height: '100%', 
            zIndex: 1300, 
            pointerEvents: 'auto', 
            background: 'transparent',
            boxShadow: 'none'
           }
        }}
      >
        <SubPanel navItem={currentNavItem} subNavItems={subNavItems} onClose={handleClose} />
      </Drawer>
    </SidebarContainer>
  );
};

export default RightSidebar;
