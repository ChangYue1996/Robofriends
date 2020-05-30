import React, {Component} from 'react';

class ErroBoundry extends Component{
	constructor(props){
		super(props);
		this.props = props
		this.state = {
			hasErro:false
		}
	}
	componentDidCatch(){
		this.setState({hasErro:true});
	}
	render(){
		if (this.state.hasErro){
			return (<h1> Ooops, something erro</h1>);
		}else{
			return this.props.children;
		}
	}
}

export default ErroBoundry;