import { Injectable } from '@angular/core';


enum StorageEnum {
	Token = 'Token',
	CurrentUser = 'CurrentUser'
}

@Injectable()
export class Storage {

	private setSessionStorage(key, obj) {
		sessionStorage.setItem(key, JSON.stringify(obj));
	}

	private getSessionStorage(key) {
		return JSON.parse(sessionStorage.getItem(key));
	}

	private removeSessionStorage(key) {
		sessionStorage.removeItem(key);
	}

	private setLocalStorage(key, obj) {
		localStorage.setItem(key, JSON.stringify(obj));
	}

	private getLocalStorage(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	private removeLocalStorage(key) {
		localStorage.removeItem(key);
	}

	// SetToken(token: any) {
	// 	// this.setSessionStorage(StorageEnum.Token, token);
	// 	return localStorage.setItem(StorageEnum.Token, token);
	
	// }

	GetToken(): any {
		return localStorage.getItem(StorageEnum.Token);
	}

	RemoveToken(): any {
		return this.removeSessionStorage(StorageEnum.Token);
	}

	SetCurrentUser(currentUser: any) {
		this.setSessionStorage(StorageEnum.CurrentUser, currentUser);
	}

	GetCurrentUser(){
		return this.getSessionStorage(StorageEnum.CurrentUser);
	}

	RemoveCurrentUser(): any {
		return this.removeSessionStorage(StorageEnum.CurrentUser);
	}
}