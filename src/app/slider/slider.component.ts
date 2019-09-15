import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate} from '@angular/animations';
import { BaseComponent } from '../base/base.component';

@Component({
	selector: '.app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
	animations: [
		trigger('animate_slider', [
			transition(':enter', [
				style({transform: 'translateX(100%)'}),
				animate('0.2s ease-out', style({transform: 'translateX(0%)'}))
			]),
			transition(':leave', [
				style({transform: 'translateX(0%)'}),
				animate('0.2s ease-out', style({transform: 'translateX(-100%)'}))
			])
		])
	]
})
export class SliderComponent extends BaseComponent implements OnInit {
	public banners: Array<any> = [
		{
			img: '/assets/banners/banner1.png',
			heading: 'Welcome to the best chat application'
		},
		{
			img: '/assets/banners/banner2.png',
			heading: 'Best bots in the world'
		},
		{
			img: '/assets/banners/banner3.png',
			heading: 'Try our super special spam bot'
		}
	];
	public current_slide: number = 0;
	public visible: boolean = false;


	ngOnInit() {
		this.change_slide();
	}

	change_slide(nb: number = 0) {
		this.visible = false;
		this.current_slide += nb;
		
		if (this.current_slide > this.banners.length - 1)
			this.current_slide = 0;
		else if (this.current_slide < 0)
			this.current_slide = this.banners.length - 1;
		if (this.is_browser) {
			setTimeout(() => {
				this.visible = true;
			}, 200);
			setTimeout(() => {
				this.change_slide(1);
			}, 4000);
		}
	}
}
