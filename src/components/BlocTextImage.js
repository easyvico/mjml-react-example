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

export const BlocTextImage = (props) => ([
    <MjmlColumn backgroundColor="#ffffff" padding={10}>
      <MjmlImage fluid-on-mobile='true' width={290} src="https://picsum.photos/290" alt='image'/>
      <MjmlText
        color={props.color1}
        fontSize='20px'
        fontWeight='lighter' 
        paddingBottom='10px'
        letterSpacing='1px'
        paddingTop={10}
        lineHeight='1em'>
        <a className="font-trebuchet" href='http://www.maif.fr' style={{color: 'inherit', textDecoration:'none'}} alt='Titre article'>{props.titre}</a>
      </MjmlText>
      <MjmlText 
        color={props.color2}
        font-size='18px'
        font-weight='bold'>
        <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.lien}</a>
      </MjmlText>
    </MjmlColumn>
]);
