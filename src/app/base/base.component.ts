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
	public success: boolean = true;
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
		if (need_alert)
			alert(message);
		else
			this.errors.push(message);
		this.show_loader = false;
	}

	protected store_user(user) {
		localStorage.setItem('current_user', JSON.stringify(user));
	}
}
