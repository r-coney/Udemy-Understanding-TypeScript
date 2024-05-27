// Component Class
export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    // Formのtemplate要素を取得
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    // 要素を表示するDivタグを取得
    this.hostElement = document.getElementById(hostElementId)! as T;

    // templateタグの中にある要素を読み込む
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // 上記で読み込んだ要素の実際のHTML要素を取得する
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  abstract configure(): void;
  abstract renderContent(): void;

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "beforebegin" : "beforeend",
      this.element
    );
  }
}
