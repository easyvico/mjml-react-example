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
      <MjmlText fontWeight='lighter' color={props.style.colorTest} fontSize='20px' align='center' textTransform='uppercase'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText cssClass="backOrangeTextGreen tiret" fontSize='18px'>
        <p style={props.style.text}>Test avec de la couleur mediumvioletred du text en 40px avec props.style.text et Verdana</p>
        <p style={{color:props.style.colorTest}}>Test couleur de la couleur du text avec props.style.colorTest</p>
        <p className='font-trebuchet'>Texte avec du Trebuchet en css SMAVIO</p>
        <p className='font-tahoma'>Texte avec du Tahoma en css SMAVIO</p>
        <p>Tout les style de ce paragraphe sont du css avec une font Georgia de 18 px et padding 10px</p>
      </MjmlText>
      <MjmlButton fontSize='15px' backgroundColor="#74a31c" paddingTop='20px' borderRadius='0' width='200' lineHeight='1.5' text-transform='uppercase'>{props.bouton}</MjmlButton>
    </MjmlColumn>
  </MjmlSection>
]);
