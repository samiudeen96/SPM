import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';
// import { security } from 'ht-security'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'SPM';


  ngAfterViewInit(): void {
    // localStorage.clear()
    // security({
    //   mode: "development" 
    //   // mode: "deployment"     
    // });

    AOS.init();
    // const script1 = document.createElement('script');
    // script1.src = '//assets.adobedtm.com/47e3e446470b/b72afcffdbd7/launch-a14b516e7cd5.min.js';
    // document.head.appendChild(script1);
  }

  scrollsmoothtop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}

