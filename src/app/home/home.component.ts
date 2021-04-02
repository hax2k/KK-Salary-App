import { Component, Input, OnInit } from '@angular/core';
import { DataService, EmpDataView, EmpDetails, finalempView, Piece, Price, Salary, Total } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  finalemp: finalempView = new finalempView();
  NewemployeeData: Array<EmpDataView> = new Array<EmpDataView>();
  piece: Piece = new Piece();
  price: Price = new Price();
  salary: Salary = new Salary();
  empDetail: EmpDetails = new EmpDetails();
  total: Total = new Total();



  no: number = 0;

  constructor(public dt: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    for (let a = 0; a <= 30; a++) {
      let obj: EmpDataView = new EmpDataView();
      this.NewemployeeData.push(obj);
    }
    console.log(this.NewemployeeData);
  

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
  addData() {
    this.finalemp = new finalempView();
    this.finalemp.empdata = this.NewemployeeData;
    this.finalemp.empdetails = this.empDetail;
    this.finalemp.piece = this.piece;
    this.finalemp.price = this.price;
    this.finalemp.salary = this.salary;
    this.finalemp.total = this.total;
    // price: Price;
    // salary : Salary;
    // total:Total;
    this.dt.employeeData.push(this.finalemp);

    this.NewemployeeData = new Array<EmpDataView>();
    for (let a = 0; a <= 30; a++) {
      let obj: EmpDataView = new EmpDataView();
      this.NewemployeeData.push(obj);
    }
    this.piece = new Piece();
    // this.price = new Price();
    this.salary = new Salary();
    this.empDetail = new EmpDetails();
    this.total = new Total();
    this.toastr.success('User Added');
  }
  
}



