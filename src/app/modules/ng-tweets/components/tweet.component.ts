import { Component, OnInit,Input, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { InitialWidgets } from '../services/initial-twitter-platform';

@Component({
    selector: 'tweet',
    templateUrl: 'tweet.component.html'
})

export class TweetComponent implements OnInit, AfterContentInit {
    @Input() id:string;
    
    constructor(private initialWidgets:InitialWidgets) { }

    ngOnInit() {}

    ngAfterContentInit(){
        setTimeout(()=>{
            this.initialWidgets.loadTweet(this.id);
        });        
    }
}