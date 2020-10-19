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

function getStudents(){
    setTimeout(()=>{
        const studentId = [112, 115, 118];
        console.log(studentId);
            
            setTimeout(id =>{
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
