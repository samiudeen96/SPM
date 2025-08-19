import { Component, OnInit } from '@angular/core';
import { NgxPrintDirective } from 'ngx-print';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-m1-two',
  templateUrl: './m1-two.component.html',
  styleUrls: ['./m1-two.component.scss']
})
export class M1TwoComponent implements OnInit {

  a: any;
  b: any
  result: any
  IText = ""
  selectedTab = 1;
  Servicearray: any[] = []

  constructor(public service: MainService) { }

  ngOnInit(): void {
    // this.service.data = JSON.parse(localStorage.getItem("Arraydata") || '[]');
  }



  content(n: any) {
    this.selectedTab = n
  }

  showbtn = false

  // submit(){
  //   this.showbtn = true


  // } 


  form = [
    {
      head1: 'Value Drivers',
      head2: 'Type',
      data1: 'Labor Savings - Cattle Count',
      data2: 'Tangible',
      data3: 'Accurate Cattle Count',
      data4: 'Tangible',
      data5: 'Early ID of Sick Cattle',
      data6: 'Intangible',
      data7: 'Fewer Trips to Feed Bunk - Labor',
      data8: 'Tangible',
      data9: 'Reduced environmental footprint - no ATVs for cattle count',
      data10: 'Sustainability',
      data11: 'Real Time Reporting on Cattle Health Data',
      data12: 'Service',
      data13: 'Drone Unable to Fly in Bad Weather',
      data14: 'Negative'

    },
  ]

  _negative = "Negative";

  dropdown = [
    "Tangible", "Intangible", "Functional", "Process", "Service", "Market-Based", "Sustainability", "Next Best Alternative", this._negative
  ]

  dropdown1 = [
    "Labor Savings - Cattle Count", "Accurate Cattle Count", "Early ID of Sick Cattle", "Fewer Trips to Feed Bunk - Labor", "Reduced environmental footprint - no ATVs for cattle count", "Real Time Reporting on Cattle Health Data", "Drone Unable to Fly in Bad Weather"
  ]


  print() {
    window.print();
  }
  showError = false;

  submit() {
    // localStorage.setItem("Arraydata", JSON.stringify(this.service.data));
    let validation = true;
    let negative = false;

    if (this.service.data.length > 2) {
      for (let i = 0; i < this.service.data.length; i++) {
        const element = this.service.data[i];
        console.log(element.types, this._negative, element.value)
        console.log(this.service.data)
        if (element.value.length == 0) {
          validation = false;
        }
        if (element.types == this._negative) {
          negative = true;
        }

      }
    }
    if (validation == false && negative == true) {
      this.showError = true;

      this.IText = "You must fill all fields in the value driver to proceed."
    }
    if (negative == false && validation == true) {
      this.showError = true;

      this.IText = "You must fill at least one “Negative” value driver in the ‘Types’ dropdown to proceed."
    }

    if (negative == false && validation == false) {
      this.showError = true;

      this.IText = "You must fill all fields and at least one “Negative” value driver in the ‘Types’ dropdown to proceed."
    }

    if (negative == true && validation == true) {
      this.showbtn = true;
      this.service.visit1 = true;

    }
    // if (validation == true && negative == true) {
    //   this.showbtn = true
    //   this.showError = false
    // } else {
    //   this.showError = true
    //   // this.showError = true;

    // }
    // this.service.data = JSON.parse(localStorage.getItem("Arraydata") || '[]');
  }
  add() {
    this.service.data.push({
      value: "",
      placeholder:"Enter the Value Driver",
      types: "",
      explain: "",
      a: 0,
      b: 0,
      result: 0
    });
  }



  remove(item: number) {
    this.service.data.splice(item, 1);
  }

  grandTotal: any;
  calc(item: any) {

    item.result = item.a + 73000;
    this.grandTotal = 0;
    for (let i = 0; i < this.service.data.length; i++) {
      const element = this.service.data[i];
      this.grandTotal += element.result;
    }
  }

  addNumbers() {
    this.result = this.a * this.b
    let validation = true;

    if (this.service.data.length > 2) {
      for (let i = 0; i < this.service.data.length; i++) {
        const element = this.service.data[i];
        if (element.value.length == 0) {
          validation = false;
        }


      }
    }

  }
}




