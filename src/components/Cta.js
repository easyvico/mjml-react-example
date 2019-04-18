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
  <MjmlButton font-size='15px' backgroundColor="#74a31c" paddingBottom='15px' borderRadius='0' width='166' lineHeight='1.5' textTransform='uppercase' verticalAlign='middle'>{props.bouton}</MjmlButton>
]);