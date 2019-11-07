import {Component} from '@angular/core';
import {logger} from 'codelyzer/util/logger';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amiwCalculator';

  public result = '';

  clearAll() {
    if (this.result !== '') {
      this.result = '';
    }
  }

  operationResult() {
    if (this.result !== '') {
      if ((!this.result.endsWith('+') && !this.result.endsWith('-')) &&
        (this.result.includes('+') || this.result.includes('-'))) {
        var tmp = this.result;
        var arrayOfStrings;
        if (tmp.includes('+')) {
          arrayOfStrings = tmp.split('+');
          var x = parseInt(arrayOfStrings[0], 2);
          var y = parseInt(arrayOfStrings[1], 2);
          var sum = x + y;
          this.result = sum.toString(2);
        } else {
          arrayOfStrings = tmp.split('-');
          var x = parseInt(arrayOfStrings[0], 2);
          var y = parseInt(arrayOfStrings[1], 2);
          var sum = x - y;
          this.result = sum.toString(2);
        }
      }
    }
  }

  addPlus() {
    if (!this.result.includes('+') && !this.result.includes('-')) {
      this.result += '+';
    }
  }

  addMinus() {
    if (!this.result.includes('+') && !this.result.includes('-')) {
      this.result += '-';
    }
  }

  addOne() {
    this.result = this.result + '1';
  }

  addZero() {
    this.result = this.result + '0';
  }

  noNumber(e: KeyboardEvent) {
    console.log(e);
    if (e.key !== '0' && e.key !== '1') {
      e.preventDefault();
    }
    console.log(e.keyCode);
  }
}

