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
      /* add border navbar link */
      .mj-inline-links {
        text-align: left;
      }
      .mj-link {
        font-size: 16px !important;
        border-right: 1px solid black;
        max-width: 22%;
        text-align: center;
      }
      @media only screen and (max-width: 480px){
        .mj-link {
          border-right: none;
        }
      }
    `}</MjmlStyle>

    <MjmlStyle inline>{css}</MjmlStyle>

    <MjmlAttributes>
      <Mjml owa="desktop"></Mjml>
      <MjmlClass name="tiret" color="green" />
      <MjmlSection padding='0' backgroundColor=''></MjmlSection>
      <MjmlImage border='none' padding='0'/>
      <MjmlText font-size='35px' font-family='"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif' padding='0' line-height='1.1' color='#7115c7'/>
      <MjmlColumn padding='0' />
      {/* <MjmlFont name="Trebuchet" /> */}
    </MjmlAttributes>
  </MjmlHead>
]);