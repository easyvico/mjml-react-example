import React from 'react';
import { readFileSync } from 'fs';

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
  MjmlStyle,
  MjmlText
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();

export const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        <MjmlStyle>{css}</MjmlStyle>
        <MjmlStyle>{`
          .blue-column {
            background-color: blue;
          }
        `}</MjmlStyle>
        <MjmlStyle inline>{`
          .red-column {
            background-color: red;
          }
        `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/">
              I like it!
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn cssClass="violet">
            <MjmlText>I am purple</MjmlText>
          </MjmlColumn>
          <MjmlColumn cssClass="orange">
            <MjmlText>I am orange</MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn cssClass="orange">
            <MjmlText textTransform='uppercase'>
              <h1 style={{textAlign:'center'}}>templates</h1>
              <ul>
                <li>
                  <a target='_blank' target='_blank' href="/1" style={{textDecoration:'none', color: 'grey'}}>Email 1</a>
                </li>
                <li>
                  <a href="/2" style={{textDecoration:'none', color: 'grey'}}>Email 2</a>
                </li>
                <li>
                  <a target='_blank' href="/3" style={{textDecoration:'none', color: 'grey'}}>Email Categories / Conseil / Institutionnel</a>
                </li>
                <li>
                  <a target='_blank' href="/4" style={{textDecoration:'none', color: 'grey'}}>Email 3 produits</a>
                </li>
              </ul>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
