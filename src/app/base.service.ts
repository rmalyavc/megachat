import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
	protected _url: string;
	protected base_url: string;

	constructor(protected http: HttpClient) {
		this.base_url = 'http://localhost:3000';
	}
}
