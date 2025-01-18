import React from 'react';

import InteriorDesign from './InteriorDesign';
import { Helmet } from 'react-helmet';
import NavbarV2 from '../global-components/navbar-v2';



const ServicePage = () => {
    return <div>
          <Helmet>
        <link rel="canonical" href='https://thearchitecturecorporation.com/about/' />
      </Helmet>
        <NavbarV2/>
       <InteriorDesign/>
    
      
    </div>
}

export default ServicePage

