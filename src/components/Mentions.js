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
	<MjmlSection 
		backgroundColor={props.color4}
		padding={30}>
		<MjmlColumn>
			<MjmlText
				align='center'
				color={props.color}
				fontSize={12}
				lineHeight='1.5em'>
				Port gratuit si commande supérieure à 600€ HT, pour une seule adresse de livraison en France continentale, à l’exception des articles mentionnés port en sus dans notre catalogue. Offre réservée aux professionnels.
				Conformément à la loi n° 78 - 77 du 6 janvier 1978, vous disposez à tout moment d’un droit d’accès, de rectification,
				et d’opposition aux données vous concernant. 			
				<p style={{margin: '5px'}}>Pour cela, il vous suffit d’écrire à SIGNALS - 16 avenue Bernard Moitessier - ZI des 4 Chevaliers - 17187 PERIGNY 		Cedex ou de cliquer&nbsp;
					<a href='#' style={{color: 'inherit', textDecoration:'underline'}}>sur ce lien.</a>
				</p>
				<p style={{marginTop: '10px', marginBottom: '0px'}}>Pour vous désabonner de nos emails cliquez&nbsp;
					<a href='#' style={{color: 'inherit', textDecoration:'underline'}}>sur ce lien.</a>
				</p>
			</MjmlText>
		</MjmlColumn>
	</MjmlSection>
]);