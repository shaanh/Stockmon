import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice';
import { StockService } from '../stockservice';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  
  selectedStock: Object;
  test;
  dataSource: Object;
  selectedTime = "1y";
  constructor(public stockService: StockService, private authService: AuthService) { }

  show = 1;

  inFocus;
  gainers;
  losers;
  following;
  description;
  inFocusErrorMessage = "";
  gainerErrorMessage = "";
  loserErrorMessage = "";
  followingErrorMessage = "";
  descriptionErrorMessage = "";

  ngOnInit() {
    this.stockService.getInfocus()
      .subscribe(data => {
        this.inFocus = data;
        this.inFocus = JSON.parse(this.inFocus._body);
        console.log(this.inFocus[0]);
      });
    if (this.inFocus.length === undefined) {
      this.inFocusErrorMessage = "The top-performing stocks could not be displayed.";
    }
    this.stockService.getGainers()
      .subscribe(data => {
        this.gainers = data;
        this.gainers = JSON.parse(this.gainers._body);
        console.log(this.gainers[0]);
      });
    if (this.gainers.length === undefined) {
      this.gainerErrorMessage = "The stock gainers could not be displayed.";
    }
    this.stockService.getLosers()
      .subscribe(data => {
        this.losers = data;
        this.losers = JSON.parse(this.losers._body);
        console.log(this.losers[0]);
      });
    if (this.losers.length === undefined) {
      this.loserErrorMessage = "The stock losers could not be displayed.";
    }
      this.stockService.getFollowingList(this.authService.getUserId())
        .subscribe(data => {
          this.following = data;
        this.following = JSON.parse(this.following._body);
        console.log(this.following);
      });
      if (this.following.length === undefined) {
        this.followingErrorMessage = "You are not following anything.";
      }
    this.stockService.getDescription()
      .subscribe(data => {
      this.description = data;
        this.description = JSON.parse(this.description._body);
        console.log(this.description[0]);
      });
    if (this.description.length === undefined) {
      this.descriptionErrorMessage = "The stock description could not be displayed.";
    }
      this.stockService.getChartData("aapl", "1y")
      .subscribe(data => {
        this.test = data;
        this.test = JSON.parse(this.test._body);
});
    
  }

  onSelect(stock: Object):void {
    this.selectedStock = stock;
} 


 setTime(time: string):void {
  this.selectedTime = time;
}
}
