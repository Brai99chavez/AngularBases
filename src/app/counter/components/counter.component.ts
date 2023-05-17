import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})


export class counterComponent{

  public counter: number = 10;

  increaseBy(value:number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

  decreaseBy(value:number): void {
    this.counter -= 1;
  }
}
