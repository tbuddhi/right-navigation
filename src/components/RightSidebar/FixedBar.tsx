import React from 'react';
import { Box, Avatar, List } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { subNavItems } from './CustomComponents';
import NavLinkItem from './NavLinkItem';
import NavIcon from './NavIcon';
import AvatarImage from '../../assets/person_f.png';
import WiproLogo from '../../assets/svg/wipro_logo.svg'
import './RightSidebar.scss';
import styled from '@emotion/styled';

interface SidebarProps {
  isExpanded: boolean;
  handleNavItemClick: (title: string) => void;
  handleExpand: (value: boolean) => void;
  isMobile: boolean
}

const FixedBar: React.FC<SidebarProps> = ({ isExpanded, handleNavItemClick, handleExpand, isMobile }) => {

  const MobileHeader = styled(Box)(({ theme }) => ({
    display: isMobile ? 'flex' : 'none',
    background: '#A930FF',
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    left: '-1px',
    height: 40,
    width: 'calc(100% + 1px)',
    zIndex: 1400,
    backgroundImage: !isExpanded ? 'linear-gradient(to right, #095EFF, #A930FF)' : '',
    borderRadius: !isExpanded ? '8px 0 0 0' : '',
    '& img': {
      width: 50
    }
  }));

  return (
    <aside className="sidebar"
      style={{
        borderRadius: isMobile ? '8px 0 0 0' : '',
        paddingTop: isMobile ? '3rem' : ''
      }}
    >
      <MobileHeader>{!isExpanded ? <img src={WiproLogo} alt='Wipro Logo' /> : ''}</MobileHeader>
      <Box className="profileAvatar">
        <Avatar className="customAvatar" alt="Profile Photo" src={AvatarImage} />
      </Box>
      <List className="navItems">
        <NavLink to="/" className="navItem home-ico" onClick={() => handleNavItemClick('Home')}>
          <NavIcon />
        </NavLink>
        {Object.keys(subNavItems).map((navKey) => (
          <NavLinkItem
            key={navKey}
            navKey={navKey}
            isExpanded={isExpanded}
            handleExpand={handleExpand}
            handleNavItemClick={handleNavItemClick}
          />
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
      </List>
    </aside>
  )
};

export default FixedBar;
