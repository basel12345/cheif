import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddOrderListComponent } from './add-order/add-order-list/add-order-list.component';
import { CustomFormsModule } from 'ng2-validation';
import { getAllTableResolver } from "../resolvers/getAllTable.resolver";
import { AddDrinksListComponent } from './add-order/add-drinks-list/add-drinks-list.component';
import { AddServicesListComponent } from './add-order/add-services-list/add-services-list.component';
import { getAllFoodsResolver } from '../resolvers/getAllFoods.resolver';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		resolve: {
			getAllTable: getAllTableResolver
		}
	},
	{
		path: 'add-order/:id',
		component: AddOrderComponent
	}
];
export const Routing = RouterModule.forChild(routes);
@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		RouterModule,
		ThemeModule,
		Routing,
		CustomFormsModule
	],
	declarations: [
		HomeComponent,
		AddOrderComponent,
		AddOrderListComponent,
		AddDrinksListComponent,
		AddServicesListComponent
	],
	entryComponents: [
		AddOrderListComponent,
		AddDrinksListComponent,
		AddServicesListComponent
	],
	providers: [
		getAllTableResolver
	]
})
export class HomeModule { }
