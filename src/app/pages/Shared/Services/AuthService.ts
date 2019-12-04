import { Injectable } from '@angular/core';
import { Storage } from './Storage';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	constructor(
		private storage: Storage,
		private router: Router
	) { }

	Logout() {
		this.storage.RemoveToken();
		this.storage.RemoveCurrentUser();
	}
}