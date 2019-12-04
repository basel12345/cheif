import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class AddDrinksService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'drinks/';
	
	addDrinks(model) {
		const url = this.apiUrl + 'addDrinks';
		return this.http.post<any>(url, model);
	}

}