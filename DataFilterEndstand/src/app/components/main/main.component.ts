import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../common/GlobalConstants";
import {ProposalService} from "../../services/proposal/proposal.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private proposalService: ProposalService) {
  }

  ngOnInit(): void {
    this.proposalService.getTopOfCategory("author", GlobalConstants.authorOptions);
    this.proposalService.getTopOfCategory("has_content_in_original_bundle", GlobalConstants.hasContentOptions);
  }
}
