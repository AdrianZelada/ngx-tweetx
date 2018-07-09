import { Observable} from 'rxjs/Observable'
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as Codebird from 'Codebird';

export class RequestTwitterService {

  codebird : any; 

  private tweetsResult:BehaviorSubject<any> = new BehaviorSubject([]);
  public tweets$ : Observable<any> = this.tweetsResult.asObservable()

  constructor(private consumerKey:string, private consumerKeyPrivate:string) { 
     this.codebird = new Codebird;
     this.codebird.setConsumerKey(this.consumerKey, this.consumerKeyPrivate);
  }  

  searchTweet(query:any,sort:string){    
      query.q = query.q.trim();
      if(query.q == ''){
        this.tweetsResult.next([]);
        return ;        
      }
      this.codebird.__call(
        "search_tweets",
        query,
        (result:any)=>{            
          let tweets=[];
          if(result.statuses){
            tweets = this.buildTweets(result.statuses);
            tweets = this.selectOrderBy(tweets,sort);
          }
          this.tweetsResult.next(tweets);                          
        } 
      )     
  }

  orderBy(type:string='created'){
    let tweets:Array<any> = this.tweetsResult.getValue();
    tweets = this.selectOrderBy(tweets,type);
    this.tweetsResult.next(tweets);                          
  }

  private selectOrderBy(tweets:Array<any>,type:string='created'){
    let result=[];
    switch (type) {
      case 'created':
        result = this.orderByCreated(tweets);
      break;
      case 'favorite':
        result = this.orderByFavorities(tweets);      
      break; 
      case 'retweet':
        result = this.orderByRetweets(tweets);
      break;      
    }
    return result
  }

  private orderByCreated(tweets : Array<any>){
    return tweets.sort((a:any,b:any)=>{
      let date1 = new Date(a.tweetCreated), date2 =new Date(b.tweetCreated);
      return date2.getTime() - date1.getTime()
    })
  };

  private orderByFavorities(tweets : Array<any>){
    return tweets.sort((a:any,b:any)=>{      
      return b.favorite_count - a.favorite_count
    })
  };

  private orderByRetweets(tweets : Array<any>){
    return tweets.sort((a:any,b:any)=>{     
      return b.retweet_count - a.retweet_count
    })
  };

  private buildTweets(tweets : Array<any>){
    return tweets.map((tweet:any)=>{    
      if(tweet.retweeted_status){
        tweet.tweetId = tweet.retweeted_status.id_str;
        tweet.tweetCreated = tweet.retweeted_status.created_at;
        tweet.retweet_count = tweet.retweeted_status.retweet_count;
        tweet.favorite_count = tweet.retweeted_status.favorite_count;        
      }else{
        tweet.tweetId = tweet.id_str;
        tweet.tweetCreated = tweet.created_at;
      }      
      return tweet;
    });
  }
}
