import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { MangerComponent } from './manger.component';

const routes: Routes = [
	{
		path: '',
		component: MangerComponent,
		children: [
			{
				path: 'add-food',
				loadChildren: './add-products/add-food/add-food.module#AddFoodModule'
			},	
			{
				path: 'add-services',
				loadChildren: './add-products/add-services/add-services.module#AddServicesModule'
			},	
			{
				path: 'add-drinks',
				loadChildren: './add-products/add-drinks/add-drinks.module#AddDrinksModule'
			},	
			{
				path: 'drinks',
				loadChildren: './reports-products/drinks/drinks.module#DrinksModule'
			},	
			{
				path: 'foods',
				loadChildren: './reports-products/foods/foods.module#FoodsModule'
			},	
			{
				path: 'services',
				loadChildren: './reports-products/services/services.module#ServicesModule'
			},	
			{
				path: 'add-purchases',
				loadChildren: './purchases/add-purchases/add-purchases.module#AddPurchasessModule'
			},	
			{
				path: 'report-purchases',
				loadChildren: './purchases/report-purchases/report-purchases.module#ReportPurchasessModule'
			},	
			{
				path: 'home',
				loadChildren: './home/home.module#HomeModule'
			},	
			{
				path: 'reports',
				loadChildren: './reports/reports.module#ReportsModule'
			}	
		]
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
	declarations: [MangerComponent],
	entryComponents: [],
	providers: []
})
export class MangerModule { }
