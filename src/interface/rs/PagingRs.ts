export default interface PagingRs {
  pageInfo: PageInfoDto;
}

interface PageInfoDto {
  pageNumber: number;
  pageSize: number;
  totalContent: number;
  totalPage: number;
}
