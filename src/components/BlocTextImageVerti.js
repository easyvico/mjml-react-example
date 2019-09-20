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
      <MjmlImage fluid-on-mobile='true' width={600} src="https://picsum.photos/600" alt={props.image} href={props.lien} />
      <MjmlText
        color={props.color1}
        fontSize='20px'
        letterSpacing='1px'
        textTransform='uppercase'
        align='left'
        paddingTop={20}
        paddingBottom={5}
        lineHeight='1em'
        fontWeight='bold'>
        <a className="font-trebuchet" target='_blank' href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText padding='8px 0' align='left'>
        <a target='_blank' href={props.lien}>
          <img 
            target='_blank' href={props.lien}
            src={props.picto}
            alt={props.imageLoupe}
            style={{paddingRight:'15px', width:'25px'}}
          />        
          <span style={props.verdana}>Nouveau</span>
        </a>
      </MjmlText>
      <TextDescriptif
        fontsize='18px'
        texte={props.texte}
        align='left'
        lien={props.lien}
      />
      <Cta 
        lien={props.lien}
        text='voir le produit'
        borderRadius='1'
        background={props.background}
        width='100%'
        padding='30px 0px'
        width={300}
      />
    </MjmlColumn>
  </MjmlSection>
]);
