import { LOCAL_STORAGE , WINDOW} from '@ng-toolkit/universal';
import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
	public current_user: any = true;
	public show_loader: boolean = false;
	public success: boolean = false;
	public errors: string[] = [];
	protected is_browser: boolean = true;

	constructor(
		@Inject(PLATFORM_ID) platform_id: string,
		protected user_service: UserService,
		protected router: Router
	) {
		this.is_browser = isPlatformBrowser(platform_id);
		console.log(this.is_browser);
		this.current_user = this.is_browser ? JSON.parse(localStorage.getItem('current_user') || 'false') : false;
	}

	ngOnInit() {
	}

	protected redirect_to(path: string = '/', reload: boolean = false) {
		if (reload && this.is_browser)
			window.location.href = path;
		else
			this.router.navigate([path]);
	}

	protected handle_request_error(need_alert: boolean = false, message: string = 'Unable proceed your request. Please contact system administrator.') {
		this.success = false;
		this.errors = [];
		if (need_alert)
			alert(message);
		else
			this.errors.push(message);
		this.show_loader = false;
	}

	protected store_user(user) {
		if (this.is_browser)
			localStorage.setItem('current_user', JSON.stringify(user));
	}

	protected unstore_user() {
		if (this.is_browser)
			localStorage.removeItem('current_user');
	}

	protected logout() {
		if (this.current_user) {
			this.user_service.logout_user(this.current_user).subscribe(res => {
				if (res.success) {
					this.unstore_user();
					this.redirect_to('/login', true);
				}
				else
					this.handle_request_error(true, res.error);
			}, err => {
				this.handle_request_error(true);
			});
		}
		else
			this.redirect_to('/login');
	}

	protected check_login() {
		this.user_service.is_logged(this.current_user).subscribe(res => {
			if (!res.success)
				this.handle_request_error(true);
			else if (!res.data.is_logged) {
				this.logout();
			}
		}, err => {
			this.handle_request_error(true);
		});
	}
}
