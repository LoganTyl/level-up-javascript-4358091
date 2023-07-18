// Write your code here
getStudents = (classroom) => {
  // let hasTeachingAssistant = classroom.hasTeachingAssistant;
  // let classList = classroom.classList;

  let {hasTeachingAssistant, classList} = classroom;

  let [teacher, ...classListWithoutTeacher] = classList

  if(!hasTeachingAssistant) {
    return classListWithoutTeacher;
  }
  let [ta, ...classListWithoutTA] = classListWithoutTeacher
  return classListWithoutTA;
}

const classA = {
  hasTeachingAssistant: false,
  classList: [
    "Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"
  ]
}

console.log(getStudents(classA));