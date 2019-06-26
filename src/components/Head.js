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
  MjmlColumn
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();

export const Head = () => ([
  <MjmlHead>
    <MjmlTitle>Last Man</MjmlTitle>
    <MjmlPreview>Last Minute Offer...</MjmlPreview>

    <MjmlStyle>{`
      .visible-mobile {
        display: none !important;
      }
      .padding-column {
        padding-left: 10px !important;
      }
      @media only screen and (max-width: 600px) {
        .padding-column {
          padding-left: 0px !important;
        }
        .hidden-mobile {
          display: none !important;
        }
        .visible-mobile {
          display: block !important;
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
      <MjmlColumn padding='0' />
      {/* <MjmlFont name="Trebuchet" /> */}
    </MjmlAttributes>
  </MjmlHead>
]);