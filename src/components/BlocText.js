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
    <MjmlColumn width='300px' backgroundColor="orange" padding='88px 20px'>
      <MjmlText 
        cssClass="font-trebuchet"
        fontSize='27px'
        fontWeight='lighter' 
        align='center'
        paddingBottom='10px'
        textTransform='uppercase' 
        letterSpacing='1.3px'
        lineHeight='1.2em'>
        <a href='#' style={{color: '#ffffff', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <Cta bouton='En savoir plus' borderRadius='1' backgroundColor='none' width='185px' />
    </MjmlColumn>
    <MjmlColumn width='300px'>
      {/* <MjmlText cssClass="font-trebuchet" fontWeight='lighter' fontSize='20px' align='center' textTransform='uppercase'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}><img src='https://fillmurray.com/320/445' alt='picto' /></a>
      </MjmlText> */}
      <MjmlImage fluid-on-mobile='true' height='320px' src="https://fillmurray.com/600/600" alt='jacket'/>
    </MjmlColumn>
  </MjmlSection>
]);
