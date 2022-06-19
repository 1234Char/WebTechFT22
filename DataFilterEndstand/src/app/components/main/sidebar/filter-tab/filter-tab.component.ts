import {Component, Input} from '@angular/core';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css']
})
export class FilterTabComponent {
  @Input() category: string;
  isVisible: boolean = false;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  toggleView(): void {
    this.isVisible = !this.isVisible;
  }
}
