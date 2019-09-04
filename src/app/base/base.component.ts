import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
	public current_user: any = false;

	constructor() {
		this.current_user = {
			id: 42,
			login: 'rmalyavc',
			first_name: 'Roman',
			last_name: 'Malyavchik'
		};
	}

	ngOnInit() {
	}

}
