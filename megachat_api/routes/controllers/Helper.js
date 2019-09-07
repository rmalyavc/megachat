module.exports = {
	send_error: function (res, err = 'DB Error') {
		res.send({
			success: false,
			error: err
		});
	},
	send_success: function (res, data = {}) {
		res.send({
			success: true,
			data: data
		});
	}
}