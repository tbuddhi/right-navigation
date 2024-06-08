import React, { useState, useEffect } from 'react';
import { Stack, Box, Link, CardHeader, Avatar, Typography, Divider, styled } from '@mui/material';
import {
  SubPanelContainer,
  PanelHeader,
  PanelTitle,
  SubLevel2,
  SubNavList,
  SubNavItem,
  CustomNavLink,
  CustomSubHeader,
  StepBackButton,
  SubNavIcon,
  ArrowIcon,
  ArrowBackwardIcon,
} from './CustomComponents';
import ContactIcon from '../../assets/svg/headphone_icon.svg'
import AiLogoWithBorder from '../../assets/svg/ai_logo_with_bg.svg'
import WiproLogo from '../../assets/svg/wipro_logo.svg'
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
  isMobile: boolean
}

const SubPanel: React.FC<SubPanelProps> = ({ navItem, subNavItems, onClose, isMobile }) => {
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

  const MobileHeader = styled(Box)(({ theme }) => ({
    position: 'absolute',
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    top: 0,
    left: 0,
    height: 40,
    width: 'calc(100% - 17px)',
    zIndex: 1400,
    gap: '.5rem',
    paddingLeft: '1.1rem',
    backgroundImage: isMobile ? 'linear-gradient(to right, #095EFF, #A930FF)' : '',
    '& img': {
      width: 50,
    }
  }));

  return (
    <Stack direction={'row'} sx={{ height: '100%' }}>
      <Box className="toggleButton toggleCollapse" onClick={onClose} sx={{ top: isMobile ? '0' : '2rem' }}>
        <span className="collapse-ico"></span>
      </Box>
      {/* SubPanel Container */}
      <SubPanelContainer sx={{ paddingTop: isMobile ? '3rem' :  '1rem', width: isMobile ? '250px' : '287px' }}>
        <MobileHeader>
          <img src={WiproLogo} alt='Wipro Logo'/>
          <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#FFF'}}>GenAI Platform</Typography>
        </MobileHeader>
        {currentNav && currentNav !== navItem ? (
          // SubPanel Level 2: After click level 1 
          <SubLevel2>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box color="#181818" fontSize="20px" fontWeight={700} lineHeight={2}>Label here</Box>
              <Box> <Link href="#" className='customLink2'>Label here</Link></Box>
            </Stack>

            {navItem && (
              <Box mb={2}>
                <StepBackButton startIcon={<ArrowBackwardIcon />} onClick={handleBackClick}>Back</StepBackButton>
              </Box>
            )}
            {navItem?.title === 'Chats' ?
            // SubPanel Level 2: For 'Chats' 
            <>
            <section>
              <Box mb={1}>
                <Typography className='customTypo2'>Active</Typography>
                <CardHeader
                  sx={{
                    alignItems: 'flex-start',
                    paddingLeft: '0',
                    '& .MuiCardHeader-title': {
                      color: '#0B0C0C',
                      fontSize: '16px',
                      fontWeight: '700'
                    },
                  }}
                  avatar={<Avatar alt="Profile Photo" src={AiLogoWithBorder} />}
                  title="Label here"
                  subheader={
                    <CustomSubHeader direction="column">
                      <Typography>Label here</Typography>
                      <Link href="#">Label here</Link>
                    </CustomSubHeader>
                  }
                />
              </Box>
            </section>
            <section>
              <Box mb={3}>
                <Typography className='customTypo2'>Label here</Typography>
                <Typography className='customTypo3'>No custom Label here</Typography>
              </Box>
            </section>
            <section>
              <Box mb={3}>
                <Typography className='customTypo2'>Suggested Label here</Typography>
                <CardHeader
                  sx={{
                    paddingLeft: '0',
                    '& .MuiCardHeader-title': {
                      color: '#7E7E7E',
                      fontSize: '16px',
                      fontWeight: '400'
                    }
                  }}
                  avatar={<Avatar alt="Profile Photo" src={ContactIcon} />}
                  title="Label here"
                />
              </Box>
            </section>
            <Divider sx={{ borderStyle: 'dashed', borderColor: '#B3B9C4' }} />
            <Box mt={4}>
              <Link href="#" className='customLink1'>Label here</Link>
            </Box>
            </>
            :
              <SubNavList>
                {/* SubPanel Level 2: For other Nav links  */}
                {currentNav.subItems?.map((subItem) => (
                  <SubNavItem key={subItem.id} onClick={() => handleNavClick(subItem)}>
                    <Box display="flex" alignItems="center">
                      <SubNavIcon className={`subNav-icon ${subItem.labelIcon}`}></SubNavIcon>
                      <Typography>{subItem.title}</Typography>
                    </Box>
                  </SubNavItem>
                ))}
              </SubNavList>
            }
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
    </Stack>
  );
};

export default SubPanel;
