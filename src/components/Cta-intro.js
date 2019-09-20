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

export const CtaIntro = (props) => ([
  <MjmlSection key="first" padding='20px 20px 0 20px' backgroundColor="#ffffff">
    <MjmlColumn>
      <MjmlText font-weight='bold' color={props.couleur} font-size='15px' align='center'>
        <a target='_blank' href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText>
        <p style={{borderTop:'3px solid #ede9e2', width:'100px', margin:'10px auto'}}></p>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
]);