import { Component } from '@angular/core';
import { ShareService } from '../service/share.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private us:ShareService,private route:Router)
  {
    var a = this.us.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }
}
