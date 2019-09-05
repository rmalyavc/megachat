import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

declare var require: any

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
	public logo = '/assets/logo.png';
	public login = '/assets/login.png';
	public logout = '/assets/logout.png';

	ngOnInit() {
		console.log(this.current_user);
	}
}
