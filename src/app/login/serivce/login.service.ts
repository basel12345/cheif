import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../Configuration';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'auth/';
	
	Login(model) {
		const url = this.apiUrl + 'login';
		return this.http.post<any>(url, model);
	}

}