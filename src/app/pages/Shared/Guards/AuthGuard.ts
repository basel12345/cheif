import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Storage } from '../Services/Storage';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private storage: Storage
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


		// we may need to protect Users Route for Authorization
		let currentUser = this.storage.GetCurrentUser();

		// we may need to protect Users Route for Authentication
		let token = this.storage.GetToken();
		if (token) {
			return true;
		}

		this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
		return false;

	}
}