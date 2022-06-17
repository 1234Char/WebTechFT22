import {Component, Input, OnInit} from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";
import {faMinus} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-filter-slide',
  templateUrl: './filter-slide.component.html',
  styleUrls: ['./filter-slide.component.css']
})
export class FilterSlideComponent implements OnInit {
  @Input() category: string;
  faMinus=faMinus;
  anfrage: string= "https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects?f.dateIssued=%5B2030%20TO%202045%5D,equals";

  minValueField: number=1000;
  maxValueField: number=10000;

  floorValue: number = 1900;
  ceilValue: number = 2030;

  minValueSlider: number = 2000;
  maxValueSlider: number = 2022;
  options: Options = {
    floor: this.floorValue,
    ceil: this.ceilValue
  }
  constructor() {
  }

  ngOnInit(): void {

  }

  updateFieldValues() {
    this.minValueField = this.minValueSlider;
    this.maxValueField = this.maxValueSlider;
  }

  inputMin(event: any) {
    this.minValueField = event.target.value;
    if (this.minValueField >= 1000 && this.minValueField <= 10000) {
      this.updateSlider();
    }
  }

  inputMax(event: any) {
    this.maxValueField = event.target.value;
    if (this.maxValueField >= 1000 && this.maxValueField <= 10000) {
      this.updateSlider();
    }
  }

  updateSlider() {
    if (this.minValueField < this.floorValue) {
      this.minValueField = this.floorValue;
    } else if (this.minValueField > this.ceilValue) {
      this.minValueField = this.ceilValue;
    }

    if (this.maxValueField < this.floorValue) {
      this.maxValueField = this.floorValue;
    } else if (this.maxValueField > this.ceilValue) {
      this.maxValueField = this.ceilValue;
    }

    this.minValueSlider=this.minValueField;
    this.maxValueSlider=this.maxValueField;
  }
}
