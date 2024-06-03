import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Box, Link, CardHeader, Avatar, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import AvatarImage from '../../assets/person_f.png';
import './SubPanel.scss'

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

const SubPanelContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBFBFB',
  padding: '1rem 1.4rem',
  width: '280px',
  height: '100%',
  boxShadow: 'inset 0 0 33px rgb(0 0 0 / 7%)',
  transition: '0.5s all',
  fontFamily: '"Roboto", sans-serif',
}));

const PanelHeader = styled(Box)(({ theme }) => ({
  paddingTop: '1rem',
  paddingBottom: '1.5rem',
  borderBottom: '1px dashed #B3B9C4',
}));

const PanelTitle = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontSize: '20px',
  fontWeight: 700,
  color: '#181818',
  lineHeight: 1
}));

const SubLevel2 = styled(Box)(({ theme }) => ({
  paddingTop: '1.2rem',
}));

const StepBackButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  color: '#256AFF',
  textDecoration: 'underline',
  fontWeight: '400'
}));

const SubNavList = styled(List)(({ theme }) => ({
  listStyleType: 'none',
  padding: 0,
  marginTop: '1rem',
  marginBottom: '1rem'
}));

const SubNavItem = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  }
}));

const CustomNavLink = styled(NavLink)(({ theme }) => ({
  color: '#256AFF',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: 2.7,
}));

const SubNavIcon = styled(Box)(({ theme }) => ({
  width: '24px',
  marginRight: '0.75rem',
  '&.icon-1': {
    content: 'url("/assets/svg/agent_icon.svg")',
  },
  '&.icon-2': {
    content: 'url("/assets/svg/people_icon.svg")',
  },
  '&.icon-3': {
    content: 'url("/assets/svg/dataset_icon.svg")',
  },
}));

const ArrowIcon = styled(Box)(({ theme }) => ({
  content: 'url("/assets/svg/right_arrow.svg")',
}));

const ArrowBackwardIcon = styled(Box)(({ theme }) => ({
  content: 'url("/assets/svg/arrow_backward.svg")',
}));

const SubPanel: React.FC<SubPanelProps> = ({ navItem, subNavItems, onClose }) => {
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
    <SubPanelContainer>
      {currentNav && currentNav !== navItem ? (
        <SubLevel2>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box textAlign="center" color="#181818" fontSize="20px" fontWeight={700} lineHeight={2}>Label here</Box>
            <Box textAlign="center" color="#181818" fontSize="20px" fontWeight={700} lineHeight={2}>
              <Link href="#" variant="body2" color="primary">Label here</Link>
            </Box>
          </Stack>

          {navItem && (
            <Box mb={2}>
              <StepBackButton startIcon={<ArrowBackwardIcon />} onClick={handleBackClick}>Back</StepBackButton>
            </Box>
          )}
          <section>
            <Box mb={3}>
              <Typography className='customTypo2'>Active</Typography>
              <CardHeader
                sx={{ alignItems: 'flex-start'}}
                avatar={<Avatar alt="Profile Photo" src={AvatarImage} />}
                title="Label here"
                subheader={
                  <Stack direction="column">
                    <Typography>Label here</Typography>
                    <Link href="#">Label here</Link>
                  </Stack>
                }
              />
              <Typography className='customTypo2'>Label here</Typography>
              <Typography className='customTypo3'>No custom Label here</Typography>
            </Box>
          </section>
          <section>
            <Box mb={2}>
              <Typography className='customTypo2'>Suggested Label here</Typography>
              <CardHeader
                avatar={<Avatar alt="Profile Photo" src={AvatarImage} />}
                title="Label here"
              />
            </Box>
          </section>
          <Divider />
          <Box mt={2}>
            <Link href="#" variant="body2" color="primary">Label here</Link>
          </Box>

          {navItem?.title !== 'Chats' && (
            <SubNavList>
              {currentNav.subItems?.map((subItem) => (
                <SubNavItem key={subItem.id} onClick={() => handleNavClick(subItem)}>
                  <Box display="flex" alignItems="center">
                    <SubNavIcon className={`subNav-icon ${subItem.labelIcon}`}></SubNavIcon>
                    <Typography>{subItem.title}</Typography>
                  </Box>
                  <ArrowIcon className="arrow-icon"></ArrowIcon>
                </SubNavItem>
              ))}
            </SubNavList>
          )}
        </SubLevel2>
      ) : (
        <>
          <PanelHeader>
            <PanelTitle>User Name</PanelTitle>
            <CustomNavLink to='/login'>Switch to admin account</CustomNavLink>
          </PanelHeader>
          <SubNavList>
            {navItem && subNavItems[navItem.title]?.map((item) => (
              <SubNavItem key={item.id} onClick={() => handleNavClick(item)}>
                <Box display="flex" alignItems="center">
                  <SubNavIcon className={`subNav-icon ${item.labelIcon}`}></SubNavIcon>
                  <Typography className='customTypo1'>{item.title}</Typography>
                </Box>
                <ArrowIcon className="arrow-icon"></ArrowIcon>
              </SubNavItem>
            ))}
          </SubNavList>
        </>
      )}
    </SubPanelContainer>
  );
};

export default SubPanel;
