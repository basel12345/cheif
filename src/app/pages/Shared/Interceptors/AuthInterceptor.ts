import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../Services/AuthService';
import { Storage } from '../Services/Storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(
		private router: Router,
		private authService: AuthService,
		private storage: Storage,
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let modifiedReq;

		let token = this.storage.GetToken();
		if (token) {
			let reqOptions = { headers: req.headers.set("Authorization", `${token}`) }
			modifiedReq = req.clone(reqOptions);
		} else {
			modifiedReq = req.clone();
		}

		return next.handle(modifiedReq)
			.do(evt => {
				if (evt instanceof HttpResponse) {
					if (evt['body']['Message'] === 'UNAUTHORIZED_ACCESS') {
						this.authService.Logout();
						this.router.navigateByUrl('login');
					}

				}
			})
			.catch((error, caught) => {
				this.authService.Logout();
				this.router.navigateByUrl('login');
				return Observable.throw(error);
			}) as any;
	}
}