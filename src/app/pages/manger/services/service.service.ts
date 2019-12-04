import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class ServiceService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'services/';
	
	getAllServices() {
		const url = this.apiUrl + 'getAllServices';
		return this.http.get<any>(url);
	}

}