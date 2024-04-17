import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService 
{
  message:any
  public static validate : any
  constructor() { }
  public static list:any=[];

  setmessage(data:string)
  {
      ShareService.list.push(data);
  }
  emptyList()
  {
    ShareService.list=[]
  }
  getmessage()
  {
    return ShareService.list;
  }

  setvalidate(val:string)
  {
    ShareService.validate=val;
  }

   get getvalidate()
  {
    return ShareService.validate
  }


}
