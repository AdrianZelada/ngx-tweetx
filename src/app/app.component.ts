import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  consumerKey : string = 'consumerKey';
  consumerKeyPrivate : string = 'consumerKeyPrivate';
  title = 'app';
  q:any={};
  displayTweet :boolean = false; 
  orderBy:string='created'
  constructor(){}

  getResults(data:any){
    console.log("Results");
    console.log(data);    
  }

  search(text:string='#Bolivia',type:string='mixed'){
    this.q={
      q:text,
      result_type:type
    }
  }  

  order(code:string){
    this.orderBy=code;
  }
}
