/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу

  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

// =====================================================
const manager = new Manager("Jack", "Rock", 90);
console.log("manager", manager);
manager.name = "Black";

const employee = new Employee("Liza", "middle", 33);
console.log("employee", employee.getEmployeeDetails());
console.log("manager", manager.getEmployeeDetails());
