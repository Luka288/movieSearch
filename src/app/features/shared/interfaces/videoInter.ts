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
    videos: [
      {
      name: string,
      iso_639_1: string,
      iso_3166_1: string,
      key: string,
      site:string,
      size: string,
      type: string,
      official: boolean,
      published_at: string,
      id: string,
      }
    ];
    vote_average: number;
    vote_count: number;
  }
  