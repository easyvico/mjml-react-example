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

export const LogoNavBar2Liens = (props) => ([
  <MjmlSection padding='10px 0px' backgroundColor={props.color}>
    <MjmlColumn width='40%' verticalAlign='middle'>
      <MjmlImage
        href='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV18Z8sAMKbxtsGOFu1jSw_l_lLIuUrdviHd6nqDRHfRLm&c=7EKibOF-ZZHjknNbHOXuxA' 
        src='http://p7tre.emv3.com/IL/7/2/2/1101071722/2010985667.gif'
        alt='logo signals'
        width={220} />
    </MjmlColumn>
    <MjmlColumn 
      width='60%'
      verticalAlign='middle'
      paddingTop={15}>
      <MjmlNavbar
        hamburger="none"
        ico-color="orange"
        icoPadding='5px'>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="http://www.lienNav1.fr?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
          title=''
          color={props.color5}>
          {props.declinaison}
        </MjmlNavbarLink>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="http://www.lienNav2.fr?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
          title='Tous les produits'
          color={props.color5}>
        Tous les produits
        </MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn>
  </MjmlSection>

]);