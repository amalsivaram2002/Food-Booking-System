import { Component } from '@angular/core';
import { ShareService } from '../service/share.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private Shared : ShareService,private http: HttpClient,private route:Router){
    var a = this.Shared.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }
  sub()
  {
    this.Shared.setvalidate("")
    this.Shared.emptyList()
  }
}
