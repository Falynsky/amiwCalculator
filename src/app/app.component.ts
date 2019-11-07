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

  clickMessage = '';
  public val = 3;
  public result = '';
  private val1: number;
  private val2: number;

  addOne() {
    this.result = this.result + '1';
  }

  addZero() {
    this.result = this.result + '0';
  }

  clearAll() {
    this.result = '';
    this.val1 = 0;
    this.val2 = 1;
  }

  noNumber(e: KeyboardEvent) {
    console.log(e);
    if (e.key !== '0' && e.key !== '1') {
      e.preventDefault();
    }
    console.log(e.keyCode);
  }

  operationResult() {
    this.result = '';
  }
}

