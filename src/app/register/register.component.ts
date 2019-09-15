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
		email: '',
		first_name: '',
		last_name: ''
	};
	
	ngOnInit() {
	}


	register() {
		this.user_service.register_user(this.form_data).subscribe(res => {
			if (res.success) {
				this.log_in();
			}
			else {
				this.handle_request_error(false, res.error);
			}
		}, error => {
			this.handle_request_error();
		});
	}
}
