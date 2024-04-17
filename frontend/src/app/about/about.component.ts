import { Component } from '@angular/core';
import { ShareService } from '../service/share.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private us:ShareService,private route:Router)
  {
    var a = this.us.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }
}
