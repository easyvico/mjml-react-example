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
  <MjmlSection>
    <MjmlColumn>
      <MjmlImage src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif' alt='logo' width={120} />
    </MjmlColumn>
    <MjmlColumn>
      <MjmlNavbar base-url="https://mjmlml.io" hamburger="hamburger" ico-color="red" icoPadding={0}>
        <MjmlNavbarLink cssClass="text-hover" href="/gettings-started-onboard" color="#cccccc" lineHeight={5}>Getting started</MjmlNavbarLink>
        <MjmlNavbarLink href="/try-it-live" color="#cccccc" lineHeight={5}>Try it live</MjmlNavbarLink>
        <MjmlNavbarLink href="/templates" color="#cccccc" lineHeight={5}>Templates</MjmlNavbarLink>
        <MjmlNavbarLink href="/components" color="#cccccc" lineHeight={5}>Components</MjmlNavbarLink>
        <MjmlNavbarLink href="/try-it-live" color="#cccccc" lineHeight={5}>Try it live</MjmlNavbarLink>
        <MjmlNavbarLink href="/templates" color="#cccccc" lineHeight={5}>Templates</MjmlNavbarLink>
        <MjmlNavbarLink href="/components" color="#cccccc" lineHeight={5}>Components</MjmlNavbarLink>
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