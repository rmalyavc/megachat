import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

declare var require: any

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
	public logo_icon = '/assets/logo.png';
	public login_icon = '/assets/login.png';
	public logout_icon = '/assets/logout.png';

	ngOnInit() {
		console.log('This is header');
		console.log(this.current_user);
	}
}
