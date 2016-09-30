var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AjaxSupport = require('../common/ajax');

var RegisterPage = React.createClass({
	
	getInitialState: function(){
		return {
			firstName:null,
			lastName:null,
			username:null,
			email:null,
			password:null,
			rpassword:null
		}
	}
		,isValidInputValue: function(inputValue){
			if (!inputValue || inputValue.trim().length === 0){
				return false;
			}
			return true;
		}
		
		,firstNameChangeHandler : function(event){
			var firstNameValue = event.target.value;
			if (!this.isValidInputValue(firstNameValue)){
				firstNameValue = null;
			}
			this.setState({firstName:firstNameValue});
		}
		
		,lastNameChangeHandler : function(event){
			var lastNameValue = event.target.value;
			if (!this.isValidInputValue(lastNameValue)){
				lastNameValue = null;
			}
			this.setState({lastName:lastNameValue});
		}
		
		,userNameChangeHandler : function(event){
			var userNameValue = event.target.value;
			if (!this.isValidInputValue(userNameValue)){
				userNameValue = null;
			}
			this.setState({username:userNameValue});
		}
		
		,emailChangeHandler : function(event){
			var emailValue = event.target.value;
			if (!this.isValidInputValue(emailValue)){
				emailValue = null;
			}
			this.setState({email:emailValue});
		}
		
		,passwordChangeHandler : function(event){
			var passwordValue = event.target.value;
			if (!this.isValidInputValue(passwordValue)){
				passwordValue = null;
			}
			this.setState({password:passwordValue});
		}
		
		,password2ChangeHandler : function(event){
			var password2Value = event.target.value;
			if (!this.isValidInputValue(password2Value)){
				password2Value = null;
			}
			this.setState({rpassword:password2Value});
		}
		
		,formSubmitHandler: function(event){
			event.preventDefault();
			console.log(this.state);
			
			if(this.isValidStateForSubmit()){
				AjaxSupport.post({
				url:'/users'
				, contentType: 'application/json'
				,data:JSON.stringify({
					username:this.state.username
					, password:this.state.password
					, email: this.state.email
				})
				,success:function(){
					console.log('request success');
				},
				error:function(data){
					console.log('my request failed');
				}
				});
			}
		}
		
		,isValidStateForSubmit: function(){
			return this.state.firstName && this.state.lastName && this.state.email && this.state.username &&
				this.state.password && this.state.rpassword && (this.state.password === this.state.rpassword);
		}
	,render: function(){
		return(
			<div className="login-page">
				<form className="login">
					<h1>Sign Up for Free</h1>
					<input type="text" name="firstName" placeholder="First Name" onChange={this.firstNameChangeHandler} 	autofocus />
			        <input type="text" name="lastName" placeholder="Last Name" onChange={this.lastNameChangeHandler} />
					<input type="text" name="username" placeholder="Username" onChange={this.userNameChangeHandler} />		
					<input type="email" name="email" placeholder="Email" onChange={this.emailChangeHandler} />
					<input type="password" name="password" placeholder="Password" 
						onChange={this.passwordChangeHandler} />
					<input type="password" name="rpassword" placeholder="Re-Password"  
						onChange={this.password2ChangeHandler} />
					
			        <button type="submit" onClick={this.formSubmitHandler}>
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