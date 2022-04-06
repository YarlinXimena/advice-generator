import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Advice } from 'src/app/models/advice';
import { AdviceService } from 'src/app/service/advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  advice: Advice;

  constructor(private _adviceService: AdviceService) { }

  showAdvice(){
    return this._adviceService.getRandomAdvice().subscribe(res => {
      this.advice = res;
    })
  }

  ngOnInit(){
    this.showAdvice();
  }

}
