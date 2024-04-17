import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private http:HttpClient){}
  public food:any;
  ngOnInit():void
  {
    
    this.http.get('http://localhost:3000/orders').subscribe(Response=>{
      console.log("Entered");
        if(Response){
          console.log("data received");
        }
        console.log(Response);
        this.food=Response;
      })
    

  }
}
