import {Component} from "@angular/core";
import { AppService } from '../app/app.service';

@Component({
  selector:'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.css' ]
})
export class ItemComponent{

  items:object[];
  constructor(appService:AppService)
  {
    this.items=appService.getItems();
  }
  
}