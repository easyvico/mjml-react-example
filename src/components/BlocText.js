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

import { Cta } from '../components/Cta';

export const BlocText = (props) => ([
  <MjmlSection key="first" paddingTop='10px'>
    <MjmlColumn cssClass='padding-column' backgroundColor="orange" >
      <MjmlText cssClass="font-trebuchet" fontWeight='lighter' align='center' textTransform='uppercase' letterSpacing='3px' lineHeight='1.3em'>
        <a href='#' style={{color: '#ffffff', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <Cta bouton='Titre bouton' borderRadius='1' backgroundColor='none' />
    </MjmlColumn>
    <MjmlColumn>
      {/* <MjmlText cssClass="font-trebuchet" fontWeight='lighter' fontSize='20px' align='center' textTransform='uppercase'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}><img src='https://fillmurray.com/320/445' alt='picto' /></a>
      </MjmlText> */}
      <MjmlImage fluid-on-mobile='true' src="https://fillmurray.com/320/445" />
    </MjmlColumn>
  </MjmlSection>
]);
