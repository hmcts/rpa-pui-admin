import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.scss']
})
export class TransactionsPanelComponent implements OnInit {

  @Input() panelData;

  constructor() { }

  ngOnInit() {
  }

}
