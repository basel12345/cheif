import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { DrinksComponent } from './drinks.component';

const routes: Routes = [
	{
		path: '',
		component: DrinksComponent,
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
	declarations: [DrinksComponent],
	entryComponents: [],
	providers: []
})
export class DrinksModule { }
