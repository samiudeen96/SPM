import { Component, OnInit } from '@angular/core';
import { NgxPrintDirective } from 'ngx-print';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.scss']
})
export class M1Component implements OnInit {
  selectedTab = 1;
  Servicearray : any[] = []

  constructor(public service:MainService) { }

  ngOnInit(): void {
    // this.service.data = JSON.parse(localStorage.getItem("Arraydata") || '[]');
  }



  content(n:any){
    this.selectedTab = n
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
