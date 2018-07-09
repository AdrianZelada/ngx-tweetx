# ngx-tweetx

## Version

Para la version de Angular 6.x es necesario instalar
```
    $ npm i rxjs-compat --save
```

## Angular Component

Un componente que nos permite `BUSCAR` tweets mediante el API de Twitter.
Esta componente trabaja con la libreria [CodeBird](https://www.jublo.net/projects/codebird/js) a la cual debemos inviar los `ComsumerKey's` que obtenemos al crear una app en Twitter 

![image](https://preview.ibb.co/mKqawo/Screen_Shot_2018_07_09_at_2_23_18_AM.png)


## Instalación

```
$ npm install ngx-tweetx --save
```

## Configuración

/app.module.ts
```
import { NgxTweetModule } from 'ngx-tweetx';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxTweetModule    
  ],
  providers: [...],
  bootstrap: [...]
})
export class AppModule { }

```
/app.component.html  o  vista a la cual integraremos

```
<ngx-tweet 
    [consumerKey]="consumerKey" 
    [consumerKeyPrivate]="consumerKeyPrivate" 
    (getResults)="getResults($event)"     
    [query]="q"
    [order]="orderBy"
    [display]="displayTweet"
    >
</ngx-tweet>
```

## Inputs 

| Input  | Descripción |  Default|
| ------------- | ------------- | ------------- |
| consumerKey  | Valor Proporcionado por la APP  de Twitter |   |
| consumerKeyPrivate  | Valor Proporcionado por la APP  de Twitter  |  |


 El componente puede ser controlado desde un Componente externo para realizar las búsquedas sin necesidad de utilizar el buscador del mismo componente, de la misma manera tambien podemos aplicar filtor desde un componente externo.

| Input  | Descripción |  Default|
| ------------- | ------------- | ------------- |
| query  | Objeto que contiene que le texto a buscar y tambien contiene el tipo de busqueda que realizara |   |
| order  | El Orden por el cual se mostrara al lista de Tweets, puede tomar los valores : "created", "favorite","retweet"| created | 
| display  | Si queremos solo obterner los datos y no renderizar los tweets podemos contralar la visualizacion con esta propiedad |  false  |

## Outputs

| Output  | Descripción |  Default|
| ------------- | ------------- | ------------- |
| getResults  | Obteniendo una búsqueda realizada nos devolvera el resultado de dicha búsqueda|   |
  



