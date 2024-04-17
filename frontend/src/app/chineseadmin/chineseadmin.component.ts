import { Component } from '@angular/core';
import {ShareService} from '../service/share.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chineseadmin',
  templateUrl: './chineseadmin.component.html',
  styleUrls: ['./chineseadmin.component.css']
})
export class ChineseadminComponent {
  constructor(private Shared : ShareService,private http: HttpClient,private route:Router){
    var a = this.Shared.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }
  food:any;
  public flag=1
  public flag2=0
  public flag3=0
  ngOnInit():void
  {
    
    this.http.get('http://localhost:3000/chines').subscribe(Response=>{
      console.log("Entered");
        if(Response){
          console.log("data received");
        }
        console.log(Response);
        this.food=Response;
      })
    

  }
  but1()
  {
    this.flag=1;
    this.flag2=0;
    this.flag3=0;
  }
  but2()
  {
    this.flag2=1;
    this.flag=0;
    this.flag3=0;
  }
  but3()
  {
    this.flag3=1;
    this.flag=0;
    this.flag2=0;
  }
}
