import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../Configuration';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	constructor(
		private http: HttpClient,
		private configuration: Configuration
	) { }

	hostUrl: string = this.configuration.HostUrl;
	apiUrl: string = this.hostUrl + 'order/';
	
	addOrders(order,discoount,required,residual,billNumber,name,pay,totalPrice,id) {
		const url = this.apiUrl + `addOrders/${id}`;
		const model = {
			order,
			discoount,
			required,
			residual,
			billNumber,
			name,
			pay,
			totalPrice
		}
		return this.http.post<any>(url,model);
	}

	deleteOrder(tableId,id) {
		const url = this.apiUrl + `deleteOrder/${tableId}/${id}`;
		return this.http.delete<any>(url);
	}
}