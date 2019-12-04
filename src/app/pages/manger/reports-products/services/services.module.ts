import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ServicesComponent } from './services.component';
import { getAllServicesResolver } from "../../resolvers/getAllServices.resolver";

const routes: Routes = [
	{
		path: '',
		component: ServicesComponent,
		resolve: {
			getAllServices: getAllServicesResolver
		}
	}
];
export const Routing = RouterModule.forChild(routes);
@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		RouterModule,
		ThemeModule,
		Routing],
	declarations: [ServicesComponent],
	entryComponents: [],
	providers: [
		getAllServicesResolver
	]
})
export class ServicesModule { }
