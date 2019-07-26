import React, { Component } from 'react';
import { Divider } from './Divider';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText
} from 'mjml-react';

export const TextDescriptif = (props) => ([ 
  <MjmlText
    fontSize={props.fontsize}
    letterSpacing='1px'
    align={props.align}
    height={props.height}
  >
  {props.texte}
  </MjmlText>
]);