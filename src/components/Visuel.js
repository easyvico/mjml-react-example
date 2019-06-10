import React, { Component } from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
  MjmlStyle
} from 'mjml-react';

export const Visuel = (props) => ([
  <MjmlSection key="first" padding-top='15px' backgroundColor="#ffffff">
    <MjmlColumn>
      <MjmlImage href='http://www.maif.fr' src=' https://fillmurray.com/640/300' alt='image' align='center' />
    </MjmlColumn>
  </MjmlSection>
]);