import { Component,OnInit } from '@angular/core';
import { ShareService } from '../service/share.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export class Order{
  constructor(public cartlist:any[],public email:any){}
} 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public message:any;
  public list:any;
  public total=0;
  public o!:Order;
  public a:any;


  constructor (private shared : ShareService , private route:Router,private http: HttpClient)
  {
    this.a = this.shared.getvalidate;
    if(!this.a){
      this.route.navigateByUrl('/login')
    }
  }
  ngOnInit():void
  {
    this.message=this.shared.getmessage();
    console.log(this.message);
    for (var i=0;i<this.message.length;i++)
    {
       this.total=this.total+this.message[i].price;
    }
  }
  
pass(id:any,pri:any)
{
  console.log(id)
  console.log(pri)
  this.total=this.total-pri
  const index = this.message.indexOf(id, 0);
  if (index > -1)
  {
   this.message.splice(index, 1);
  }
  // console.log(this.message);
}
 placeOrder(){
  this.o = {
    "cartlist":this.message,
    "email":this.a
  }
  console.log(this.o);
  const url = 'http://localhost:3000/cart';
    return this.http.post(url, this.o).subscribe((response) => {
      //this.shared.emptyList();
      this.route.navigateByUrl("/order")
  });
  
 }
 

}
