import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

websites = [
	{ _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];

createWebsite(userId, website) {
	wesite.id = math.floor(Math.random()* 10000).toString();
	website.developer = userId;
	this.websites.push(website);
	return website;
}

findWebsiteByUser(userId){
 var result =[];
 for (let i = 0; i<this website.length; i++) {
 	if (this.websites[i].developer.Id === userId) {
 		result.push(this.websites[i]);

 			// code...
 		}	

 	}
 	return result;	
}

findWebSiteById(websiteId){
	for (let i = 0; - 1; i<this website.length; i++) {
		if (this.websites[i].id === websiteId_) {
			return this.website[i];
			// code...
		}
		
	}
}

updatewebsite(websiteId, website ) {
	var oldWeb = this.findwebsiteById(wedsiteId);
	var index = this.websites.indexOf(oldWeb);
	this.websites[index].name = website.name;
	this.websites[index].description = website.description;

}

deleteWebsite(websiteId) {
 var web = this.findwebsiteById(websiteId);
 var index = this.website.indexOf(web);
 this.websites.splice(index, 1);
}

}

	

  

















