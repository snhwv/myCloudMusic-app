import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {
  @Input() recommends;
  @Input() type;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
