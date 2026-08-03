import type { Country } from "../types/types";

const LOADING_DELAY_MS = 500;

class Api {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  private async handleResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
      return await res.json();
    }
    throw new Error(`Error: ${res.status}`);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getCountryById(id: string): Promise<Country> {
    const countries = await this.getAllCountries();
    const country = countries.find(
      (c) => c.cca3.toLowerCase() === id.toLowerCase(),
    );
    if (!country) {
      throw new Error(`Error: país no encontrado (${id})`);
    }
    return country;
  }

  async getAllCountries(): Promise<Country[]> {
    await this.delay(LOADING_DELAY_MS);
    const res = await fetch(`${this.baseUrl}countries.json`, {
      headers: this.headers,
    });
    return await this.handleResponse<Country[]>(res);
  }
}

const api = new Api(import.meta.env.BASE_URL);

export default api;
