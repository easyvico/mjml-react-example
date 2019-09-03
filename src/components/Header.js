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
            <a title='lien pre-header' href='http://p7tre.emv3.com/HP?b=xdJfnzCy2xox9yXztpvbzgxAVGjWFvisqX2F9i6fqtM-DC9WcccfWBoziDq_ta_e&c=vNOuENFv8XYq5hWmI3ohHw' style={{color: 'inherit'}}>Pre-header lorem ipsum lo adipiscing elit, sed do </a>
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
            <a title='lien version en ligne' href='http://p7tre.emv3.com/HM?b=xdJfnzCy2xox9yXztpvbzuMPEpxroP1sf71Pw_OCffvLZTvQb7-YQ70r-YrR8vVC&c=vNOuENFv8XYq5hWmI3ohHw' style={{color: 'inherit'}}>Version en ligne</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
]);