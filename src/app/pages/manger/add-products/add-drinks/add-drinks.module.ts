import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { AddDrinksComponent } from './add-drinks.component';

const routes: Routes = [
	{
		path: '',
		component: AddDrinksComponent,
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
	declarations: [AddDrinksComponent],
	entryComponents: [],
	providers: []
})
export class AddDrinksModule { }
