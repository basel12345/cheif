import { Component, OnInit } from '@angular/core';
import { LoginService } from './serivce/login.service';
import { Router } from '@angular/router';

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
		private service: LoginService,
		private router: Router
	) {
	}

	ngOnInit() {
	}

	login(frm) {
		this.service.Login(this.authUserData).subscribe(res => {
			if(frm.valid) {
				console.log(res)
				localStorage.setItem('Token', res.token);
				this.router.navigate(['pages/manger/home']);
			}
		})
	}
}
