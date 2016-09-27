var React = require('react');

var RegisterPage = React.createClass({
	render: function(){
		return(	
			<div id="signup">   
				<h1>Sign Up for Free</h1>
				<h1>Create Account</h1>
				
				<div class="field-wrap">
					<label>
						First Name<span class="req">*</span>
					</label>
					<input type="text" required autocomplete="off" />
				</div>
        
				<div class="field-wrap">
					<label>
						Last Name<span class="req">*</span>
					</label>
					<input type="text"required autocomplete="off"/>
				</div>
				

				<div class="field-wrap">
					<label>
						Email Address<span class="req">*</span>
					</label>
					<input type="email"required autocomplete="off"/>
				</div>
          
				<div class="field-wrap">
					<label>
						Set A Password<span class="req">*</span>
					</label>
					<input type="password"required autocomplete="off"/>
				</div>
          
				<button type="submit" class="button button-block">Get Started</button>	
			</div>
		);
	}
});

module.exports = RegisterPage;