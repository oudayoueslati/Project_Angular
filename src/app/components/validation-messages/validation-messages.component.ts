import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent {
  @Input() errors: any;
  @Input() touched: boolean = false;
  @Input() dirty: boolean = false; 


}
