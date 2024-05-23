import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  case : String = '';
  clickHistory : boolean = true ;
  clickCloud : boolean = false ;
  clickNetwork : boolean = false ;

  OnHistoryClick(){
    this.case = 'history';
    this.clickHistory = true;
    this.clickCloud = false;
    this.clickNetwork = false;
  }
  OnCloudClick(){
    this.case = 'cloud';
    this.clickHistory = false;
    this.clickCloud = true;
    this.clickNetwork = false;
  }
  OnNetworkClick(){
    this.case = 'network';
    this.clickHistory = false;
    this.clickCloud = false;
    this.clickNetwork = true;
  }
}
