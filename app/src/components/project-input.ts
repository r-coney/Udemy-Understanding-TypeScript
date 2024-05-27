import Component from "./base-component";
import * as Validation from "../util/validation";
import { autobind as Autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";
// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    // titleのinput要素を取得
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    // descriptionのinput要素を取得
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    // mandayのinput要素を取得
    this.mandayInputElement = this.element.querySelector(
      "#manday"
    ) as HTMLInputElement;

    // Formにイベントリスナーを登録する
    this.configure();
  }

  // Formにイベントリスナーとイベントハンドラを登録する
  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredManday = this.mandayInputElement.value;
    const titleValidatable: Validation.Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validation.Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const mandayValidatable: Validation.Validatable = {
      value: +enteredManday,
      required: true,
      min: 1,
      max: 1000,
    };

    if (
      !Validation.validate(titleValidatable) ||
      !Validation!.validate(descriptionValidatable) ||
      !Validation!.validate(mandayValidatable)
    ) {
      alert("入力値が正しくありません。再度お試しください。");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredManday];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.mandayInputElement.value = "";
  }

  // Formのイベントハンドラ
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, manday] = userInput;
      projectState.addProject(title, description, manday);
      this.clearInput();
    }
  }
}
