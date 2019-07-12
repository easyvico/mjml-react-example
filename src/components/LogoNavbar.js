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
  <MjmlSection padding='10px 0px 10px 10px' backgroundColor="#ffffff">
    <MjmlColumn width='40%' verticalAlign='middle'>
      <MjmlImage src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif' alt='logo' width={220} />
    </MjmlColumn>
    <MjmlColumn width='60%' verticalAlign='middle' paddingTop={15}>
      <MjmlNavbar base-url="https://mjmlml.io" hamburger="none" ico-color="orange" icoPadding='5px'>
        <MjmlNavbarLink cssClass="nav-link" textTransform='lowcase' padding="0px 10px" href="/gettings-started-onboard" color="#cccccc">Signalisation de sécurité</MjmlNavbarLink>
        <MjmlNavbarLink cssClass="nav-link" textTransform='lowcase' padding="0px 10px" href="/templates" color="#cccccc">Protection du site</MjmlNavbarLink>
        <MjmlNavbarLink cssClass="nav-link" textTransform='lowcase' padding="0px 10px" href="/components" color="#cccccc">Tous les produits</MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn>

    {/* <MjmlColumn cssClass='hidden-mobile' >
      <MjmlImage src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif' alt='logo' width={220} />
    </MjmlColumn>
    <MjmlColumn cssClass='hidden-mobile' >
      <MjmlNavbar base-url="https://mjmlml.io">
        <MjmlNavbarLink cssClass="nav-link" href="/gettings-started-onboard" color="#cccccc">Getting started</MjmlNavbarLink>
        <MjmlNavbarLink href="/try-it-live" color="#cccccc">Try it live</MjmlNavbarLink>
        <MjmlNavbarLink href="/templates" color="#cccccc">Templates</MjmlNavbarLink>
        <MjmlNavbarLink href="/components" color="#cccccc">Components</MjmlNavbarLink>
        <MjmlNavbarLink href="/try-it-live" color="#cccccc">Try it live</MjmlNavbarLink>
        <MjmlNavbarLink href="/templates" color="#cccccc">Templates</MjmlNavbarLink>
        <MjmlNavbarLink href="/components" color="#cccccc">Components</MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn> */}
  </MjmlSection>

]);