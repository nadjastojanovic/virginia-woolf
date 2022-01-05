import React from 'react';

const Card = ({ id, name, year, description }) => {
	return (
		<div style={{backgroundColor: '#A6AC79'}} className='tc br3 w-25 ma2 pa2 grow shadow-5'>
			<img style={{width: '200px'}} alt={`"${name}" Book Cover`} src={`../${id}.jpeg`} />
			<div>
				<h2 className='white f2'>{name}</h2>
				<h3 className='white'>{year}</h3>
				<p className='white f5'>{description}</p>
			</div>
		</div>
	);
}

export default Card;