import React, { Component } from 'react';

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

export const Intitule = (props) => ([
  <MjmlText
    fontSize='20px'
    fontWeight='lighter' 
    paddingBottom='10px'
    letterSpacing='1px'
    align='center'>
  {props.nom}
  </MjmlText>
]);