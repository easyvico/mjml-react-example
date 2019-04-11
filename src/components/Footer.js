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

export const Footer = (props) => ([
	<MjmlSection backgroundColor='#333333' align='left'>
		<MjmlGroup>
			<MjmlColumn width='25%' borderRight='1px solid #ffffff'>
				<MjmlText padding='10px 8px' align='center' color='#ffffff' fontSize='11px' lineHeight='1.5'>
					<a href='#' style={{color: 'inherit', textDecoration:'none'}}>societe.fr</a>
				</MjmlText>
			</MjmlColumn>
			<MjmlColumn width='25%' borderRight='1px solid #ffffff'>
				<MjmlText padding='10px 8px' align='center' color='#ffffff' fontSize='11px' lineHeight='1.5'>
					<a href='#' style={{color: 'inherit', textDecoration:'none'}}>Entreprise</a>
				</MjmlText>
			</MjmlColumn>
			<MjmlColumn width='25%' borderRight='1px solid #ffffff'>
				<MjmlText padding='10px 8px' align='center' color='#ffffff' fontSize='11px' lineHeight='1.5'>
					<a href='#' style={{color: 'inherit', textDecoration:'none'}}>logo</a>
				</MjmlText>
			</MjmlColumn>
			<MjmlColumn width='25%'>
				<MjmlText padding='10px 8px' align='center' color='#ffffff' fontSize='11px' lineHeight='1.5'>
					<a href='#' style={{color: 'inherit', textDecoration:'none'}}>Espace privé</a>
				</MjmlText>
			</MjmlColumn>
		</MjmlGroup>
	</MjmlSection>
]);