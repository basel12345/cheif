import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
	HostUrl: string;

	constructor() {
		this.HostUrl = 'http://localhost:3000/';
	}
}