import  { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { ENV } from '../app/environments';

@Injectable()
export class PostProvider{
 
    constructor(public http : Http){
        
    }
    
    postData(body,file){
        let type="application/json; charset=UTF-8";
        let headers = new Headers({ "content-Type":type });
        let options = new RequestOptions({headers: headers});
        
        return this.http.post(ENV.baseURL + file, JSON.stringify(body),options)
        .pipe(map(res=>res.json()));
    }
    
    
}