export interface Video {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any; 
    budget: number;
    genres: string[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: string[];
    production_countries: string[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: string[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: {
      results: resultsInt[]
    };
    vote_average: number;
    vote_count: number;
  }


  export interface resultsInt {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
  }
