import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  @Input() isBackdropVisible = false;
  @Output() isBackdropClosed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  closeBackdrop(): void {
    this.isBackdropClosed.emit(true);
  }

}
