class App{
  constructor(name,email,age,location){
      this.name = name;
      this.email = email;
      this.age = age;
      this.location = location;

  }
   renderHTML() {
      document.getElementById("name").innerHTML = change.name;
document.getElementById("email").innerHTML = change.email;
document.getElementById("age").innerHTML = change.age;
document.getElementById("location").innerHTML = change.location;
document.getElementById("profile-pic").src = "ảnh.jpg"
   }
  }
      var change = new App("Nguyễn Thảo Ngọc","thaongoc43@gmail.com",17,"LĐ");
      change.renderHTML();