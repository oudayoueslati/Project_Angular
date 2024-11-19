import { Component,EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent {

  @Input() errors: any;
  @Input() touched: boolean = false;
  @Input() dirty: boolean = false; 

}
