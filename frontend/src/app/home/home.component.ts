import { Component } from '@angular/core';
import { ShareService } from '../service/share.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private Shared : ShareService,private http: HttpClient,private route:Router){
    // var a = this.Shared.getvalidate;
    // if(!a){
    //   this.route.navigateByUrl('/')
    // }
  }
}
