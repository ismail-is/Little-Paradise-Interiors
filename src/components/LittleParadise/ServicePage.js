import React from 'react';

import { Helmet } from 'react-helmet';
import NavbarV2 from '../global-components/navbar-v2';
import ServiceSections from './ServiceSections';



const ServicePage = () => {
    return <div>
          <Helmet>
        <link rel="canonical" href='https://thearchitecturecorporation.com/Services/' />
      </Helmet>
        <NavbarV2/>
       {/* <InteriorDesign/> */}
       <ServiceSections/>
      
    </div>
}

export default ServicePage

