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
      <MjmlImage fluid-on-mobile='true' width={290} src="https://picsum.photos/400" alt={props.image} href={props.lien} />
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
        <a className="font-trebuchet" target='_blank' href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>{props.titre}</a>
      </MjmlText>
      <MjmlText padding='15px 0'>
        <a target='_blank' href={props.lien} style={{color: 'inherit', textDecoration:'none'}}>
          <img src={props.picto} alt={props.imageLoupe} style={{paddingRight:'15px', width:'25px'}}/>
          <span style={props.verdana}>Nouveau</span>
        </a>
      </MjmlText>
      <TextDescriptif
        fontsize='18px'
        texte={props.texte}
        align='left'
        height='125px'
        lien={props.lien}
      />
      <Cta 
        lien={props.lien}
        text='voir le produit'
        borderRadius='1'
        background={props.background}
        padding={0}
        width='100%'
      />
    </MjmlColumn>
  </MjmlSection>
]);
