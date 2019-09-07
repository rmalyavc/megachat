import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResult } from './Result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private _url: string = '';
	private base_url: string = 'http://localhost:3000';

	constructor(private http: HttpClient) {}

	login_user(form_data: object = {}) {
		// this._url = `/assets/users/${form_data['login']}.json`;
		this._url = `${this.base_url}/users/login`;
		console.log(this._url);
		return this.http.post<IResult>(this._url, form_data); // Replace with post and form_data
	}

	register_user(form_data: object = {}) {
		// this._url = `/assets/users/${form_data['login']}.json`;
		// console.log(this._url);
		this._url = `${this.base_url}/users/register`;
		return this.http.post<IResult>(this._url, form_data); // Replace with post and form_data
	}

	logout_user(current_user) {
		this._url = `${this.base_url}/users/logout`;
		return this.http.post<IResult>(this._url, current_user);
	}

	is_logged(current_user) {
		this._url = `${this.base_url}/users/check_login?token=${current_user.token}&user_id=${current_user.id}`;
		return this.http.get<IResult>(this._url);
	}
}
