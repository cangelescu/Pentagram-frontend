var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginPage = React.createClass({
	render: function(){
		return(
			<div id="login">   
				<h1>Welcome Back!</h1>
				<h1>Log In</h1>
				
				<div class="field-wrap">
					<label>
						Email Address<span class="req">*</span>
					</label>
					<input type="email"required autocomplete="off"/>
				</div>
          
				<div class="field-wrap">
					<label>
						Password<span class="req">*</span>
					</label>
					<input type="password"required autocomplete="off"/>
				</div>
          
				<p class="forgot">
					<a href="#">
						Forgot Password?
					</a>
				</p>
							
				<div>
					<Link to="register">Create account</Link>
				</div>
          
				<button class="submit">Log In</button>
			</div>
		);
	}
});

module.exports = LoginPage;