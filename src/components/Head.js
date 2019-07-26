import React, { Component } from 'react';
import { readFileSync } from 'fs';

import {
  Mjml,
  MjmlHead,
  MjmlAttributes,
  MjmlClass,
  MjmlTitle,
  MjmlPreview,
  MjmlSection,
  MjmlImage,
  MjmlText,
  MjmlStyle,
  MjmlFont,
  MjmlColumn,
  MjmlButton
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();

export const Head = () => ([
  <MjmlHead>
    <MjmlTitle>Signals</MjmlTitle>
    <MjmlPreview>Découvrez les catégories</MjmlPreview>

    <MjmlStyle>{`
      @media only screen and (max-width: 480px) {
        .nav-link {
          max-width: 25% !important;
          font-size: 14px !important;
        }
        .nav-link:first-child {
          max-width: 27% !important;
        }
      }
      
      {/* .align-right div {
        text-align: right !important;
        font-size: 14px !important;
      }
      @media only screen and (max-width: 480px) {
        .align-right div {
          text-align: center !important;
          font-size: 12px !important;
        }
      } */}
    `}</MjmlStyle>

    <MjmlStyle inline>{css}</MjmlStyle>

    <MjmlAttributes>
      <Mjml owa="desktop"></Mjml>
      <MjmlClass name="tiret" color="green" />
      {/* classe visant directement le <a> du bouton */}
      <MjmlClass 
        name="button"
        font-family='"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
        textDecoration='none'
        backgroundColor='pink'
      />
      <MjmlSection padding='0' backgroundColor=''></MjmlSection>
      <MjmlImage border='none' padding='0'/>
      <MjmlText 
        font-size='18px'
        font-family='"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
        padding='0'
        line-height='1.1'
        color='#3c4858'
      />
      {/* <MjmlButton 
        font-family='"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
        fontWeight='bold'
        padding='0px'
        /> */}
      <MjmlColumn padding='0'/>
    </MjmlAttributes>
  </MjmlHead>
]);