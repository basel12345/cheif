import { NbMenuItem } from '@nebular/theme';


export const MangerMenu: NbMenuItem[] = [
	{
		title: 'الرئيسيه',
		link: '/pages/manger/home'
	},
	{
		title: 'اضافة المنتجات',
		children: [
			{
				title: 'اضافة الطعام',
				link: '/pages/manger/add-food',
			},
			{
				title: 'اضافة خدمات',
				link: '/pages/manger/add-services',
			},
			{
				title: 'اضافة مشروبات',
				link: '/pages/manger/add-drinks',
			},
		]
	},
	{
		title: 'المنتجات',
		children: [
			{
				title: ' الطعام',
				link: '/pages/manger/foods',
			},
			{
				title: ' خدمات',
				link: '/pages/manger/services',
			},
			{
				title: ' مشروبات',
				link: '/pages/manger/drinks',
			},
		]
	},
	{
		title: 'المشتريات',
		children: [
			{
				title: ' اضافة المشتريات',
				link: '/pages/manger/add-purchases',
			},
			{
				title: 'المشتريات',
				link: '/pages/manger/report-purchases',
			},
		]
	},
	{
		title: 'التقارير',
		link: '/pages/manger/reports'
	}
];
