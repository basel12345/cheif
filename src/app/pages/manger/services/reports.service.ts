import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class ReportsService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'order/';

	getAllOrder() {
		const url = this.apiUrl + 'getAllOrder';
		return this.http.get<any>(url);
	}
	
	getOneOrder(id) {
		const url = this.apiUrl + `getOneOrder/${id}`;
		return this.http.get<any>(url);
	}

	getAllReport() {
		const url = this.apiUrl + 'getAllReport';
		return this.http.get<any>(url);
	}
}