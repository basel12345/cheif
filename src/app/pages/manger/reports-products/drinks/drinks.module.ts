import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { DrinksComponent } from './drinks.component';
import { getAllDrinksResolver } from "../../resolvers/getAllDrinks.resolver";
const routes: Routes = [
	{
		path: '',
		component: DrinksComponent,
		resolve: {
			getAllDrinks: getAllDrinksResolver
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
	declarations: [DrinksComponent],
	entryComponents: [],
	providers: [
		getAllDrinksResolver
	]
})
export class DrinksModule { }
