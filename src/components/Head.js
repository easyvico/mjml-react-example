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
  MjmlFont
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();

export const Head = () => ([
  <MjmlHead>
    <MjmlTitle>Last Man</MjmlTitle>
    <MjmlPreview>Last Minute Offer...</MjmlPreview>

    <MjmlStyle>{`
      .padding-column div {
        padding: 144px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        .padding-column div {
          padding: 20px 20px 5px 20px !important;
        }
      }
    `}</MjmlStyle>

    <MjmlStyle inline>{css}</MjmlStyle>

    <MjmlAttributes>
      <Mjml owa="desktop"></Mjml>
      <MjmlClass name="tiret" color="green" />
      <MjmlSection padding='0' backgroundColor=''></MjmlSection>
      <MjmlImage border='none' padding='0'/>
      <MjmlText font-size='35px' font-family='arial' padding='0' line-height='1.1' color='red'/>
      {/* <MjmlFont name="Trebuchet" /> */}
    </MjmlAttributes>
  </MjmlHead>
]);