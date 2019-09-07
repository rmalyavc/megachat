function is_email(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

module.exports = {
	valid_register_data: function(data) {
		return (data['login'] && data['password'] && data['password'].length >= 8 &&
				data['password_confirmation'] && data['password'] === data['password_confirmation'] &&
				data['email'] && is_email(data['email']));
	}
}