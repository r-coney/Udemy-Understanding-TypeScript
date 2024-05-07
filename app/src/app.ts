class Department {
    // private readonly id: string;
    // name: string; // フィールド
    private employees: string[] = [];

    constructor(
        private readonly id: string,
        public name: string
    ) {} // コンストラクタ

    describe(this: Department) { // メソッド 「this: Department」で明示的にthisの型を指定し、型の安全せいを高めている
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployees(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("d1", "Accounting"); // インスタンス作成

accounting.addEmployees("Max");
accounting.addEmployees("Manu");

accounting.describe(); // メソッド呼び出し
accounting.printEmployeeInformation();