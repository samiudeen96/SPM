import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.scss']
})
export class M2Component implements OnInit {

  IText = ""
  item: any;
  data: any;
  // shwError = false
  showfinalvalue: any[] = []
  texts: any
  Explain_text: any

  constructor(public service: MainService) { }

  ngOnInit(): void {
    const word = `labour`
    const word1 = `accurate`
    const word2 = `sick cattle`
    const word3 = `fewer trips`

    if (this.service.data[0].value == "") {
      this.service.data = JSON.parse(localStorage.getItem("data_spm") || JSON.stringify(this.service.data));

    }



    console.log(this.service.data)
    for (let i = 0; i < this.service.data.length; i++) {
      const element = this.service.data[i];
      if (element.types == "Next Best Alternative") {
        this.service.data.unshift(this.service.data.splice(i, 1)[0]);
      }
      if (element.types == "Negative") {
        this.service.data.push(this.service.data.splice(i, 1)[0]);
      }
    }
    console.log(this.service.data)
    for (let i = 0; i < this.service.data.length; i++) {
      const element = this.service.data[i];
      this.texts = element.value
      console.log(element.value)
      // Find Text
      console.log(this.texts.includes(word))

      if (this.texts.includes(word) == true) {
        element.explain = `Cattleview reduces hours on cattle count by 95%. Cattle counts 2x daily, 2 hours, every day, $20/hr<br>
       Half the days, you have 20 hours of labor unaccounted for because client doesn't have enough information on how much work there is to do`
      }
      else if (this.texts.includes(word1) == true) {
        element.explain = `$1,000 penalty each time client misses deadline. ~3 months yearly where they are penalized`

      }

      else if (this.texts.includes(word2) == true) {
        element.explain = `Having real time health data could reduce preventable disease by .01%. Client has 20,000 cows. Each cow is ~$500 in profit`

      }

      else if (this.texts.includes(word3) == true) {
        element.explain = `2 hours daily to check & fill feed pens, but about 20% don't need it & it's different every time`

      }

      // Find dropdown

      else if (this.texts == 'Labor Savings - Cattle Count') {
        element.explain = `Cattleview reduces hours on cattle count by 95%. Cattle counts 2x daily, 2 hours, every day, $20/hr<br>
            Half the days, you have 20 hours of labor unaccounted for because client doesn't have enough information on how much work there is to do`
      }

      else if (this.texts == 'Accurate Cattle Count') {
        element.explain = `$1,000 penalty each time client misses deadline. ~3 months yearly where they are penalized`
      }

      else if (this.texts == 'Early ID of Sick Cattle') {
        element.explain = `Having real time health data could reduce preventable disease by .01%. Client has 20,000 cows. Each cow is ~$500 in profit`

      }

      else if (this.texts == 'Fewer Trips to Feed Bunk - Labor') {
        element.explain = `2 hours daily to check & fill feed pens, but about 20% don't need it & it's different every time`

      }
    }
  }


  grandTotal: any;
  calc(item:any)
  {
    // item.b = 73000
    // item.result = item.a + item.b;
    this.grandTotal = 0;
    for (let i = 0; i < this.service.data.length; i++) {
      const element = this.service.data[i];
      this.grandTotal += element.result;
         console.log(element.result)


    }
    this.showError = false
  }


  showError = false;
  shwbtn = false;



  submit() {
    // if ((this.service.data.filter(f => f.a == 0).length == 0 && this.service.data.filter(f => f.a > 150000).length == 0)) {
    if ((this.service.data.filter(f => f.a == 0).length == 0)) {
      this.service.shwError = false
      this.service.shwbtnm2 = true
    }
    else {
      this.service.shwError = true
      this.service.shwbtnm2 = false
    }
    console.log()
    for (let i = 0; i < this.service.data.length; i++) {
      const element = this.service.data[i];
      console.log(this.service.data[i].a)
    }


  }

  shwtbl = false;
  shwcard = true;


  next() {
    this.shwtbl = true;
    this.shwcard = false;
    setTimeout(() => {
      this.createChart();
    }, 250)
  }

  shwback() {
    this.shwtbl = false;
    this.shwcard = true;
  }

  showfinal(n: any) {
    this.showfinalvalue[n] = true

  }


  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  positive_Values = 0
  myPieChart: any;
  createChart() {
    if (this.myPieChart != null) {
      this.myPieChart.destroy();
    }
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let lableArr = [];
    let dataArr = [];
    // let arr = dataArr[dataArr.length - 1];
    let backgroundcolor =[];
    let sum = 0;
    let sum1 = 0;
    for (let i = 0; i < this.service.data.length; i++) {
      const element = this.service.data[i];
      lableArr.push(element.value)
      sum += element.a;

      

      if (element.types !== 'Negative') {
        sum1 += element.a;
      }

      if (element.types == 'Negative') {
        backgroundcolor.push('#9E2A2F');
      }else{
        backgroundcolor.push('#005f86');
      }

      console.log(sum1)
      if (i == 0) {
        dataArr.push([0, element.a]);
      } else {
        dataArr.push([(sum - element.a), sum]);
        
      }

    }
    
    lableArr.push("Total Economic Value");
    
    backgroundcolor.push('#DAAA00')
    dataArr.push([0, sum]);
    console.log(dataArr);



    this.myPieChart = new Chart(this.ctx, {
      type: 'bar',
      options: {
        legend: {
          display: false
        },

        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: '#000',   // X-Axis font color
                fontStyle: 'bolder', // X-Axis font style 
                fontSize: 16    
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: '#000',   // X-Axis font color
                fontStyle: 'bolder', // X-Axis font style 
                fontSize: 16 ,
                callback: function(value, index, ticks) {
                  return '$' + value;
              }   
              },
            },
          ],
        }
      },
      data: {
        labels: lableArr,
        
        

        datasets: [{

          data: dataArr,

          backgroundColor: backgroundcolor,

          
          borderWidth: 0
        }]
      },

    });
  }
  print() {
    window.print();
  }
}
