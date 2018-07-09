import { Injectable} from '@angular/core';

declare let window;
@Injectable()
export class InitialWidgets {    
    constructor() {}
    init(){
        window.twttr = (function(d, s, id) {            
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
          
            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };            
            return t;
          }(document, "script", "twitter-wjs"));                  
    }

    loadTweet(id:string){
        window.twttr.widgets.createTweet(
            id,
            document.getElementById(id),
            {
                width:'auto'
            }
        )

    }


}