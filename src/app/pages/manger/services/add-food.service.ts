import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class AddFoodService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'food/';
	
	addFoods(model) {
		const url = this.apiUrl + 'addFood';
		return this.http.post<any>(url, model);
	}

}