import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BINARY CALCULATOR';

  public result = '';
  private val1: number;
  private val2: number;
  private sym: string;

  clearAll() {
    if (this.result !== '') {
      this.result = '';
    }
  }

  addDigit(ev: MouseEvent) {
    let symbol: string;
    symbol = (ev.target as HTMLElement).textContent;
    if (symbol === '+' || symbol === '-') {
      if (!this.result.includes('+') && !this.result.includes('-')) {
        this.sym = symbol;
        this.val1 = parseInt(this.result, 2);
        this.clearAll();
      }
    } else {
      this.result += symbol;
    }
  }

  operation() {
    this.val2 = parseInt(this.result, 2);
    this.clearAll();
    if (this.sym === '+') {
      this.result = (this.val1 + this.val2).toString(2);
    } else {
      this.result = (this.val1 - this.val2).toString(2);
    }
  }

  onKeyUp() {
    console.log(this.result);
  }

  noNumber(e: KeyboardEvent) {
    if (e.key === 'c') {
      this.clearAll();
    }
    if (e.key === 'Enter') {
      this.operation();
    } else if (e.key !== '0' && e.key !== '1') {
      e.preventDefault();
    }
    if (!this.result.includes('+') && !this.result.includes('-')) {
      if (e.key === '+') {
        this.sym = e.key;
        this.val1 = parseInt(this.result, 2);
        this.result += e.key;
        this.clearAll();
      }
    }
  }

  /*  operationResult() {
    if (this.result !== '') {
      if ((!this.result.endsWith('+') && !this.result.endsWith('-')) &&
        (this.result.includes('+') || this.result.includes('-'))) {

        let tmp: string;
        let x: number;
        let y: number;
        let sum: number;
        let arrayOfStrings;

        tmp = this.result;

        if (tmp.includes('+')) {
          arrayOfStrings = tmp.split('+');
          x = parseInt(arrayOfStrings[0], 2);
          y = parseInt(arrayOfStrings[1], 2);
          sum = x + y;
          this.result = sum.toString(2);

        } else {

          arrayOfStrings = tmp.split('-');
          x = parseInt(arrayOfStrings[0], 2);
          y = parseInt(arrayOfStrings[1], 2);
          sum = x - y;
          this.result = sum.toString(2);
        }
      }
    }
  }*/
}

