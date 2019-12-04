import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FoodsComponent } from './foods.component';
import { getAllFoodsResolver } from "../../resolvers/getAllFoods.resolver";

const routes: Routes = [
	{
		path: '',
		component: FoodsComponent,
		resolve: {
			getAllFoods: getAllFoodsResolver
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
	declarations: [FoodsComponent],
	entryComponents: [],
	providers: [
		getAllFoodsResolver
	]
})
export class FoodsModule { }
