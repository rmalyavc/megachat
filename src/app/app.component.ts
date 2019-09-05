import { LOCAL_STORAGE , WINDOW} from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'megachat';
// }
export class AppComponent implements OnInit {
    constructor(@Inject(LOCAL_STORAGE) public localStorage: any) {
    	localStorage = localStorage;
    }

    ngOnInit() {
    }
}