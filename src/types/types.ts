export interface Country {
  cca3: string;
  translations: {
    spa: {
      common: string;
    };
  };
  flags: {
    svg: string;
  };
  capital?: string[];
  population: number;
  area: number;
}
