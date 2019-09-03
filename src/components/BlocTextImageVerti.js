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

export const BlocTextImageVerti = (props) => ([
  <MjmlSection key="first" backgroundColor={props.color} padding={props.padding} direction={props.direction}>
    <MjmlColumn>
      <MjmlImage fluid-on-mobile='true' width={600} src="https://picsum.photos/600" alt={props.image}/>
      <MjmlText
        color={props.color1}
        fontSize='20px'
        letterSpacing='1px'
        textTransform='uppercase'
        align='center'
        paddingTop={20}
        paddingBottom={5}
        lineHeight='1em'
        fontWeight='bold'>
        <a className="font-trebuchet" href='http://www.google.fr' style={{color: 'inherit', textDecoration:'none'}} title={props.lienTitre}>{props.titre}</a>
      </MjmlText>
      <MjmlText padding='8px 0' align='center'>
        <a href='http://www.google.fr' title={props.lienLoupeNouveau}>
          <img 
            href={props.lien}
            src={props.picto}
            alt={props.imageLoupe}
            style={{paddingRight:'15px', width:'25px'}}
          />        
          <span style={props.verdana}>Nouveau</span>
        </a>
      </MjmlText>
      <TextDescriptif
        lienTexte={props.lienTexte}
        fontsize='18px'
        texte={props.texte}
        align='center'
      />
      <Cta 
        lien='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1wVE5p8bdPE91adlnlY84XDYsxLywEjDBdg7UYGPg_Xm&c=7EKibOF-ZZHjknNbHOXuxA'
        text='voir le produit'
        borderRadius='1'
        backgroundColor='none'
        width='100%'
        padding='30px 0px'
        width={300}
      />
    </MjmlColumn>
  </MjmlSection>
]);
