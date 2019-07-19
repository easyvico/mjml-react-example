import React, { Component } from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlDivider
} from 'mjml-react';

export const Divider = (props) => ([
  <MjmlSection
    backgroundColor={props.background}
    padding={props.padding}
  >
    <MjmlColumn>
      <MjmlDivider
        padding={props.padding0}
        borderWidth='1px' 
        borderColor={props.border}
      />
    </MjmlColumn>
  </MjmlSection>
]);