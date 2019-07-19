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

export const PictoText = (props) => ([

 <MjmlColumn backgroundColor={props.background}>
    <MjmlImage href={props.lien} src={props.picto} alt='picto' align='center' width='64' />
    <MjmlText align='center' fontSize='18px' color={props.color} padding='7px 28px 30px'>
      <a href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
    </MjmlText>
    <MjmlText>
    {/* texte fictif pour lalignement des colonnes */}
    </MjmlText>
  </MjmlColumn> 
]);