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
  <MjmlSection padding='10px 0px 10px 10px' backgroundColor={props.color}>
    <MjmlColumn width='40%' verticalAlign='middle'>
      <MjmlImage
        href='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV18Z8sAMKbxtsGOFu1jSw_l_lLIuUrdviHd6nqDRHfRLm&c=7EKibOF-ZZHjknNbHOXuxA' 
        src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif'
        alt='logo'
        width={220} />
    </MjmlColumn>
    <MjmlColumn 
      width='60%'
      verticalAlign='middle'
      paddingTop={15}>
      <MjmlNavbar
        base-url="https://mjmlml.io"
        hamburger="none"
        ico-color="orange"
        icoPadding='5px'>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1_sfb8iQDNBMjlgEfLJ8n8K0WXcmkGwsaBoh2lR9jxsL&c=7EKibOF-ZZHjknNbHOXuxA"
          color={props.color5}>
        Signalisation de sécurité
        </MjmlNavbarLink>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1weZp4poInSbOKXmIQJEDVf3s4BCR12RaYyIi3i7DKhp&c=7EKibOF-ZZHjknNbHOXuxA"
          color={props.color5}>
        Protection du site
        </MjmlNavbarLink>
        <MjmlNavbarLink
          fontSize={14}
          cssClass="nav-link"
          textTransform='lowcase'
          padding="0px 10px"
          href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1xQvTiNSF60hcjyKwXehR9A591qoJjzFxm0cC3G3D9q7&c=7EKibOF-ZZHjknNbHOXuxA"
          color={props.color5}>
        Tous les produits
        </MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn>
  </MjmlSection>

]);