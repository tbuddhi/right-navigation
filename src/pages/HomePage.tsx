import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material';
import gImage1 from '../assets/png/guidence_1.png'
import gImage2 from '../assets/png/guidence_2.png'
import gImage3 from '../assets/png/guidence_3.png'
import gImage4 from '../assets/png/guidence_4.png'
import gImage5 from '../assets/png/guidence_5.png'

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{ width: "70%"}}>
      <h3>Home</h3>
      {!isMobile && <div>
        <p>Deployed Link: <a target='_blank' href='https://right-nav-panel.netlify.app' rel="noreferrer">https://right-nav-panel.netlify.app</a></p>
        <p>Download the source code: <a target='_blank' href='https://github.com/tbuddhi/right-navigation.git' rel="noreferrer" >Download from GIT</a></p>

        <br/><br/>
        <img src={gImage1} alt='Guidance_1' style={{ width: "60%" }}/>
        <img src={gImage2} alt='Guidance_1' style={{ width: "60%" }}/>
        <img src={gImage3} alt='Guidance_1' style={{ width: "60%" }}/>
        <img src={gImage4} alt='Guidance_1' style={{ width: "60%" }}/>
        <img src={gImage5} alt='Guidance_1' style={{ width: "60%" }}/>
      </div>}
    </div>
  )
}

export default HomePage