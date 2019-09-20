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
import { Z_BLOCK } from 'zlib';

export const TextIntro = (props) => ([ 
  <MjmlSection 
    backgroundColor={props.color}
    padding={props.paddingSection}
  >
    <MjmlColumn>
      <MjmlText
        fontSize={props.fontsize}
        letterSpacing='1px'
        align={props.align}
        padding={props.padding}
      >
        <a className="font-trebuchet" target='_blank' href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>
          <span style={{display: 'block'}}>
            {props.civilite}
          </span>     
          {props.texte}
        </a>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
]);