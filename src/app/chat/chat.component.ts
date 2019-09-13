import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
// import { Socket } from 'ngx-socket-io';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent extends BaseComponent implements OnInit {
	public rooms: Array<any> = [];
	public messages: object[] = [];
	public form_data: any = {
		user_id: '',
		room_id: '',
		token: '',
		message: ''
	};
	public current_room: any = {};

	constructor(
		@Inject(PLATFORM_ID) platform_id: string,
		protected user_service: UserService,
		protected router: Router,
		protected route: ActivatedRoute,
		protected message_service: MessageService,
		// protected socket: Socket,
		protected meta: Meta
	) {
		super(platform_id, user_service, router, route, /*socket,*/ meta);
		if (this.socket) {
			this.socket.fromEvent('chat_message').subscribe(message => {
	        	console.log(message);
	        	if (message['room_id'] == this.current_room['room_id']) {
	        		this.messages.push(message);
	        		this.get_rooms();
	        		this.get_messages();
	        	}
	        	else {
	        		for (let i = 0; i < this.rooms.length; i++) {
	        			if (this.rooms[i]['room_id'] == message['room_id']) {
	        				this.rooms[i]['unread_messages']++;
	        				break ;
	        			}
	        		}
	        	}
	        });
		}
	}

	ngOnInit() {
		this.check_login();
		this.form_data['token'] = this.current_user.token;
		this.form_data['user_id'] = this.current_user.id;
		this.route.params.subscribe(params => {
			this.form_data['room_id'] = params['room_id'] || '';
			this.get_rooms();
			if (this.form_data['room_id']) {
				this.get_messages();
			}
		});
	}

	get_rooms() {
		this.message_service.get_rooms(this.current_user).subscribe(res => {
			if (res.success) {
				this.rooms = res.data;
			}
			else {
				if (res.error == '401')
					this.check_login();
				else
					this.handle_request_error(false, res.error);
			}
		}, err => {
			this.handle_request_error();
		});
	}

	get_messages() {
		this.message_service.get_messages(this.current_user, this.form_data['room_id']).subscribe(res => {
			if (res.success) {
				if (this.form_data['room_id'] != res.data.room_id) {
					this.form_data['room_id'] = res.data.room_id;
					this.redirect_to(`/chat/${this.form_data['room_id']}`);
				}
				this.current_room = this.rooms.find((value, index, array) => {
					if (value['room_id'] == this.form_data['room_id']) {
						this.rooms[index]['unread_messages'] = 0;
						return true;
					}
					else
						return false;
				});
				console.log(this.current_room);
				this.messages = res.data.messages;
			}
			else {
				if (res.error == '401')
					this.check_login();
				else
					this.handle_request_error(false, res.error);
			}
		}, err => {
			this.handle_request_error();
		});
	}

	send_message() {
		if (!this.form_data['message']) {
			return ;
		}
		this.message_service.post_message(this.form_data).subscribe(res => {
			if (res.success) {
				if (this.socket)
					this.socket.emit('send_message', res.data);
				this.form_data['message'] = '';
				// this.get_messages();
			}
			else {
				this.handle_request_error(true, res.error);
			}
		}, err => {
			this.handle_request_error();
		});
	}
}
