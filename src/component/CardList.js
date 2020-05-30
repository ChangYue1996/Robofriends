import React from 'react';
import Card from './Cards';

const Cardlist = ({ robots }) => {
	const cardArr = robots.map((robo,i)=>{
		return (<Card 
		key={robo.id}
		id={robo.id} 
		name={robo.name} 
		email={robo.email} />);
	})
	return (
	<div>
	{cardArr}
	</div>);
}

export default Cardlist;