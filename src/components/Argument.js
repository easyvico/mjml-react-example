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

export const Argument = (props) => ([

  // <MjmlColumn width='33%'>
  //   <MjmlImage href='#' src='http://placeimg.com/80/80/nature' alt='image' align='center' width='80' />
  //   <MjmlText font-size='18px' align='center' text-transform='uppercase' paddingTop='20px'>
  //     <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
  //   </MjmlText>
  //   <MjmlText cssClass='tiret'>
  //     <p style={{ borderTop: '3px solid blue', width:'35px', margin:'10px auto'}}></p>
  //   </MjmlText>
  //   <MjmlText align='center' padding='10px 10px 20px 10px' cssClass='text-contenu'>
  //     <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.contenu}</a>
  //   </MjmlText>
  //   {/* ajout icone
  //   <MjmlImage href='#' src='https://imgplaceholder.com/20x20/transparent/757575/glyphicon-ok' alt='image' align='center' width='20px' /> */}
  // </MjmlColumn>

  <MjmlColumn backgroundColor={props.background}>
    <MjmlImage href='#' src='https://picsum.photos/80' alt='image' align='center' width='80' />
    <MjmlText align='center' text-transform='uppercase' paddingTop='20px'>
      <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
    </MjmlText>
<<<<<<< HEAD
    <MjmlText cssClass='tiret'>
      <p style={{ borderTop: '3px solid blue', width:'35px', margin:'10px auto' }}></p>
=======
    <MjmlText backgroundColor={props.tiret}>
      <p style={{borderTop:'3px solid orange', width:'35px', margin:'10px auto'}}></p>
>>>>>>> b789491f7623b86dcf7ab1044ee5fe6a99202ec7
    </MjmlText>
    <MjmlText align='center' padding='10px 10px 20px 10px' cssClass='text-contenu'  fontSize='18px'>
      <a href='#' style={{color: 'inherit', textDecoration:'none'}}>{props.contenu}</a>
    </MjmlText>
    {/* ajout icone
    <MjmlImage href='#' src='https://imgplaceholder.com/20x20/transparent/757575/glyphicon-ok' alt='image' align='center' width='20px' /> */}
    <MjmlText>
    {/* texte fictif pour lalignement des colonnes */}
    </MjmlText>
  </MjmlColumn> 
]);