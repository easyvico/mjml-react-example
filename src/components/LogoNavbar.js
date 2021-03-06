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

export const LogoNavBar = (props) => ([
  <MjmlSection padding='10px 0px' backgroundColor={props.color}>
    <MjmlColumn width='40%' verticalAlign='middle'>
      <MjmlImage
        href='https://www.signals.fr?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]' 
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
          cssClass="nav-link font-tahoma"
          textTransform='lowcase'
          padding="0px 10px"
          href="https://www.signals.fr/signalisation-securite?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
          title='signalisation de sécurité'
          color={props.color5}>
        Signalisation de sécurité
        </MjmlNavbarLink>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="http://www.lienNav.fr?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
          title='Protection du site'
          color={props.color5}>
        Protection du site
        </MjmlNavbarLink>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="https://www.signals.fr?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
          title='Tous les produits'
          color={props.color5}>
        Tous les produits
        </MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn>
  </MjmlSection>

]);