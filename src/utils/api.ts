import type { Country } from "../types/types";

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

  async getCountryById(id: string): Promise<Country> {
    const res = await fetch(`${this.baseUrl}/alpha/${id}`, {
      headers: this.headers,
    });
    const data = await this.handleResponse<Country[]>(res);
    return data[0];
  }

  async getAllCountries(): Promise<Country[]> {
    const res = await fetch(
      `${this.baseUrl}/region/americas?fields=name,flags,cca3,translations,capital,population`,
      {
        headers: this.headers,
      },
    );
    return await this.handleResponse<Country[]>(res);
  }
}

const api = new Api("https://restcountries.com/v3.1");

export default api;
