import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() isDownloadTemplate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getTemplate(): void {
    console.log('in get template');
    this.isDownloadTemplate.emit(true);
  }

}
