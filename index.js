const inquirer = require('inquirer')
const art = require('ascii-art');


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

                case 'Add Employee':

                case 'Update Employee':

                case 'View All Roles':

                case 'Add Role':

                case 'View All Departments':

                case 'Add Department':

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
            // Something else went wrong
            }
        });
}