import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService, EmpDataView, EmpDetails, finalempView, Piece, Price, Salary, Total } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  finalemp: finalempView = new finalempView();
  NewemployeeData: Array<EmpDataView> = new Array<EmpDataView>();
  piece: Piece = new Piece();
  price: Price = new Price();
  salary: Salary = new Salary();
  empDetail: EmpDetails = new EmpDetails();
  total: Total = new Total();

 

  no: number = 0;

  constructor(public dt:DataService, public route: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    for (let a = 0; a <= 30; a++) {
      let obj: EmpDataView = new EmpDataView();
      this.NewemployeeData.push(obj);
    }
    console.log(this.NewemployeeData);
    this.NewemployeeData=this.dt.empData.empdata;
    this.piece=this.dt.empData.piece;
    this.price=this.dt.empData.price;
    this.salary=this.dt.empData.salary;
    this.empDetail=this.dt.empData.empdetails;
    this.total=this.dt.empData.total;
   
  }
  sumOfAll() {
    this.piece.total_A = 0;
    this.piece.total_B = 0;
    this.piece.total_C = 0;
    this.piece.total_D = 0;
    this.piece.total_All = 0;
    for (let item of this.NewemployeeData) {
      this.piece.total_A = this.piece.total_A + item.a;
      this.piece.total_B = this.piece.total_B + item.b;
      this.piece.total_C = this.piece.total_C + item.c;
      this.piece.total_D = this.piece.total_D + item.d;
    }
    this.piece.total_All = this.piece.total_A + this.piece.total_B + this.piece.total_C + this.piece.total_D;

  }
  salaryCalculator() {
    this.total.daysalary = this.total.totalsalary / 26;
    this.total.earnsalary = Math.round(this.total.daysalary * this.total.totalday);
  }
  productOfA() {
    this.salary.salary_A = this.piece.total_A * this.price.price_A;
    this.salary.salary_All = this.salary.salary_A + this.salary.salary_B + this.salary.salary_C + this.salary.salary_D;
  }
  productOfB() {

    this.salary.salary_B = this.piece.total_B * this.price.price_B;
    this.salary.salary_All = this.salary.salary_A + this.salary.salary_B + this.salary.salary_C + this.salary.salary_D;
  }
  productOfC() {

    this.salary.salary_C = this.piece.total_C * this.price.price_C;
    this.salary.salary_All = this.salary.salary_A + this.salary.salary_B + this.salary.salary_C + this.salary.salary_D;

  }
  productOfD() {

    this.salary.salary_D = this.piece.total_D * this.price.price_D;
    this.salary.salary_All = this.salary.salary_A + this.salary.salary_B + this.salary.salary_C + this.salary.salary_D;

  }

  upad() {
    this.total.grandTotal = this.total.earnsalary - this.empDetail.upad;
  }
  updateData(){
    this.finalemp=new finalempView();
    this.finalemp.empdata=this.NewemployeeData;
    this.finalemp.empdetails=this.empDetail;
    this.finalemp.piece=this.piece;
    this.finalemp.price=this.price;
    this.finalemp.salary=this.salary;
    this.finalemp.total=this.total;
    let index=this.dt.employeeData.indexOf(this.dt.empData);

    this.dt.employeeData[index]=this.finalemp;

    this.route.navigate(['patrak']);
    this.toastr.info('User Updated');
  }
}
