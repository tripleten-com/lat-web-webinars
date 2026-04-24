import type { PostData, UserData } from "../types/types.js";

export class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
      return await res.json();
    }
    throw new Error(`Error: ${res.status}`);
  }

  async getUserInfo(): Promise<UserData> {
    const res = await fetch(`${this.baseUrl}/users/1`);
    return await this.handleResponse<UserData>(res);
  }

  async getInitialPosts(): Promise<PostData[]> {
    const res = await fetch(`${this.baseUrl}/posts`);
    return await this.handleResponse<PostData[]>(res);
  }

  async updateUserInfo(data: {
    name: string;
    username: string;
    email: string;
  }): Promise<UserData> {
    const res = await fetch(`${this.baseUrl}/users/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await this.handleResponse<UserData>(res);
  }

  async addPost(data: { title: string; body: string }): Promise<PostData> {
    const res = await fetch(`${this.baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await this.handleResponse<PostData>(res);
  }
}
