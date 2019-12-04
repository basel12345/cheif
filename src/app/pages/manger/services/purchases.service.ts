import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class PurchasesService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'purchases/';

	addPurchase(model) {
		const url = this.apiUrl + 'addPurchase';
		return this.http.post<any>(url, model);
	}

	getAllPurchase() {
		const url = this.apiUrl + 'getAllPurchases';
		return this.http.get<any>(url);
	}

}