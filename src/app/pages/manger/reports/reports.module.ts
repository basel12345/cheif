import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../@theme/theme.module';
import { reportsComponent } from './reports.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

const routes: Routes = [
	{
		path: '',
		component: reportsComponent,
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
	declarations: [
		reportsComponent,
		InvoiceDetailsComponent
	],
	entryComponents: [
		InvoiceDetailsComponent
	],
	providers: []
})
export class ReportsModule { }
