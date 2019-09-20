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

import { Mentions } from './Mentions';
import { Cta } from './Cta';
import { PictoText } from './PictoText';
import { Divider } from './Divider';

export const Footer = (props) => ([
	<Divider 
		border={props.colorDivider}
		background={props.color}
		padding='20px 0 0 0'
	/>,
	<MjmlSection backgroundColor={props.color} padding='20px 20px 0px'>
		<PictoText
			lien='https://www.signals.fr/cms/paiement.html?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]'
			picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/306558830.png'
			titre='Paiement sécurisé par CB'
			image='paiement'
			color={props.color4}
		/>
		<PictoText
			lien='https://www.signals.fr/contacts?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]'
			picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/1508995061.png'
			titre='Du lundi au vendredi 8h-18h'
			image='contact'
			color={props.color4}
		/>
		<PictoText
			lien='https://www.signals.fr/cms/livraison.html?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]'
			picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/1610690601.png'
			titre='Livraison gratuite sous 24 à 48h'
			image='livraison'
			color={props.color4}
		/>
	</MjmlSection>,
	<MjmlSection backgroundColor={props.color}>
		<MjmlColumn>
			<Cta
				lien='https://www.signals.fr/demandez-un-devis?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]'
				text='devis gratuit'
				background={props.background}
				color={props.color2}
				border={props.color2}
				width='91%'
				paddingbottom='15px'
			/>
		</MjmlColumn>
		<MjmlColumn>
			<Cta
				lien='https://www.signals.fr/cms/nos-catalogues-en-ligne.html?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]'
				text='catalogues virtuels'
				background={props.background}
				color={props.color2}
				border={props.color2}
				width='91%'
				paddingbottom='15px'
			/>
		</MjmlColumn>
	</MjmlSection>,
	<MjmlSection backgroundColor={props.color} padding='20px 0px'>
		<MjmlGroup>
			<MjmlColumn>
				<MjmlImage
				alt="Facebook"
				href="https://www.facebook.com/Signals.LaRochelle?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
				width={35}
				src="http://p7tre.emv3.com/IL/7/2/2/1101071722/335591204.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Youtube"
				href="https://www.youtube.com/user/SignalsLaRochelle?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
				width={35}
				src="http://p7tre.emv3.com/IL/7/2/2/1101071722/1923572560.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Twitter"
				href="https://twitter.com/SignalsBrady?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
				width={35}
				src="http://p7tre.emv3.com/IL/7/2/2/1101071722/1372750550.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Linkdn"
				href="https://www.linkedin.com/company/signals-la-rochelle/?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
				width={35}
				src="http://p7tre.emv3.com/IL/7/2/2/1101071722/600800451.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Blog"
				href="https://blog-signals.fr/?memberid=[EMV FIELD]MEMBER_ID[EMV /FIELD]"
				width={35}
				src="http://p7tre.emv3.com/IL/7/2/2/1101071722/2041096229.png">
				</MjmlImage>
			</MjmlColumn>
		</MjmlGroup>
	</MjmlSection>,
	<Mentions
		lienContact='contact'
		lienDesabonner='désabonner'
		color={props.color}
		color4={props.color4}
  />
]);