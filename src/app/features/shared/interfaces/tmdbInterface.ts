export interface VideoSearchListResponse {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: [
    {
      kind: string;
      etag: string;
      id: {
        kind: string;
        videoId: string;
      };
    }
  ]
}
