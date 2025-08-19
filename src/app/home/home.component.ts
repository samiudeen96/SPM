import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../service/main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedTab = 1;
  constructor(public service:MainService) { }

  ngOnInit(): void {
  }



  content(n:any){
    this.selectedTab = n
  } 


  slide1 = true
  slide2 = false
  slide3 = false

  submit1(){
    this.slide1 = true
    this.slide2 = false
    this.slide3 = false
  }

  submit2(){
    this.slide1 = false
    this.slide2 = true
    this.slide3 = false
  }

  submit3(){
    this.slide1 = false
    this.slide2 = false
    this.slide3 = true
  }


  card = [
    {
      head: 'Labor Savings',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Accurate Cattle Count',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Early ID of Sick Cattle',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Fewer Trips to Feed Bunk',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Value Driver 1',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Value Driver 2',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Value Driver 3',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Value Driver 4',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Value Driver 5',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
    {
      head: 'Drone Unable to Fly in Bad Weather',
      txt: 'Hours Saved',
      txt2:'Cost Per Labor Hour',
      txt3: 'Value Calculation',
      txt4: 'Final Value',
    },
  ]

  form = [
    {
      head1:'Value Drivers',
      head2: 'Type',
      data1:'Labor Savings - Cattle Count',
      data2:'Tangible',
      data3:'Accurate Cattle Count',
      data4:'Tangible',
      data5:'Early ID of Sick Cattle',
      data6:'Intangible',
      data7:'Fewer Trips to Feed Bunk - Labor',
      data8:'Tangible',
      data9:'Reduced environmental footprint - no ATVs for cattle count',
      data10:'Sustainability',
      data11:'Real Time Reporting on Cattle Health Data',
      data12:'Service',
      data13:'Drone Unable to Fly in Bad Weather',
      data14:'Negative'

    },
  ]

  data =[
    {
      
    }
  ];

  add(){
    this.data.push({
      
    });
  }

  

  remove(item: number){
    this.data.splice(item,1);
  }


  showbtn = false

  submit(){
    this.showbtn = true
  } 


  // @ViewChild('pdf', {static:false}) el!: ElementRef
  // makepdf(){
  //   // let pdf = new jsPDF('p');
  //   let pdf = new jsPDF('p', 'px', [842, 595]);

  //   pdf.html(this.el.nativeElement,{
      
  //     callback:(pdf) =>{
  //       pdf.save("formTable.pdf")
        
  //     }
  //   })
  // }


//   makepdf(){
//     const doc = new jsPDF()
// autoTable(doc,{ html: '#pdf' })
// doc.save('table.pdf')
//   }







}
