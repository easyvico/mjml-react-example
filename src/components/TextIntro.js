import React, { Component } from 'react';
import { Intitule } from './Intitule';
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

export const TextIntro = (props) => ([
  <MjmlSection backgroundColor={props.background0} padding={props.padding}>
    <MjmlColumn>
      <Intitule
        padding='0' 
        nom='Bonjour Monsieur Giraud,'
      />
      <MjmlText
        fontSize='20px'
        fontWeight='lighter'
        letterSpacing='1px'
        align='center'>
      {props.texte}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
]);