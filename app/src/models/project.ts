// Project Type
// Projectのステータスを管理するためのEnum
export enum ProjectStatus {
  Active,
  finished,
}

// プロジェクトのインスタンスを作成するためのクラス
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public manday: number,
    public status: ProjectStatus
  ) {}
}
