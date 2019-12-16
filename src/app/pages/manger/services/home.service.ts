import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'table/';
	
	getAllTable() {
		const url = this.apiUrl + 'getAllTable';
		return this.http.get<any>(url);
	}

	getOneTable(id) {
		const url = this.apiUrl + `getOneTable/${id}`;
		return this.http.get<any>(url);
	}

	updateTable(id,status) {
		const url = this.apiUrl + `updateStatusTable/${id}`;
		return this.http.put<any>(url,status);
	}

}