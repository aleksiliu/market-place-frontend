import React from 'react';
import styled from 'styled-components';
import { Annoucement } from '../types';
import { space } from '../styles';

const AnnoucementCard = styled.div`
	border-radius: 3px;
	background-color: #fff;

	padding: ${space.l}px;
	display: inline-block;
`;

type AnnoucementProps = {
	annoucements: Annoucement[];
};

const AnnoucementList: React.FC<AnnoucementProps> = ({ annoucements }) => (
	<div>
		{annoucements.map(annoucement => (
			<AnnoucementCard key={annoucement.headline}>
				<h2>{annoucement.headline}</h2>
				<p>{annoucement.description}</p>
				<span>{annoucement.price}€</span>
			</AnnoucementCard>
		))}
	</div>
);

export default AnnoucementList;
