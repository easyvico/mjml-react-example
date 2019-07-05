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

export const NavBar = (props) => ([
  <MjmlSection paddingTop={10}>
    <MjmlColumn width='30%'>
      <MjmlImage src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif' alt='logo' width={220} />
    </MjmlColumn>
    <MjmlColumn verticalAlign='bottom' textAlign='right' width='70%'>
      <MjmlNavbar base-url="https://mjmlml.io" hamburger="none" ico-color="orange" icoPadding='5px'>
        <MjmlNavbarLink cssClass="text-hover" textTransform='lowcase' padding={10} href="/gettings-started-onboard" color="#cccccc">Signalisation de sécurité</MjmlNavbarLink>
        <MjmlNavbarLink cssClass="text-hover" textTransform='lowcase' padding={10} href="/templates" color="#cccccc">Protection du site</MjmlNavbarLink>
        <MjmlNavbarLink cssClass="text-hover" textTransform='lowcase' padding={10} href="/components" color="#cccccc">Tous les produits</MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn>

    {/* <MjmlColumn cssClass='hidden-mobile' >
      <MjmlImage src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif' alt='logo' width={220} />
    </MjmlColumn>
    <MjmlColumn cssClass='hidden-mobile' >
      <MjmlNavbar base-url="https://mjmlml.io">
        <MjmlNavbarLink cssClass="text-hover" href="/gettings-started-onboard" color="#cccccc">Getting started</MjmlNavbarLink>
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