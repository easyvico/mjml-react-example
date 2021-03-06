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

export const BlocImageText = (props) => ([
    <MjmlColumn backgroundColor={props.color} padding={10}>
      <MjmlImage fluid-on-mobile='true' width={290} src="https://picsum.photos/290" alt={props.image} href={props.lien}/>
      <MjmlText
        color={props.color1}
        fontSize='20px'
        fontWeight='lighter' 
        letterSpacing='1px'
        paddingTop={10}
        paddingBottom={5}
        lineHeight='1em'>
        <a className="font-trebuchet" target='_blank' href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText
        color={props.color2}
        font-size='18px'
        font-weight='bold'>
        <a target='_blank' target='_blank' href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>{props.texte}</a>
      </MjmlText>
    </MjmlColumn>
]);
