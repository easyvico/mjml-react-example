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
  MjmlText
} from 'mjml-react';

import { Cta } from './Cta';

export const Banniere = (props) => ([
  // BANNIERE
  <MjmlSection key="first" backgroundColor={props.color4} direction={props.direction}>
    <MjmlColumn>
      <MjmlImage fluid-on-mobile='true' width={320} src="https://picsum.photos/320/120" alt='lien image bannière 400x150 max' href="http://www.google.fr"/>
    </MjmlColumn>
    <MjmlColumn padding='10px 20px 10px 20px'>
      <MjmlText
        color={props.color1}
        fontSize='18px'
        letterSpacing='1px'
        lineHeight='1em'
        color={props.color}
        align='center'>
        <p style={{margin:'0', textTransform:'uppercase'}}>
          <a className="font-trebuchet" href='http://www.google.fr' style={{color: 'inherit', textDecoration:'none'}} title={props.lienTitre}>{props.titre}</a>
        </p>
        <p style={{marginTop:'10px', marginBottom:'0'}}>
          <a className="font-trebuchet" href='http://www.google.fr' style={{color: 'inherit', textDecoration:'none'}} title={props.lienTexte}>{props.texte}</a>
        </p>
        <p style={{marginTop:'10px', marginBottom:'0'}}>
          <a href='http://www.google.fr' style={{color: props.color2, textDecoration:'none'}} title={props.lienCliquezIci}>{props.lien}</a>
        </p>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
]);
