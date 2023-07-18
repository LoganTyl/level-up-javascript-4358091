// Write your code here
class User {
  #username;
  #password;
  
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
}

const testUser = new User("John", "Smith", 30);
console.log(testUser.username);
console.log(testUser.password);
console.log(testUser.age);