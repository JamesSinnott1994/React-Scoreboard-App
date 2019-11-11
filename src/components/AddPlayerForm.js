import React, { Component } from 'react';

class AddPlayerForm extends Component {

	playerInput = React.createRef();

	handleSubmit = (e) => {
		const { addPlayer } = this.props;
		e.preventDefault();
		addPlayer(this.playerInput.current.value);
		e.currentTarget.reset();
	}

	render() {
		console.log(this.playerInput);

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					ref={this.playerInput}
					placeholder="Enter a player's name"
				/>

				<input
					type="submit"
					value="Add Player"
				/>
			</form>
		);
	}
}

export default AddPlayerForm;

// *******************************************88

// OLD WAY BELOW, BEFORE REFS CHAPTER

// import React, { Component } from 'react';

// class AddPlayerForm extends Component {

// 	state = {
// 		value: ''
// 	};

// 	handleValueChange = (e) => {
// 		this.setState({ value: e.target.value });
// 	}

// 	handleSubmit = (e) => {
// 		const { addPlayer } = this.props;
// 		e.preventDefault();
// 		addPlayer(this.state.value);
// 		this.setState({ value: '' });
// 	}

// 	render() {
// 		console.log(this.state.value);

// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<input
// 					type="text"
// 					value={this.state.value}
// 					onChange={this.handleValueChange}
// 					placeholder="Enter a player's name"
// 				/>

// 				<input
// 					type="submit"
// 					value="Add Player"
// 				/>
// 			</form>
// 		);
// 	}
// }

// export default AddPlayerForm;