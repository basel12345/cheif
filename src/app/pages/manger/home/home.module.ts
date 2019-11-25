import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddOrderListComponent } from './add-order/add-order-list/add-order-list.component';
import { CustomFormsModule } from 'ng2-validation';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'add-order',
		component: AddOrderComponent,
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
		AddOrderListComponent
	],
	entryComponents: [
		AddOrderListComponent
	],
	providers: []
})
export class HomeModule { }
