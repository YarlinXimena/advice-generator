import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advice } from '../models/advice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  endpoint = 'https://api.adviceslip.com/advice';
  constructor(private http: HttpClient) { }

  getRandomAdvice(): Observable<Advice> {
    return this.http.get<Advice>(this.endpoint);
  }
}
