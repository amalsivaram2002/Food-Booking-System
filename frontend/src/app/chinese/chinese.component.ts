import { Component,OnInit } from '@angular/core';
import {ShareService} from '../service/share.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit
{
  public food:any;
  public order:any;
  constructor(private Shared : ShareService,private http: HttpClient,private route:Router){
    var a = this.Shared.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }
  public message:any;
  
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
  add(no:Number){
    for(var i=0;i<this.food.length;i++){
      if(this.food[i].sno == no){
        this.order= this.food[i];
        this.Shared.setmessage(this.order);
      }
    }
    console.log(this.order);
  }



}
