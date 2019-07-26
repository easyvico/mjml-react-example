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
import { TextDescriptif } from './TextDescriptif';

export const BlocTextImageHoriz = (props) => ([
  <MjmlSection key="first" backgroundColor={props.color} padding={props.padding} direction={props.direction}>
    <MjmlColumn padding={10} >
      <MjmlImage fluid-on-mobile='true' width={290} src="https://picsum.photos/400" alt='image'/>
    </MjmlColumn>
    <MjmlColumn padding={10}>
      <MjmlText
        color={props.color1}
        fontSize='20px'
        letterSpacing='1px'
        textTransform='uppercase'
        paddingBottom={5}
        lineHeight='1em'
        fontWeight='bold'>
        <a className="font-trebuchet" href='http://www.google.fr' style={{color: 'inherit', textDecoration:'none'}} alt='Titre article'>{props.titre}</a>
      </MjmlText>
      <MjmlText padding='15px 0'>
        <img href={props.lien} src={props.picto} alt='picto loupe' style={{paddingRight:'15px', width:'25px'}}/>
        <span style={props.verdana}>Nouveau</span>
      </MjmlText>
      <TextDescriptif
        fontsize='18px'
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
