import { Component, OnInit } from '@angular/core';
import { Piece, Price, Salary, EmpDetails, Total } from '../data.service';

@Component({
  selector: 'app-shortcalculator',
  templateUrl: './shortcalculator.component.html',
  styleUrls: ['./shortcalculator.component.scss']
})
export class ShortcalculatorComponent implements OnInit {

  piece: Piece = new Piece();
  price: Price = new Price();
  salary: Salary = new Salary();
  empDetail: EmpDetails = new EmpDetails();
  total: Total = new Total();

  constructor() { }

  ngOnInit(): void {
    this.getPrice();
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

  getPrice() {
    if (JSON.parse(localStorage.getItem('prices') as any)) {
      let price = JSON.parse(localStorage.getItem('prices') as any);
      this.price.price_A = price.a;
      this.price.price_B = price.b;
      this.price.price_C = price.c;
      this.price.price_D = price.d;
    }
  }

  setPrice() {
    let price = {
      a: this.price.price_A,
      b: this.price.price_B,
      c: this.price.price_C,
      d: this.price.price_D
    };
    localStorage.setItem('prices', JSON.stringify(price));
  }



}
