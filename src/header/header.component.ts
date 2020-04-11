import {Component} from "@angular/core";
import { AppService } from '../app/app.service';


@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent{
  title="EasyBuy";
  HeaderLink:object[];
  constructor(appService:AppService)
  {
    this.HeaderLink=appService.getHeaderLink();
  }
}