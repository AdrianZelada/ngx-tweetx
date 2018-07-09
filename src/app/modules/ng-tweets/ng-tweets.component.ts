import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { RequestTwitterService } from './services/request-twitter.service';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import { Observable} from 'rxjs/Observable';


@Component({
  selector: 'ngx-tweet',
  templateUrl: './ng-tweets.component.html',
  styleUrls: ['./ng-tweets.component.css']
})
export class NgTweetsComponent implements OnInit  {
  _query : any = {}
  _type : string = 'created'
  @Input() consumerKey:string;
  @Input() consumerKeyPrivate:string;
  @Input() display :boolean = true;
  @Output() getResults? :EventEmitter<any> = new EventEmitter<any>() ;
  @Input() 
    set query(data){
      this._query=data;
      if(this._query.q){
        this._query.result_type = this._query.result_type || 'mixed';        
        this.form.setValue(this._query);
      }
    }
  @Input() 
    set order(data){
      this._type=data;
      if(this._type){
        this.orderBy.setValue(this._type);        
      }      
    }

  request:any={};  
  tweets$ : Observable<any>;
  isLoading: boolean = false;

  form : FormGroup;
  orderBy : FormControl= new FormControl('created');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      q : new FormControl(''),
      result_type : new FormControl('mixed')    
    })
  }

  ngOnInit() {

      this.request = new RequestTwitterService(this.consumerKey,this.consumerKeyPrivate);    
      this.tweets$ = this.request.tweets$.do(()=>{
        this.isLoading=false;      
      }).do((tweets:Array<any>)=>{
        this.getResults.emit(tweets)
      });

     this
      .form
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(()=>{  
        this.isLoading=true;
      })
      .subscribe((data:any)=>{
        console.log(this.orderBy.value);        
        this.request.searchTweet(data,this.orderBy.value);
      });

    this
      .orderBy
      .valueChanges
      .distinctUntilChanged()
      .subscribe((type:any)=>{        
        this.orderByTweets(type);
      })
  }

  orderByTweets(type:string){
    this.request.orderBy(type);
  }

}
