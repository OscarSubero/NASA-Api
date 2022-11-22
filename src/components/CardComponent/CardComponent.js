import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CardComponent = ({ date, title, copyright, img, explanation }) => (
	<Card style={{ width: 800, margin: 40 }}>
		<Image src={img} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{title}</Card.Header>
			<Card.Meta>
				<span className='date'>{date}</span>
			</Card.Meta>
			<Card.Meta>
				<span className='date'>{copyright}</span>
			</Card.Meta>
			<Card.Description>{explanation}</Card.Description>
		</Card.Content>
	</Card>
);

CardComponent.propTypes = {
	copyright: PropTypes.string,
	date: PropTypes.string,
	img: PropTypes.string,
	explanation: PropTypes.string,
	title: PropTypes.string,
};

export default CardComponent;
