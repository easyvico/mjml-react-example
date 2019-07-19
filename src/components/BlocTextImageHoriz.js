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

import { TextIntro } from './TextIntro';
import { Cta } from './Cta';

export const BlocTextImageHoriz = (props) => ([
  <MjmlSection key="first" backgroundColor={props.color} padding='0 10px 10px 10px' direction={props.direction}>
    <MjmlColumn padding={10} >
      <MjmlImage fluid-on-mobile='true' width={290} src="https://picsum.photos/400" alt='image'/>
    </MjmlColumn>
    <MjmlColumn padding={10}>
      <MjmlText
        color={props.color1}
        fontSize='23px'
        fontWeight='lighter' 
        letterSpacing='1px'
        textTransform='uppercase'
        paddingBottom={5}
        lineHeight='1em'>
        <a className="font-trebuchet" href='http://www.google.fr' style={{color: 'inherit', textDecoration:'none'}} alt='Titre article'>{props.titre}</a>
      </MjmlText>
      <MjmlText padding='15px 0'>
        <img href={props.lien} src={props.picto} alt='picto loupe' style={{paddingRight:'15px', width:'25px'}}/>
        <span style={props.verdana}>Nouveau</span>
      </MjmlText>
      <TextIntro
        fontsize='20px'
        texte={props.texte}
        align='left'
        height='125px'
      />
      <Cta 
        lien='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1wVE5p8bdPE91adlnlY84XDYsxLywEjDBdg7UYGPg_Xm&c=7EKibOF-ZZHjknNbHOXuxA'
        text='voir le produit'
        borderRadius='1'
        backgroundColor='none'
        padding={0}
        width='100%'
      />
    </MjmlColumn>
  </MjmlSection>
]);
