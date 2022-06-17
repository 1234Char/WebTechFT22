export interface Statistic {
  sLabel: string;
  sCount: number;
}

export class StatisticEntry implements Statistic{
  sLabel: string;
  sCount: number;

  constructor(sId: string, sCount: number) {
    this.sCount = sCount;
    this.sLabel = sId;
  }
}
