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

export const Accroche = (props) => ([
  <MjmlSection key="first" padding='20px 0' backgroundColor="#ffffff">
    <MjmlColumn>
      <MjmlText font-weight='bold' color={props.couleur} font-size='20px' align='center' text-transform='uppercase'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText cssClass="backOrangeTextFire tiret">
        <p style={{color:props.style.colorTest}}>test couleur text props</p>
        <p>Tout le style de ce paragraphe est du css</p>
      </MjmlText>
      <MjmlButton font-size='15px' backgroundColor="#74a31c" paddingTop='20px' borderRadius='0' width='200' lineHeight='1.5' text-transform='uppercase'>{props.bouton}</MjmlButton>
    </MjmlColumn>
  </MjmlSection>
]);