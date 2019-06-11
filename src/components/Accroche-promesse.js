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
      <MjmlText font-weight='bold' color={props.style.colorTest} font-size='20px' align='center' text-transform='uppercase'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText cssClass="backOrangeTextFire tiret" font-size='13px'>
        <p style={{color:props.style.colorTest}}>Test couleur de la couleur du text avec props.style.colorTest</p>
        <p>Tout les style de ce paragraphe sont du css</p>
      </MjmlText>
      <MjmlButton font-size='15px' backgroundColor="#74a31c" paddingTop='20px' borderRadius='0' width='200' lineHeight='1.5' text-transform='uppercase'>{props.bouton}</MjmlButton>
    </MjmlColumn>
  </MjmlSection>
]);
