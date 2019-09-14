import { Inject, Injectable, Optional } from '@angular/core';
import { Response } from 'express';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Injectable({
  providedIn: 'root'
})
export class ServerResponseService {
	public response: Response;

	constructor(@Optional() @Inject(RESPONSE) response: any) {
		this.response = response;
	}

	setStatus(code: number, message?: string): this {
	    if (this.response) {
	    	this.response.statusCode = code;
	    	if (message)
	        	this.response.statusMessage = message;
	    }
	    return this;
	}
}
