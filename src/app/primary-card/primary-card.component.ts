import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.css']
})
export class PrimaryCardComponent {
  constructor(public commonserv:CommonService) { }

  @Input({required:true}) head!: string;
  @Input() color!: string;
  @Output() buttonClick = new EventEmitter<string>(); 
  @Input() wordsLength:any;


  onClick() {
    this.buttonClick.emit(this.head);
    this.wordsLength=this.commonserv.wordsCount(this.head)
  }



}
