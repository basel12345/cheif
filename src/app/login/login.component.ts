import { Component, OnInit } from '@angular/core';
import { LoginService } from './serivce/login.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./style/main.scss', './style/util.scss'],
})

export class LoginComponent implements OnInit {
	authUserData = {
		email: null,
		password: null
	};
	constructor(
		private service: LoginService 
	) {
	}

	ngOnInit() {
	}

	login(frm) {
		this.service.Login(this.authUserData).subscribe(res => {
			console.log(res)
		})
	}
}
