import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService, finalempView } from '../data.service';

@Component({
  selector: 'app-patrak',
  templateUrl: './patrak.component.html',
  styleUrls: ['./patrak.component.scss']
})
export class PatrakComponent implements OnInit {
  empData: Array<finalempView> = new Array<finalempView>();
  constructor(public data: DataService, public route: Router, private toastr: ToastrService) { }
  
  total_A:number = 0; 
  total_B :number = 0; 
  total_C :number = 0; 
  total_D :number = 0; 
  total_All :number = 0; 
  salary_All :number = 0; 
  totalsalary :number = 0; 
  totalday :number = 0; 
  earnsalary :number = 0; 
  upad :number = 0; 
  grandTotal:number = 0; 

  ngOnInit(): void {
    this.empData = this.data.employeeData;
    this.totalofAll()
  }
  totalofAll() {
    for (let emp of this.empData) {
     
      this.total_A=this.total_A+emp.piece.total_A;
      this.total_B=this.total_B+emp.piece.total_B 
      this.total_C=this.total_C+emp.piece.total_C 
      this.total_D=this.total_D+emp.piece.total_D 
      this.total_All=this.total_All+emp.piece.total_All 
      this.salary_All=this.salary_All+emp.salary.salary_All 
      this.totalsalary=this.totalsalary+emp.total.totalsalary 
      this.totalday=this.totalday+emp.total.totalday 
      this.earnsalary=this.earnsalary+emp.total.earnsalary 
      this.upad=this.upad+emp.empdetails.upad 
      this.grandTotal=this.grandTotal+emp.total.grandTotal 

    }
  }
  edit(item: finalempView) {
    this.data.empData = new finalempView();
    this.data.empData = item;
    this.route.navigate(['update']);
  }
  deleteData(item: finalempView) {
    let index = this.data.employeeData.indexOf(item);
    this.data.employeeData.splice(index, 1)
    this.toastr.error('User Deleted');
  }
}
