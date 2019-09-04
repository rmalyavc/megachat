import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

declare var require: any

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
	public logo = require('./assets/logo.png');
	public login = require('./assets/login.png');
	public logout = require('./assets/logout.png');

	ngOnInit() {
	
	}
}
