import { Project, ProjectStatus } from "../models/project";

// Project State Management
// イベントリスナーの型
type Listener<T> = (items: T[]) => void;

class State<T> {
  // 登録されたイベントリスナーを管理する
  protected listeners: Listener<T>[] = [];
  // イベントリスナーを登録するためのメソッド
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  // 登録されたProjectを管理する
  private projects: Project[] = [];
  // シングルトン
  private static instance: ProjectState;

  // シングルトンのため、private
  private constructor() {
    super();
  }

  // このインスタンスは常に一つしか存在できない
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  // プロジェクトを登録するメソッド
  addProject(title: string, description: string, manday: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    // 登録されたイベントリスナーを実行する
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
