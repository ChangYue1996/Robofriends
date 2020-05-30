import React from 'react'
const Scroll = (property)=>{
	console.log(property);
	return (
		<div style={{overflowY: "scroll", border:' 5px solid black', height:'800px'}}>
			{property.children}
		</div>
		)
}

export default Scroll