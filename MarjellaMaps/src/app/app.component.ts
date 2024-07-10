import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MarjellaMaps';

  ngAfterViewInit(): void {
      const sidemenu = document.querySelector(".side-menu") as HTMLDivElement;
      const outputScreen = document.querySelector("#output-screen") as HTMLElement;

      var sidemenuWidth = sidemenu.offsetWidth;
      outputScreen.style.left = sidemenuWidth + "px" ;
      console.log(sidemenuWidth)
  }

  ngOnInit(): void {
      
  }
}
