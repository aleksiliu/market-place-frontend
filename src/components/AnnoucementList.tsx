import React from 'react';
import styled from 'styled-components';
import { Annoucement } from '../types';

const AnnoucementCard = styled.div`
	border-radius: 3px;
	border: 1px solid #eee;
	padding: 16px;
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
