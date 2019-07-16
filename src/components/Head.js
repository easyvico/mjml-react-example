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
    <MjmlTitle>Last Man</MjmlTitle>
    <MjmlPreview>Last Minute Offer...</MjmlPreview>

    <MjmlStyle>{`
      @media only screen and (max-width: 480px) {
        .nav-link {
          max-width: 25% !important;
          font-size: 14px !important;
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
      <MjmlSection padding='0' backgroundColor=''></MjmlSection>
      <MjmlImage border='none' padding='0'/>
      <MjmlText 
        font-size='35px'
        font-family='"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
        padding='0'
        line-height='1.1'
        color='#3c4858'
      />
      <MjmlColumn padding='0'/>
      {/* <MjmlFont name="Trebuchet" /> */}
    </MjmlAttributes>
  </MjmlHead>
]);