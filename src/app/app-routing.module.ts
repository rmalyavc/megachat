import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MetaModule } from '@ngx-meta/core';
import { MetaGuard } from '@ngx-meta/core';

export const routes: Routes = [
	{
	    path: 'login/',
	    redirectTo: 'login'
	},
	{
	    path: '',
	    canActivateChild: [MetaGuard],
	    children: [
		    {
		        path: '',
		        component: HomeComponent,
		        data: {
					meta: {
						override: true,
						title: 'Megachat - Sweet home',
						description: 'Megachat Home Page',
						'og:url': 'http://localhost:4000'
					},
		        }
		    },
		    {
		    	path: 'login',
		    	component: LoginComponent,
		    	data: {
		        	meta: {
		        		override: true,
		        		title: 'Login',
		        		description: 'Login to Megachat',
		        		'og:url': 'http://localhost:4000/login'
		        	}
		    	}
		    },
		    {
		        path: 'register',
		        component: RegisterComponent,
		        data: {
		        	meta: {
			            override: true,
			            title: 'Register',
			            description: 'Register on Megachat',
			            'og:url': 'http://localhost:4000/login'
		        	}
		        }
		    },
		    {
		        path: 'chat/:room_id',
		        component: ChatComponent,
		        data: {
		        	meta: {
			            override: true,
			            title: 'Room',
			            description: 'Have a good chating',
			            'og:url': 'http://localhost:4000/chat'
		        	}
		        }
		    },
		    {
		        path: 'chat',
		        component: ChatComponent,
		        data: {
		        	meta: {
			            override: true,
		            	title: 'Chat',
			            description: 'Choose a person to chat with',
			            'og:url': 'http://localhost:4000/chat'
		        	}
		        }
		    },
		    {
		        path: '**',
		        component: NotFoundComponent,
		        data: {
		        	meta: {
			            override: true,
		            	title: 'Not Found',
			            description: 'Page is not found'
		        	}
		        }
		    }
    	]
	}
]
@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
  	MetaModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
