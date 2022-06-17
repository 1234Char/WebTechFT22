import {Component, Input, OnInit} from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {GlobalConstants} from "../../../../../common/GlobalConstants";
import {Router} from "@angular/router";


@Component({
  selector: 'app-filter-slide',
  templateUrl: './filter-slide.component.html',
  styleUrls: ['./filter-slide.component.css']
})
export class FilterSlideComponent implements OnInit {
  @Input() category: string;
  faMinus = faMinus;

  minValueField: number = 2000;
  maxValueField: number = 2022;

  floorValue: number = 1900;
  ceilValue: number = 2030;

  minValueSlider: number = this.minValueField;
  maxValueSlider: number = this.maxValueField;
  options: Options = {
    floor: this.floorValue,
    ceil: this.ceilValue
  }

  constructor(private router: Router) {
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

    this.minValueSlider = this.minValueField;
    this.maxValueSlider = this.maxValueField;
  }

  addFilterOption() {
    if (this.category === "Jahr") {
      GlobalConstants.yearParam = `f.dateIssued=%5B${this.minValueField}%20TO%20${this.maxValueField}%5D,equals`;
      this.search();
    }
  }

  private search() {
    this.router.navigate(["/query"]);
  }
}
