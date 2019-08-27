import React, { Component } from 'react';

import {
  Mjml,
  MjmlSection,
  MjmlColumn,
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlImage,
  MjmlGroup
} from 'mjml-react';

export const LogoTheme = (props) => ([
  <MjmlSection padding='10px' backgroundColor={props.color}>
    <MjmlColumn verticalAlign='middle'>
      <MjmlImage
        href='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV18Z8sAMKbxtsGOFu1jSw_l_lLIuUrdviHd6nqDRHfRLm&c=7EKibOF-ZZHjknNbHOXuxA' 
        src={props.src}
        alt='logo solutions entrepôt'
        width={380} />
    </MjmlColumn>
  </MjmlSection>
]);