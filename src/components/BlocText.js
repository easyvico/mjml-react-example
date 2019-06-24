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

import { Cta } from '../components/Cta';

export const BlocText = (props) => ([
  <MjmlSection key="first" paddingTop='10px'>
    <MjmlColumn backgroundColor="orange" padding='81px 20px'>
      <MjmlText cssClass="font-trebuchet" fontWeight='lighter' align='center' textTransform='uppercase' letterSpacing='3px' lineHeight='1.3em'>
        <a href='#' style={{color: '#ffffff', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <Cta bouton='Titre bouton' borderRadius='1' backgroundColor='none' />
    </MjmlColumn>
    <MjmlColumn>
      {/* <MjmlText cssClass="font-trebuchet" fontWeight='lighter' fontSize='20px' align='center' textTransform='uppercase'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}><img src='https://fillmurray.com/320/445' alt='picto' /></a>
      </MjmlText> */}
      <MjmlImage fluid-on-mobile='true' height='320px' src="https://fillmurray.com/640/480" alt='jacket'/>
    </MjmlColumn>
  </MjmlSection>
]);
