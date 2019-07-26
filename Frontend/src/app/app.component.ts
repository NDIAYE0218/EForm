import { Component,OnInit } from '@angular/core';
import { CookieService } from "angular2-cookie/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EFormClichy';
  constructor(private cookieservice: CookieService){}
  titre=""
  ngOnInit() {this.titre=this.cookieservice.get('titre')}
}
