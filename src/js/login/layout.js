var React = require ('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginPage = React.createClass({
	render: function(){
		return( 
			<div className="login-page">
				<form className="login">
					<h1>Welcome Back!</h1>
					<input type="text" placeholder="Username" autofocus />
			        <input type="password" placeholder="Password" />
			        <button type="submit">
			            <span className="state">Login</span>
			        </button>
					<div className="message">
						Not registered? <Link to="register">Create account</Link>
					</div>
				</form>
		    </div>
		);
	}
});

module.exports = LoginPage;
