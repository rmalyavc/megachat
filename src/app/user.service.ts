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
		this._url = `/assets/users/${form_data['login']}.json`;
		console.log(this._url);
		return this.http.get<IResult>(this._url); // Replace with post and form_data
	}
}
