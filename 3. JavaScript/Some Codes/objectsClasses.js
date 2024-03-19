//Simple way top define an Object
/* const studentObj = {
    studName: "Hirtik", // State/Property
    rollNo: 210170107030, // State/Property
    marksSPI: 8.20, // State/Property
    //Following is Behaviour/Methods
    printMarkSPI: function () {
        console.log("SPI is ", this.marksSPI);
    }
};
*/

/*
//Following object only defines the properties/methods can employee have.
//First we have employee object and calculateTax function in it and want use employee's properties/Methods in any other object we have to make prototype of employee object and that will have all the methods and properties. 
const employee = {
    calculateTax: function (salary) {
        console.log("Tax is", salary * 0.1); //10% Tax
    }
};

//I am an employee, Hirtik!
//I just have my property salary.
const employeeHirtik = {
    salary: 100000,
};

//But I want to calculate tax on my salary. but the method is in employee function. so we can make use of it by setting up employee as an prototype by using __proto__

employeeHirtik.__proto__ = employee; //This will bring all the methods and properties of employee object and we can use it in employeeHirtik.

//Calculating tax 
employeeHirtik.calculateTax(employeeHirtik.salary);

//We can have many employees we can make use of properties/methods of employee object.

//Extra Example 
const employeeHitesh = {
    salary: 90000,
};
employeeHitesh.__proto__ = employee;
employeeHitesh.calculateTax(employeeHitesh.salary);
*/

class Parent {
    eat() {
        console.log("Eating");
    }
    sleep() {
        console.log("Sleeping");
    }
}

class children extends Parent {
    sleep() {
        console.log("Sleeping");
    }
}

let children1 = new children();
children1.eat();