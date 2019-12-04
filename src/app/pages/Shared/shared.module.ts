import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';
import { AuthInterceptor } from './Interceptors/AuthInterceptor';
import { AuthService } from './Services/AuthService';
import { Storage } from './Services/Storage';
import { AuthGuard } from './Guards/AuthGuard';
@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		NgbModule.forRoot(),
		RouterModule,
		HttpClientModule,
	],
	declarations: [
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		AuthGuard,
		Storage
	],
	exports: [

	],
	entryComponents: [],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [AuthService]
		};
	}
}