import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Meta } from '@angular/platform-browser';

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

	constructor (
		@Inject(PLATFORM_ID) platform_id: string,
		protected user_service: UserService,
		protected router: Router,
		protected route: ActivatedRoute,
		protected meta: Meta
	) {
		super(platform_id, user_service, router, route);
		this.meta.addTags([
			{name: 'title', content: 'Megachat'},
			{name: 'description', content: 'Welcome o our best chat service =)'},
			{name: 'keywords', content: 'Angular, Meta Service'}
		]);
	}

	ngOnInit() {
	}
}
