import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOrderListComponent } from './add-order-list/add-order-list.component'
@Component({
	templateUrl: './add-order.component.html',
})


export class AddOrderComponent implements OnInit {

	AllRows: any = [];
	totalPrice: any;
	discount: any = 0;
	totalInvoicePrice: any;
	pay: any;
	stay: any;
	constructor(
		private router: Router,
		private modalService: NgbModal,
	) { }

	ngOnInit() {
	}

	// addition() {
	// 	this.router.navigate(['/pages/manger/home'])
	// }

	addition() {
		const model_ref = this.modalService.open(AddOrderListComponent, { size: 'lg' })
		model_ref.result.then((savedRow) => {
			this.AllRows = this.AllRows.concat(savedRow);
			this.getTotalPrice(this.AllRows);
			this.getDiscount(this.discount);
			this.onPayEnterd(this.pay);
		}, () => {
		});
	}

	delete(i) {
		this.AllRows.splice(i, 1);
		this.getTotalPrice(this.AllRows);
		this.getDiscount(this.discount);
		this.onPayEnterd(this.pay);
	}

	getTotalPrice(array) {
		this.totalPrice = 0;
		array.forEach(element => {
			this.totalPrice += element.price * element.quantity;
		});
	}

	getDiscount(param) {
		let percentage, total;
		percentage = (param / 100) * this.totalPrice;
		total = this.totalPrice;
		this.totalInvoicePrice = Math.ceil(total - percentage);
		this.onPayEnterd(this.pay);
	}

	onPayEnterd(param) {
		this.stay = param - this.totalInvoicePrice;
	}

	save(frm) {
		if (frm.valid == true) {

		}
	}

	getTheQuantity() {
		this.getTotalPrice(this.AllRows);
		this.getDiscount(this.discount);
	}

	Print_Report(reportName) {
		console.log(this.AllRows)
		// const school = this.loginService.getSchoolData();
		// let School = JSON.parse(school);
		// console.log(this.value)
		let date = new Date()
		let printContents, popupWin;
		printContents = document.getElementById('className').innerHTML;
		// console.log(printContents.getElementByTagName('tbody'))
		popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
		popupWin.document.open();
		popupWin.document.write(`
		  <html>
			<head>
			  <title> ${reportName}</title>
			  <style>
				@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
		  *{
				font-family: 'Cairo', sans-serif;
		  // font-family: -apple-system, BlinkMacSystemFont, 
		  // "Segoe UI", 
		  // Roboto, 
		  // "Helvetica Neue",
		  // Arial, 
		  // sans-serif, 
		  // "Apple Color Emoji", 
		  // "Segoe UI Emoji", 
		  // "Segoe UI Symbol" ;
				// direction: rtl;
				// width:100%
				
				}
		//   .page-header, .page-header-space {
		//   height: 170px;
		//   }
		//   #className{
		// 	display:block;
		//   }
		  
		//   .page-footer, .page-footer-space {
		//   height: 150px;
		  
		//   }
		  
		//   .page-footer {
		//   position: fixed;
		//   bottom: 0;
		//   width: 100%;
		//   border-top: 1px solid black; /* for demo */
		  
		//   }
	  
		  .card{
			page-break-inside: avoid;
		  }
		  
		  .page-header {
		//   position: fixed;
		//   top: 0mm;
		//   width: 100%;
		  border-bottom: 1px solid black; /* for demo */
		  
		  }
		  body {
			width:5cm !important;
		}
		//   .page-footer	.details{
		// 	width:50% !important;
		// 	display: inline-block;
		// 	float:right;
		//   }
		  
		  .page tbody tr td, .page thead tr th{
		text-align:center;
		border: 1px solid #000 !important;
	  }
	  .page {
		page-break-after: always;
		margin-top:10px !important;
	  }
		
		  tfoot{
		  visibility: hidden;
		  }
	
		  table{
			width:100% !important;
		  }
		  
		  @media print {
		   thead {display: table-header-group;} 
		   tfoot {display: table-footer-group;}
		   *{
			// font-size:0.5em;
		   }
		 
		   
			 body {
				margin: 0;
				width:50%s;
			}
		  }
		  
		  
				
			  //........Customized style.......
				</style>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			</head>
	  <body onload="window.print();window.close()" >
	  <div class="page-header " >
		  <div class='row text-center'>
			 <h4 class='col-12'>
		  		Mr/Chief Restaurant
			 </h4> 
			 <h4 class='col-12'>
		  		Welcome To Mr/Chief Cafe and Restaurant
			 </h4> 
			 
		  </div>
		  <br/>
		  <div class='row '>
			 <p class='col-6'>
		  		Outlet: Mr/Chief
			 </p> 
		  </div>
		  <div class='row '>
			 <p class='col-6'>
		  		Table: 15
			 </p> 
			 <p class='col-6'>
		  		Date :${date.toLocaleDateString()}
			 </p> 
			 <p class='col-6'>
		  		Guests : 6
			 </p> 
			 <p class='col-6'>
		  		Shift : Afternoon
			 </p> 
		  </div>
	  <br/>
	</div>
	<!--
	<div class="page-footer">
	  <div class='details'>
		<p>
		  العنوان : 
		</p>
		<p>
		  التاريخ : ${date.toLocaleDateString()}
		</p>
	  </div>
	  <div class='details'>
		<p>
		  رقم الهاتف :
		</p>
		<p>
		  الساعة : ${date.toLocaleTimeString()}
		</p>
		powered by quizzo school management
	  </div>
	  
	 	
	   I'm The Footer
	</div>
	-->
		<table>
	  
		  <thead>
		  <tr>
			<td>
			  <!--place holder for the fixed-position header-->
			  <div class="page-header-space"></div>
			</td>
		  </tr>
		  </thead>
	  
		  <tbody>
		  <tr>
			<td>
			  <!--*** CONTENT GOES HERE ***-->
			  <div class="page">${printContents}</div>
			
			</td>
		  </tr>
		  </tbody>
	  
		  
	  
		</table>
		
		   
			  
			
		</body>
		  </html>`
		);
		// <h3>البريد الالكتروني:safwa@gmail.com</h3>
		popupWin.document.close();
	}
}
