class school{
    name: string
    students: student[]=[];
    teachers: teacher[]=[];

    addStudent(stdObj:student){
        this.students.push(stdObj)
    }
    addTeacher(teacherObj:teacher){
        this.teachers.push(teacherObj)
    }

    constructor(name:string){
        this.name=name;
    }
}
 class student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
    }
 }
 class teacher extends student{}


let school1 = new school("Senecca Academy")
let school2 = new school("Nasra School")

let s1 = new student("Arsalan",35,school1.name)
let s2 = new student("Liban",9,school2.name)
let s3 = new student("Azlaan",5,school2.name)

let t1 = new teacher("Sir Imran Ali",45,school1.name)
let t2 = new teacher("Sir Hamza",22,school2.name)
let t3 = new teacher("Sir Okasha",22,school2.name)


school1.addStudent(s1)
school2.addStudent(s2)
school2.addStudent(s3)

school1.addTeacher(t1)
school2.addTeacher(t2)
school2.addTeacher(t3)


console.log(school1);
console.log(school2);