const inquirer = require('inquirer')
const art = require('ascii-art');
const db = require('./db/db')


art.font("Employee Manager", 'doom', (err, rendered)=>{
    if (err) {
        console.log(err);
    }else {
        console.log('\n\n\n\n\n' + '_'.repeat(102) + '\n\n')
        console.log(rendered)
        console.log('_'.repeat(102) + '\n')
        mainPromt();
    }
});

const mainPromt = () => {
    
    
    inquirer
        .prompt([
            {
                name:'quest',
                type:'list',
                message:'What do you want to do?',
                choices:[
                    'View All Employees',
                    'Add Employee',
                    'Update Employee',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department',
                    'Quit',
                ]
            }
        ])
        .then((answers) => {
            switch (answers.quest) {
                case 'View All Employees':
                    return viewAllEmployees();

                case 'Add Employee':
                    return addEmployee();

                case 'Update Employee':
                    return updateEmployee();

                case 'View All Roles':
                    return viewAllRoles();

                case 'Add Role':
                    return addRole();

                case 'View All Departments':
                    return viewAllDepartments();

                case 'Add Department':
                    return addDepartment()

                case 'Quit':
                    art.font("GoodBye", 'doom', (err, rendered)=>{
                        if (err) {
                            console.log(err);
                        }else {
                            console.log('\n\n\n\n\n' + '_'.repeat(48) + '\n\n')
                            console.log(rendered)
                            console.log('_'.repeat(48) + '\n')
                        }
                    });
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            console.log(error)
            } else {

            }
        });
}

function viewAllEmployees(){
    let query = 'SELECT employees.id AS ID, employees.first_name AS FirstName, employees.last_name AS LastName, roles.title AS Job, departments.name AS Department, roles.salary AS Salary FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON departments.id = roles.department_id '
    db.query(query, (err, res) => {
        if(err) throw err;
        console.table(res);
        mainPromt();
    })
}

 async function addEmployee() {

    jobarr = [];
    newjob = [];

    roles = db.query(`SELECT roles.title AS title, roles.id AS id FROM roles`, (err, res) => {
        if (err) throw err
        jobarr = res;
        
        for (i = 0; i < jobarr.length; i++) {
            newjob.push(jobarr[i].title)
        }

        console.log(newjob)

     inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is their first name? "
          },
          {
            type: "input",
            name: "last_name",
            message: "What is their last name? "
          },
          roleId = {
            type: "list",
            name: "role_id",
            message: "What is their role? ",
            choices: newjob
          },
        ])
        .then(response => {

            let addRole = response.role_id;
            let addRoleId = newjob.indexOf((addRole));
            addRoleId++;
            let manager = 0;


            let query3 = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${response.first_name}', '${response.last_name}', '${addRoleId}', '${manager}')`
            
            db.query(query3, (err, res) => {
                if (err) throw err;
                console.log(`\n The employee has been added to the DB \n`)
                mainPromt();
            });
            
        })
    
    })
  }

function updateEmployee(){
    
}

function viewAllRoles(){
    let query = "SELECT roles.title As Job, roles.id AS ID, departments.name AS Department,roles.salary AS salary FROM roles JOIN departments ON roles.department_id = departments.id";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainPromt();
    });
};

function addRole(){
    let query1 = `SELECT * FROM departments`

    db.query(query1, (err, res) => {

   


    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the new job?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'How much is the salary'
            },
            {
                name: 'Depart',
                type: 'list',
                choices: res
            }
        ])
    })
}

function viewAllDepartments(){
    let query = `SELECT departments.name AS Department, departments.id AS ID FROM departments`;
    db.query(query, (err, res) => {
        if(err) throw err;
        console.table(res);
        mainPromt();
    });
};

function addDepartment(){
    
    inquirer
        .prompt([
            {
                name: 'departName',
                type: 'input',
                message: 'What is the department name?'
            }
        ])
        .then((response) => {
            query = `INSERT INTO departments (name) VALUES ('${response.departName}')`
            db.query(query, err => {
                if (err) throw err;
                console.log(`\n The Department has been created! \n`)
                mainPromt();
            })
        })
};

