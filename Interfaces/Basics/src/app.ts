class Department {

  // private name: string;
  // private id: string;

  //table, which contains only string values
  protected employees: string[] = [];

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

    //CANE USE STATIC METHODS / PROPERTIES HERE
  }

  //we can access createEmployee method without instantiating class, because of STATIC keyword
  // SAME FOR VARIABLES
  
  static createEmployee(name: string) {
    return { name: name };
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

class Accounting extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Report is null');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super('Accounting', id);
    this.lastReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === 'Rafal') {
      return;
    }
    //we can do this, because PRIVATE was changed to PROTECTED
    this.employees.push(employee);
  }

  addReport(content: string) {
    this.reports.push(content);
    this.lastReport = content;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Rafal');

const it = new ITDepartment('d2', ['Me', 'Also Me']);
const accounting = new Accounting('Accounting', ['Report1', 'Report2']);
// accounting.addEmployee('The Guy');
it.addEmployee('The Girl');
//adding employee without addEmployee function
// accounting.employees[2] = 'The next one'
// ... and it's not working, if we add 'private' before employees table initialization !!!
// accounting.describe();

// accounting.printEmployeeInfo();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

console.log(it);
console.log(accounting.mostRecentReport);

//we can do this because of SETTER
accounting.mostRecentReport = 'Added from setter';
// accountingCopy.describe();

// GETTERS AND SETTERS AND USEFUL WHEN WE WANT TO ADD OR GET PROPERTY WITH SOME EXTRA LOGIC
