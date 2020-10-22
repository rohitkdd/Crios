import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isDownloadTemplate = false;
  constructor() { }

  ngOnInit(): void {
  }

  openDownloadModal(event): void {
    this.isDownloadTemplate = event;
  }

  closeBackdropAndModal(): void {
    this.isDownloadTemplate = false;
  }

}
