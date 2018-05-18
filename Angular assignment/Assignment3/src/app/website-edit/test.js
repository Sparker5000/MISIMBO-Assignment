{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}	
     };

function createUser(user){
	user._id = Math.random() * math.floor(10000);
	this.users.push(user);
	console.log(users);
	return user;
}

var newUser = {
    username: "admin",
    password: "pass",
    firstName: "admin",
    lastName: "wang",
    email: "admin@gmail.com"
}





function findUserByid(userid) {
	for(let x=0; x< this.user.length; x++){
		if(this.user[x._id === userId]) {
			return this.user[x];
		}
	}
}  

console.log(findUserById("123"));

function updateUser(userId, user) {
	var oldUser = this.findUserByid(userId);
	var index = this.user.indexOf(oldUser);

	this.user[index].username = user.username;
	this.user[index].password = user.password;
	this.user[index].firstName = user.firstName;
	this.user[index].lastName = user.lastName;
	this.user[index].email = user.email;
	console.log(users);
}

//updateUser("345", newUser);


 deleteUser(userId) { 
     var oldUser = this.finduserbyId(userId);
     var index = this.user.indexof(oldUser);
     this.users.splice(index, 1);

     consoole.log(users); 
     }



     deleteuser("456")





