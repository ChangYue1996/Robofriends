import React from 'react'
const Card = ({id, name, email})=>{
	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow pointer bw5 shadow-5'>
		<img src= {`https://robohash.org/test/${id}`} alt="Robos" height="200" width="200" />
		<h2> { name }</h2>
		<p> { email }</p>
		</div>
	);
}

export default Card;