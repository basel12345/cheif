import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
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
	declarations: [LoginComponent],
	entryComponents: [],
	providers: []
})
export class LoginModule { }
