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
  MjmlStyle
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();

export const Head = () => ([
  <MjmlHead>
    <MjmlTitle>Last Minute</MjmlTitle>
    <MjmlPreview>Last Minute Offer...</MjmlPreview>

    {/* <MjmlStyle inline>{`
      .backOrangeTextFire p:last-child {
        background: orange;
        color: firebrick;
      }
      .tiret p:last-child {
        border-top: 3px solid red; 
      }
      [owa] .mj-column-per-100 { width: 100% !important; }
      [owa] .mj-column-per-50 { width: 50% !important; }
      [owa] .mj-column-per-33 { width: 33.333% !important; }
    `}</MjmlStyle> */}

    <MjmlStyle inline>{css}</MjmlStyle>

    <MjmlAttributes>
      <Mjml owa="desktop"></Mjml>
      <MjmlClass name="tiret" color="green" />
      <MjmlSection padding='0' backgroundColor=''></MjmlSection>
      <MjmlImage border='none' padding='0'/>
      <MjmlText font-size='35px' font-family='arial' padding='0' line-height='1.1'/>
    </MjmlAttributes>
  </MjmlHead>
]);