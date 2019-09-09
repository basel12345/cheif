import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { AddPurchasesComponent } from './add-purchases.component';

const routes: Routes = [
	{
		path: '',
		component: AddPurchasesComponent,
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
	declarations: [AddPurchasesComponent],
	entryComponents: [],
	providers: []
})
export class AddPurchasessModule { }
