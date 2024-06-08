import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Badge } from '@mui/material';
import { subNavItems } from './CustomComponents';
import NavIcon from './NavIcon';

interface NavItemProps {
  navKey: string;
  isExpanded: boolean;
  handleNavItemClick: (title: string) => void;
  handleExpand: (value: boolean) => void;
}

const NavLinkItem: React.FC<NavItemProps> = ({ navKey, isExpanded, handleExpand, handleNavItemClick }) => {
  return (
    <NavLink
      to={`/${navKey?.toLowerCase()}`}
      className={`navItem ${navKey.toLowerCase()}`}
      onClick={() => handleNavItemClick(navKey)}
    >
      <NavIcon />
      {navKey === 'Notifications' && (
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
      {subNavItems[navKey]?.length > 0 && !isExpanded && (
        <Box className="toggleExpand" onClick={() => handleExpand(true)}>
          <span className="expand-ico"></span>
        </Box>
      )}
    </NavLink>
  );
};

export default NavLinkItem