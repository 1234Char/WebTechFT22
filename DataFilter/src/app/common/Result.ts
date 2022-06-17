export interface Result{
  rId?: number,
  rTitle: string,
  rAuthor: string,
  rYear: any,
  rShort: string,
  rDSpaceLink: string;
  rFile: boolean
}
export class ResultEntry implements Result{
  rAuthor: string;
  rDSpaceLink: string;
  rShort: string;
  rTitle: string;
  rYear: any;
  rFile: boolean;


  constructor(rAuthor: string, rDSpaceLink: string, rShort: string, rTitle: string, rYear: any, rFile: boolean) {
    this.rAuthor = rAuthor;
    this.rDSpaceLink = rDSpaceLink;
    this.rShort = rShort;
    this.rTitle = rTitle;
    this.rYear = rYear;
    this.rFile = rFile;
  }
}
