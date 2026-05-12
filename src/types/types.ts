export interface Country {
  name: {
    common: string;
  };
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
