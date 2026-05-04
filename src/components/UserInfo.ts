interface UserData {
  name: string;
  goal: string;
}

interface UserInfoSelectors {
  nameSelector: string;
  goalSelector: string;
}

export class UserInfo {
  private nameElement: HTMLElement;
  private goalElement: HTMLElement;

  constructor({ nameSelector, goalSelector }: UserInfoSelectors) {
    this.nameElement = document.querySelector(nameSelector) as HTMLElement;
    this.goalElement = document.querySelector(goalSelector) as HTMLElement;
  }

  getUserInfo(): UserData {
    return {
      name: this.nameElement.textContent || "",
      goal: this.goalElement.textContent || "",
    };
  }

  setUserInfo({ name, goal }: UserData): void {
    this.nameElement.textContent = name;
    this.goalElement.textContent = `Meta: ${goal}`;
  }
}
