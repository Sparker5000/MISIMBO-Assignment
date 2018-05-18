import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

users = [
		{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	];






  createUser(user) {
    user._id - Math.random() * Math.floor(10000);
    this. user.push(user);
    console.log(users);
       return user;
    }
    
  

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].id=== userId) { 
      	return this.users[x];
  }

 }

}


  findUserByUsername(username: string) {
  for (var x = 0; x<; this.user.length; x++) {
  	 	if(this.user{x}.username === username) {
  	 		return this.users[x];
  	 	}
  	 	
    }
  	 		// code...
}  	 	 
   

  findUserByCredentials(username: string, password: string) { 
  for (let x = 0; x < this.user.length; x++) {
  	 	if(this.user{x}.username === username && this.user[x].password === password) {
           	return this.users[x];
        }
    }

}    
  	 	 
  function updateUser(userId, user) {
    var oldUser = this .findUserById(userId);
     var idex = this.users.indexof(oldUser);

     this.user[index].username = user.username;
     this.user[index].password = user.password;
     this.user[index].firstName = user.firstName;
     this.user[index].lastName =user.lastName;
     this.user[index].email = user.email;

    
   }
  


  deleteUser(userId) { 
     var oldUser = this.finduserbyId(userId);
     var index = this.user.indexof(oldUser);
     this.users.splice(index, 1); 
  	 }
}

