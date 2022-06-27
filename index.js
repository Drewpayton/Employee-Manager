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
                    return addEmployee()

                case 'Update Employee':
                    return updateEmployee()

                case 'View All Roles':
                    return viewAllRoles()

                case 'Add Role':
                    return addRole()

                case 'View All Departments':
                    return viewAllDepartments()

                case 'Add Department':
                    return addDepartment

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
    let query = 'SELECT employees.id AS ID, employees.first_name AS FirstName, employees.last_name AS LastName, roles.title AS Job, roles.salary AS Salary, departments.name AS Department FROM employees JOIN roles ON employees.role_id = roles.roles_id JOIN departments ON roles.department_id = departments.id'
    db.query(query, function (err, res){
        if(err) throw err;
        console.table(res);
        mainPromt()
    })
}

function addEmployee(){
    
}

function updateEmployee(){
    
}

function viewAllRoles(){
    let query = "SELECT roles.title AS Title, roles.salary AS Salary FROM roles;";
    db.query(query, function (err, res){
        if (err) throw err;
        console.table(res);
        mainPromt();
    });
};

function addRole(){
    
};

function viewAllDepartments(){
    
};

function addDepartment(){
    
};

