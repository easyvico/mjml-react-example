import React, { Component } from 'react';

import {
  Mjml,
  MjmlSection,
  MjmlColumn,
  MjmlNavbar,
  MjmlNavbarLink
} from 'mjml-react';

export const NavBar = (props) => ([
  <MjmlSection>
    <MjmlColumn>
      <MjmlNavbar base-url="https://mjmlml.io" hamburger="hamburger" ico-color="#cccccc">
        <MjmlNavbarLink cssClass="text-hover" href="/gettings-started-onboard" color="#cccccc">Getting started</MjmlNavbarLink>
        <MjmlNavbarLink href="/try-it-live" color="#cccccc">Try it live</MjmlNavbarLink>
        <MjmlNavbarLink href="/templates" color="#cccccc">Templates</MjmlNavbarLink>
        <MjmlNavbarLink href="/components" color="#cccccc">Components</MjmlNavbarLink>
      </MjmlNavbar>
    </MjmlColumn>
  </MjmlSection>
]);