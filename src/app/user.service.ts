import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResult } from './Result';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
	login_user(form_data: object = {}) {
		this._url = `${this.base_url}/users/session/create`;
		return this.http.post<IResult>(this._url, form_data);
	}

	register_user(form_data: object = {}) {
		this._url = `${this.base_url}/users/create`;
		return this.http.post<IResult>(this._url, form_data);
	}

	logout_user(current_user) {
		this._url = `${this.base_url}/users/session/destroy`;
		return this.http.post<IResult>(this._url, current_user);
	}

	is_logged(current_user) {
		this._url = `${this.base_url}/users/session/validate?token=${current_user.token}&user_id=${current_user.id}`;
		return this.http.get<IResult>(this._url);
	}
}
