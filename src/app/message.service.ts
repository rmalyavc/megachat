import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IResult } from './Result';

@Injectable({
	providedIn: 'root'
})
export class MessageService extends BaseService {
	get_rooms(current_user) {
		this._url = `${this.base_url}/rooms?user_id=${current_user.id}&token=${current_user.token}`;
		return this.http.get<IResult>(this._url);
	}

	get_messages(current_user, room_id) {
		this._url = `${this.base_url}/rooms/${room_id}?user_id=${current_user.id}&token=${current_user.token}`;
		return this.http.get<IResult>(this._url);
	}

	post_message(form_data) {
		this._url = `${this.base_url}/messages/create`;
		return this.http.post<IResult>(this._url, form_data);
	}
}
