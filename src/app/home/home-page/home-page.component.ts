import { Component, OnInit } from '@angular/core';

import { Exchange } from '../../exchange';
import { ExchangeService } from '../../exchange.service';
import { ClockService } from "../../clock.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  exchanges: Exchange[] = [];
  myDate: Date;

  constructor(private exchangeService: ExchangeService,
              private clockService: ClockService
             ) {}

  ngOnInit(): void {
    this.exchangeService.getExchanges()
      .then(exchanges => this.exchanges = exchanges);

    this.clockService.utcTime(this.exchanges);
    setInterval(() => {
      this.myDate = this.clockService.utcTime(this.exchanges)[0];
      this.exchanges = this.clockService.utcTime(this.exchanges)[1];
    }, 1000);

    this.clockService.fetchExchanges();
  }

  buttonTest(): any {
    this.clockService.testingfunction();
  }
}