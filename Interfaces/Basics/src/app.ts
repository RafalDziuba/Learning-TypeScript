class Department {
  name: string;

  //table, which contains only string values
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(`There is: ${this.employees.length} employees`);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('The Guy');
accounting.addEmployee('The Girl')

//adding employee without addEmployee function
// accounting.employees[2] = 'The next one'
// ... and it's not working, if we add 'private' before employees table initialization !!!
accounting.describe();

accounting.printEmployeeInfo();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
