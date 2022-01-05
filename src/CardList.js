import React from 'react';
import Card from './Card';

const CardList = ({ works }) => {
	return (
		<div className="flex flex-wrap justify-center">
	    	{
	    		works.map((user, i) => {
					return (
						<Card
							key={i}
							id={works[i].id}
							name={works[i].name}
							year={works[i].year}
							description={works[i].description}
						/>
					);
				})
	    	}
	    </div>
	);
}

export default CardList;