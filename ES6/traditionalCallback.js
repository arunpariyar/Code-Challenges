/* // Set Timeout example to understand Async Js
const second = () => {
    setTimeout(() => {
        console.log("Async Hey There");
    }, 2000);
}

const first = () => {
    console.log("Hey There");
    second();
    console.log("The End");
}

first(); */

// **********Traditional JavaScript CallBack********

//The triangular patten that comes about from making use of several callbacks is called the Call Back Hell

/* const getStudents = () => {
    setTimeout(() => {
        const studentId = [112, 115, 118];
        console.log(studentId);
            
            setTimeout(id => {
                const student1 = {
                    name:'John Smith',
                    school:'School Of Life'
                };
                console.log(`${id}: ${student1.name}`);
                    
                    setTimeout(school => {
                        const student2 = {
                            name:'Sam Harrow',
                            school:'School Of Life'
                        }
                        console.log(student2);
                    },1500,student1.school)

            },1500,studentId[1])
    },2000);
}

getStudents();
 */

// ********** JAVASCRIPT PROMISE ********

const getStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['James', 'Harry', 'Sally', 'Rita']);
    }, 2000)
});

const getStudent = studentID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const student1 = {
                no: '1',
                name: 'Harry Smith',
                school: 'School Of Life'
            };
            resolve(`${student1.no}: ${student1.name}`);
        }, 1500, studentID)
    });
};

const getSchool = school => {
    return new Promise((resolve, reject)=>{
        setTimeout(id =>{
            const student1 = {
                no: '1',
                name: 'Harry Smith',
                school: 'School Of Life'
            };
            resolve(`${student1.no}: ${student1.school}`);
        },1500,school)
    })

}

getStudents
    .then(names => {
        console.log(names);
        return getStudent(names[2]);
        
    })
    .then(student => {
        console.log(student)
        return getSchool(student);
    })
    .then(school => {
        console.log(school);
    })
    .catch(error => {
        console.log('There was an Error!!');
    })
