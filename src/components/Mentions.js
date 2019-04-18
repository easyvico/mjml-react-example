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
	MjmlGroup
} from 'mjml-react';

export const Mentions = (props) => ([
	<MjmlText align='center' color='#999999' fontSize='11px'>
		<p style={{marginBottom: '0px'}}>Merci de ne pas répondre à ce message.
			<br />Pour toute demande, utilisez notre service
			<a href='#' style={{color: 'inherit', textDecoration:'none'}}> "Nous contacter"</a>
		</p>
		<p style={{marginTop: '0px'}}>Si vous ne souhaitez plus recevoir cette lettre d'information, vous pouvez&#32;
			<a href='#' style={{color: '#999999', textDecoration:'none'}}>vous désinscrire.</a>
		</p>
	</MjmlText>
]);