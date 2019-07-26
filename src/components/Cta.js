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

export const Cta = (props) => ([
    <MjmlButton
      href={props.lien}
      padding={props.padding}
      font-size='15px'
      backgroundColor='none'
      paddingBottom={props.paddingbottom}
      borderRadius='0'
      border='2px solid #fd3d0e'
      color='#fd3d0e'
      width={props.width}
      lineHeight='1.5' 
      textTransform='uppercase'
      cssClass='button'
      mjmlClass='button'
    >
    {props.text}
  </MjmlButton>
]);