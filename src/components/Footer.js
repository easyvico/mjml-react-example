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
			lien='https://www.signals.fr/cms/paiement.html?memberid=29894357930'
			picto='https://imgshare.io/images/2019/07/16/ico-creditcard.png'
			titre='Paiement sécurisé par CB'
			color={props.color4}
		/>
		<PictoText
			lien='https://www.signals.fr/contacts?memberid=29894357930'
			picto='https://imgshare.io/images/2019/07/16/ico-headphone.png'
			titre='Du lundi au vendredi 8h-18h'
			color={props.color4}
		/>
		<PictoText
			lien='https://www.signals.fr/cms/livraison.html?memberid=29894357930'
			picto='https://imgshare.io/images/2019/07/16/ico-rocket.png'
			titre='Livraison gratuite sous 24 à 48h'
			color={props.color4}
		/>
	</MjmlSection>,
	<MjmlSection backgroundColor={props.color}>
		<MjmlColumn>
			<Cta
				lien='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV11d5Pm2HfS9d6xeX97o_8zlXLYyIkU0VF1r4lL2aou4q&c=7EKibOF-ZZHjknNbHOXuxA'
				text='devis gratuit'
				color={props.color2}
				border={props.color2}
				width='91%'
				paddingbottom='15px'
			/>
		</MjmlColumn>
		<MjmlColumn>
			<Cta
				lien='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1wVE5p8bdPE91adlnlY84XDYsxLywEjDBdg7UYGPg_Xm&c=7EKibOF-ZZHjknNbHOXuxA'
				text='catalogues virtuels'
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
				href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV15lmpKODlvF8x0SpBsIqb57vgZbb58jzNmpNdYh7HUfJ&c=7EKibOF-ZZHjknNbHOXuxA"
				width={35}
				src="https://imgshare.io/images/2019/07/16/ico-facebook.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Youtube"
				href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV11voj59nJQWFrbVBfoVbJXJ9DtBGcc_Btv7aJKQ7mdk2&c=7EKibOF-ZZHjknNbHOXuxA"
				width={35}
				src="https://imgshare.io/images/2019/07/16/ico-youtube.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Twitter"
				href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV18BrHJan_8DvKbAIAwNd_RykC6f4p6FDLRMSEZNhTAgD&c=7EKibOF-ZZHjknNbHOXuxA"
				width={35}
				src="https://imgshare.io/images/2019/07/16/ico-twitter.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Linkdn"
				href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1w3qrsKgDbx9RBS5bugHYPNOsCq0GoAblhf1_78sssCX&c=7EKibOF-ZZHjknNbHOXuxA"
				width={35}
				src="https://imgshare.io/images/2019/07/16/ico-linkdn.png">
				</MjmlImage>
			</MjmlColumn>
			<MjmlColumn>
				<MjmlImage
				alt="Blog"
				href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV153B5d7aSU7PaGeq9AfsPqSsD-BGEeseZv23s8bTVJQ2&c=7EKibOF-ZZHjknNbHOXuxA"
				width={35}
				src="https://imgshare.io/images/2019/07/16/ico-blog.png">
				</MjmlImage>
			</MjmlColumn>
		</MjmlGroup>
	</MjmlSection>,
	<Mentions 
		color={props.color}
		color4={props.color4}
  />
]);