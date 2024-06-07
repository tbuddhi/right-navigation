import { NavLink } from 'react-router-dom';
import { Stack, Box, Typography, Button, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import './SubPanel.scss'

export const SubPanelContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#FBFBFB',
    padding: '1rem 1.4rem',
    boxShadow: 'inset 0 0 33px rgb(0 0 0 / 7%)',
    transition: '0.5s all',
    fontFamily: '"Roboto", sans-serif',
    position: 'relative'
}));

export const PanelHeader = styled(Box)(({ theme }) => ({
    paddingTop: '1rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px dashed #B3B9C4',
}));

export const PanelTitle = styled(Typography)(({ theme }) => ({
    margin: 0,
    fontSize: '20px',
    fontWeight: 700,
    color: '#181818',
    lineHeight: 1
}));

export const SubLevel2 = styled(Box)(({ theme }) => ({
    paddingTop: '1.2rem',
}));

export const StepBackButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: '#256AFF',
    textDecoration: 'underline',
    fontWeight: '400',
    textTransform: 'capitalize'
}));

export const SubNavList = styled(List)(({ theme }) => ({
    listStyleType: 'none',
    padding: 0,
    marginTop: '1rem',
    marginBottom: '1rem'
}));

export const SubNavItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    padding: '14px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
        backgroundColor: '#f7f7f7',
    }
}));

export const CustomNavLink = styled(NavLink)(({ theme }) => ({
    color: '#256AFF',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: 2.7,
}));

export const CustomSubHeader = styled(Stack)(({ theme }) => ({
    '& p': {
        color: '#50595F',
        fontWeight: 400,
        fontSize: '12px',
    },
    '& a': {
        color: '#256AFF',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: 2.5
    }
}));

export const SubNavIcon = styled(Box)(({ theme }) => ({
    width: '24px',
    marginRight: '0.75rem',
    content: 'url("/assets/svg/dataset_icon.svg")',
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

export const ArrowIcon = styled(Box)(({ theme }) => ({
    content: 'url("/assets/svg/right_arrow.svg")',
}));

export const ArrowBackwardIcon = styled(Box)(({ theme }) => ({
    content: 'url("/assets/svg/arrow_backward.svg")',
}));