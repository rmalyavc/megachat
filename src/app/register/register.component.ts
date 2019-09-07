import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends LoginComponent implements OnInit {
	public form_data: any = {
		login: '',
		password: '',
		password_confirmation: '',
		email: ''
	};
  // constructor() { }

	ngOnInit() {
		console.log(this.form_data);
	}


	register() {
		this.user_service.register_user(this.form_data).subscribe(res => {
			if (res.success) {
				this.log_in();
			}
			else {
				this.handle_request_error(false, res.error);
			}
			// this.ngOnInit(data);
		}, error => {
			this.handle_request_error();
		});
	}
}
