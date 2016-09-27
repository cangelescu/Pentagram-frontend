var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var RegisterPage = React.createClass({
	render: function(){
		return(
			<div className="login-page">
				<form className="login">
					<h1>Sign Up for Free</h1>
					<input type="text" placeholder="First Name" autofocus />
			        <input type="text" placeholder="Last Name" />
					<input type="text" placeholder="Username" />					
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
			        <button type="submit">
			            <span className="state">Create</span>
			        </button>
					<div className="message">
						Already registered? <Link to="login">Sign In</Link>
					</div>
				</form>
		    </div>
		);
	}
});

module.exports = RegisterPage;