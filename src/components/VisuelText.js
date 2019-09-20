import React, { Component } from 'react';

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
  MjmlText,
  MjmlStyle,
  MjmlHero
} from 'mjml-react';

import { Cta } from './Cta';

export const VisuelText = (props) => ([
  <MjmlHero
    mode="fixed-height"
    backgroundWidth="640px"
    backgroundHeight="340px"
    backgroundUrl="https://picsum.photos/640/340?grayscale"
    padding="160px 0px 0px 0px"
    width="100%"
  >
    <MjmlText
      fontSize={35}
      align='center'
      color={props.color}
      textTransform='uppercase'
      letterSpacing={8}>
      <a target='_blank' href={props.lien}>
        {props.titre}
      </a>
    </MjmlText>
    <Cta
      background={props.background}
      lien={props.lien}
      text='en savoir plus'
      color={props.color2}
      border={props.color2}
      padding={props.padding}
      
		/>
  </MjmlHero>
]);

// import React, { Component } from 'react';

// import {
//   Mjml,
//   MjmlHead,
//   MjmlTitle,
//   MjmlPreview,
//   MjmlBody,
//   MjmlSection,
//   MjmlColumn,
//   MjmlButton,
//   MjmlImage,
//   MjmlText,
//   MjmlStyle,
//   MjmlHero
// } from 'mjml-react';

// export const VisuelText = (props) => ([
//   <MjmlHero
//     mode="fixed-height"
//     backgroundWidth="640px"
//     backgroundHeight="340px"
//     backgroundUrl="https://picsum.photos/640/340?grayscale"
//     padding="132px 0px"
//     width="100%"
//   >
//     <MjmlText
//       fontSize={35}
//       align='center'
//       color={props.color}
//       textTransform='uppercase'
//       letterSpacing={8}>
//       <a href="http://www.google.fr"
//         style={{padding:'20% 0%'}}>
//         {props.titre}
//       </a>
//     </MjmlText>
//   </MjmlHero>
// ]);