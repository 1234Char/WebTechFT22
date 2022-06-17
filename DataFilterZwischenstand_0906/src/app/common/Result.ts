export interface Result{
  rId?: number,
  rTitle: string,
  rAuthor: string,
  rYear: any,
  rShort: string,
  rFull:string;
}
export class ResultEntry implements Result{
  rAuthor: string;
  rFull: string;
  rShort: string;
  rTitle: string;
  rYear: any;


  constructor(rAuthor: string, rFull: string, rShort: string, rTitle: string, rYear: any) {
    this.rAuthor = rAuthor;
    this.rFull = rFull;
    this.rShort = rShort;
    this.rTitle = rTitle;
    this.rYear = rYear;
  }
}
