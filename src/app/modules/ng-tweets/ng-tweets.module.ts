import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgTweetsComponent } from './ng-tweets.component';
import { InitialWidgets } from './services/initial-twitter-platform';
import { TweetComponent } from './components/tweet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    InitialWidgets
  ],
  declarations: [NgTweetsComponent,TweetComponent],
  exports: [NgTweetsComponent]
})
export class NgxTweetModule {

    constructor( private initialWidgets:InitialWidgets){
      this.initialWidgets.init();
    }
 }
