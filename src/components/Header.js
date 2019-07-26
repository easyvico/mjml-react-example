import React, { Component } from 'react';
import {
  Mjml,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText
} from 'mjml-react';

export const Header = (props) => ([
      <MjmlSection
        key="first"
        padding='10px 0px'
        backgroundColor={props.background}>
        <MjmlColumn>
          <MjmlText 
            textDecoration='underline'
            font-size='12px'
            color={props.color4}
            align='center'
            padding='0'>
            <a href='./email.html' style={{color: 'inherit'}}>Lorem ipsum lo adipiscing elit, sed do eiusmod tempor incididunt</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>,
      <MjmlSection
        key="second"
        padding='0px 0px'
        backgroundColor={props.background}>
        <MjmlColumn>
          <MjmlText
            textDecoration='underline'
            font-size='12px'
            color={props.color7}
            align='center'
            padding='0'>
            <a href='./email.html' style={{color: 'inherit'}}>Version en ligne</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
]);