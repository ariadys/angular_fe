import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    private _url: string = "/assets/data/data.json";

    constructor(private http: HttpClient){}

    getData(): Observable<IData[]>{
        return this.http.get<IData[]>(this._url);
    }
}