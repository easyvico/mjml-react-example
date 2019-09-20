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
            <a title='pre-header' target='_blank' href='http://www.lienPreheader.fr?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]' style={{color: 'inherit'}}>Pre-header lorem ipsum lo adipiscing elit, sed do </a>
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
            <a title='version en ligne' target='_blank' href='&&&' style={{color: 'inherit'}}>Version en ligne</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
]);