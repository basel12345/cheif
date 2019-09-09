import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ReportPurchasesComponent } from './report-purchases.component';

const routes: Routes = [
	{
		path: '',
		component: ReportPurchasesComponent,
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
	declarations: [ReportPurchasesComponent],
	entryComponents: [],
	providers: []
})
export class ReportPurchasessModule { }
