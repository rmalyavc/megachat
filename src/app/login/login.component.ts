import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
	public form_data: any = {
		login: '',
		password: '',
		password_confirmation: '',
		email: ''
	};

	ngOnInit() {
	}

	log_in() {
		this.errors = [];
		if (this.form_data['login'] && this.form_data['password']) {
			console.log(this.form_data);
			this.user_service.login_user(this.form_data).subscribe(res => {
				// console.log(res);
				if (res.success === true) {
					this.store_user(res.data);
					this.redirect_to('/', true);
				}
				else {
					this.form_data = {
						login: '',
						password: '',
						password_confirmation: '',
						email: ''
					}
					this.success = false;
					// this.errors.push(res.error);
					this.handle_request_error(false, res.error);
				}
			}, error => {
				this.handle_request_error();
			});
		}
	}
}
