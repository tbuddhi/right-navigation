import React, { useState, useEffect } from 'react';
import './SubPanel.scss';
import { NavLink } from 'react-router-dom';
import { Stack, Box, Link, CardHeader, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AvatarImage from '../../assets/person_f.png'


interface NavItem {
  id: number;
  title: string;
  labelIcon?: string;
  mainNavItem?: string;
  subItems?: NavItem[];
}

interface SubPanelProps {
  navItem: NavItem | null;
  subNavItems: Record<string, NavItem[]>;
  onClose: () => void;
}

const Item = styled(Box)(() => ({
  textAlign: 'center',
  color: '#181818',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: 2,
  display: 'flex',
  alignItems: 'center'
}));

const SubPanel: React.FC<SubPanelProps> = ({ navItem, subNavItems }) => {
  const [currentNav, setCurrentNav] = useState<NavItem | null>(null);

  useEffect(() => {
    setCurrentNav(navItem);
  }, [navItem]);

  const handleNavClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setCurrentNav(item);
    }
  };

  const handleBackClick = () => {
    setCurrentNav(navItem);
  };

  return (
    <div className="subPanel">
      {currentNav && currentNav !== navItem ? (
        <div className='subLevel-2'>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Item>Label here</Item>
            <Item><Link href="#" variant="body2" color={'#256AFF'}>Label here</Link></Item>
          </Stack>

          {navItem && (
            <div className='stepBackWrapper'>
              <button onClick={handleBackClick}>
                Back
              </button>
            </div>
          )}
          <section>
            <Box>
              <Typography variant='subtitle1'>
                Active
              </Typography>
              <CardHeader
                sx={{ alignItems: 'flex-start' }}
                avatar={
                  <Avatar alt="Profile Photo" src={AvatarImage} />
                }
                title="Lable here"
                subheader={<Stack direction={'column'}>
                  <Typography>Lable here</Typography>
                  <Link href='#'>Label here</Link>
                </Stack>}
              />
              <Typography variant='subtitle1'>
                Label here
              </Typography>
              <Typography variant="body2" gutterBottom>
                No custom Label here
              </Typography>
            </Box>

          </section>
          <section>
            <Box>
              <Typography variant='subtitle1'>
                Suggested Label here
              </Typography>
              <CardHeader
                avatar={
                  <Avatar alt="Profile Photo" src={AvatarImage} />
                }
                title="Label here"
              />
            </Box>
          </section>
          <hr className='divider' />
          <Box>
            <Link href="#" variant="body2" color={'#256AFF'}>Label here</Link>
          </Box>

          {navItem?.title !== 'Chats' && <ul>
            {currentNav.subItems?.map((subItem) => (
              <li key={subItem.id} onClick={() => handleNavClick(subItem)}>
                {subItem.title}
              </li>
            ))}
          </ul>}
        </div>
      ) : (
        <>
          <div className="panelHeader">
            <h5>User Name</h5>
            <NavLink to='/login'>Switch to admin account</NavLink>
          </div>
          <ul className='subNav-item'>
            {navItem && subNavItems[navItem.title]?.map((item) => (
              <li key={item.id} onClick={() => handleNavClick(item)}>
                <div className='labelWrapper'>
                  <span className={`subNav-icon ${item.labelIcon}`}></span>
                  {item.title}
                </div>
                <span className='arrow-icon'></span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SubPanel;
