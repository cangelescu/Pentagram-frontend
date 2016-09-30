var React = require ('react');
var Router = require('react-router');
var Link = Router.Link;
var AjaxSupport = require('../common/ajax');

var LoginPage = React.createClass({
	
	isValidInputValue: function(inputValue){
			if (!inputValue || inputValue.trim().length === 0){
				return false;
			}
		return true;
	}
	
	,usernameChangeHandler : function(event){
		var usernameValue = event.target.value;
			if (!this.isValidInputValue(usernameValue)){
				usernameValue = null;
			}
		this.setState({username:usernameValue});
	}
		
	,passwordChangeHandler : function(event){
		var passwordValue = event.target.value;
			if (!this.isValidInputValue(passwordValue)){
				passwordValue = null;
			}
		this.setState({password:passwordValue});
	}
	
	,formSubmitHandler: function(event){
		event.preventDefault();
		console.log(this.state);
			
		if(this.isValidStateForSubmit()){
			debugger;
			AjaxSupport.post({
				url:'/login'
				, contentType: 'application/json'
				, data:JSON.stringify({
					username:this.state.username
					, password:this.state.password
				})
				, succes: function(){
					console.log("request succes");
				}
				, error :function(){
					console.log("my request failed");
				}
			});
			
				
			console.log("Form ready for submit");
		}
		else {
			console.log("there bla bla");
		}
	}
	,isValidStateForSubmit: function(){
		return this.state.username && this.state.password;
	}
	
	,render: function(){
		return( 
			<div className="login-page">
				<form className="login">
					<h1>Welcome Back!</h1>
					<input type="text" name="username" placeholder="Username" onChange={this.usernameChangeHandler} 		autofocus />
			        <input type="password" name="password" placeholder="Password" onChange={this.passwordChangeHandler} />
			        <button type="submit" onClick={this.formSubmitHandler}>
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
