let student =[
    { "first_name": "Armen", "last_name": "Amiryan", "age": "33" },
    { "first_name": "Karine", "last_name": "Karapetyan", "age": "23" },
    { "first_name": "Manushak", "last_name": "Voskanyan", "age": "20" },
    { "first_name": "Eghiazar", "last_name": "Avetisyan", "age": "18" },
    { "first_name": "Hrant", "last_name": "Tokhatyan", "age": "22" },
    { "first_name": "Zarzand", "last_name": "Mnatsakanyan", "age": "66" },
    { "first_name": "Murad", "last_name": "Muradyan", "age": "58" },
    { "first_name": "Ashkhen", "last_name": "Khanamiryan", "age": "48" }
]
let newList=[]

function newStudentList(student){
      for (let i = 0; i < student.length; i++){
          const element = student[i];
          newList.push(element.first_name + " " + element.last_name)
      }
      return newList
}
console.log( newStudentList(student))


