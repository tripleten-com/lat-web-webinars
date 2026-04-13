class Student {
  private name: string;
  private group: number;
  private profession: string;
  private trainingDuration: number;

  constructor(
    name: string,
    group: number,
    profession: string,
    trainingDuration: number,
  ) {
    this.name = name;
    this.group = group;
    this.profession = profession;
    this.trainingDuration = trainingDuration;
  }

  generateCard(): HTMLElement {
    const template = document.querySelector(
      "#card-template",
    ) as HTMLTemplateElement;
    const element = template.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    const cardTitle = element.querySelector(".card-title") as HTMLElement;
    const cardGroup = element.querySelector(".card-group") as HTMLElement;
    const cardProfession = element.querySelector(
      ".card-profession",
    ) as HTMLElement;
    const cardDuration = element.querySelector(".card-duration") as HTMLElement;

    cardTitle.textContent = this.name;
    cardGroup.textContent = `Grupo ${this.group}`;
    cardProfession.textContent = this.profession;
    cardDuration.textContent = `${this.trainingDuration} meses`;

    return element;
  }
}

class WebDeveloperStudent extends Student {
  constructor(name: string, group: number) {
    super(name, group, "Desarrollador Web", 10);
  }
}

class PythonDeveloperStudent extends Student {
  constructor(name: string, group: number) {
    super(name, group, "Desarrollador Python", 9);
  }
}

class DesignerStudent extends Student {
  constructor(name: string, group: number) {
    super(name, group, "Diseñador", 6);
  }
}

const student1 = new WebDeveloperStudent("Wendy Webberton", 1);
const student2 = new PythonDeveloperStudent("Peter Pythonson", 2);
const student3 = new DesignerStudent("Debbie Designerperson", 3);

function renderStudentsList(students: Student[]): void {
  students.forEach((student) => {
    const card = student.generateCard();
    document.body.append(card);
  });
}

renderStudentsList([student1, student2, student3]);
