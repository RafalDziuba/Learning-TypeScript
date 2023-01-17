class Department {
  // private name: string;
  // private id: string;

  //table, which contains only string values
  private employees: string[] = [];

  // constructor(n: string, id: string) {
  //   this.name = n;
  //   this.id = id;
  // }

  //SHORT INITIALIZATION
  // with below line it's not necessery to init variables "directly in class", we can
  // do this in constructor, but we need to provide name of variable and type
  constructor(private name: string, private id: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(`There is: ${this.employees.length} employees`);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    //super keyword execute/call constructor from base class
    super('IT', id);
  }
}

const accounting = new Department('Accounting', 'd1');
const it = new ITDepartment('d2', ['Me', 'Also Me'])

accounting.addEmployee('The Guy');
it.addEmployee('The Girl');
//adding employee without addEmployee function
// accounting.employees[2] = 'The next one'
// ... and it's not working, if we add 'private' before employees table initialization !!!
accounting.describe();

accounting.printEmployeeInfo();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

console.log(it);
// accountingCopy.describe();

// TO DO: ADD ACCOUNTING DEPARTMENT