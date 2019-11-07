import { Component } from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amiwCalculator';

  clickMessage = '';

  clickMe() {
    this.clickMessage = 'TEST';
    logger.error();
  }
}

