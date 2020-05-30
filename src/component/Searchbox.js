import React from 'react';

const Searchbox = ({change})=>{
	return (
		<div>
			<input 
			type='search' 
			placeholder='Searchbyname' 
			className='pa3 ma3 bg-lightest-blue b--green'
			onChange={change}
			/> 
		</div>
		)
}
export default Searchbox;