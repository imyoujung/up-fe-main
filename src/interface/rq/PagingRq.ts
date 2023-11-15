export default class PagingRq {
  pageNumber: number;
  pageSize: number;
  sort: SortType[] = [];

  constructor(rq: PagingRq) {
    this.pageNumber = rq.pageNumber;
    this.pageSize = rq.pageSize;
    this.sort = rq.sort;
  }
}

export const SortTypeEnum = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export type SortType = keyof typeof SortTypeEnum;
