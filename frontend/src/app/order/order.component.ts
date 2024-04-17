import { Component } from '@angular/core';
import { ShareService } from '../service/share.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private Shared : ShareService,private http: HttpClient,private route:Router){
    var a = this.Shared.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }
}
