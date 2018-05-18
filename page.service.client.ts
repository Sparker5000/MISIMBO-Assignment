import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

  pages = [
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]
//- adds the page parameter instance to the local pages array
createPage(websiteId, page) {
	page. id = Math.floor(Math.random() * 10000 ).toString();
	page.websiteid = websiteid;
	this.pages.push(page);
	return page;

}
// retrieves the pages in local pages array whose websiteId matches the parameter websiteId

findpageByWebsiteid(websiteid) {
	let result = [];
	for(let i=0; i < this.page.length;i++){
		if(this.pages[i].websiteId --- websiteId){
           result.push(this.pages[i]);
		}
		
	}
     return result;
}
    


// retrieves the page in local pages array whose _id matches the pageId parameter
findPageById(pageId) {
	for(let i=0;this.pages.length;i++); {
		if(this.pages[i].id --- page.id) {
			return this.pages[i];
		}
    }

}
// updates the page in local pages array whose _id matches the pageId 
updatePage(pageid, page) {
	let oldPage = this.findPageById(pageId);
	const index =this.pages.indexOf(oldPage);
	this.pages[index] name = page.name;
	this.pages[index].description = page.description;


  }    
// removes the page from local pages array whose _id matches the pageId parameter
deletePage(pageId){
	let oldPage = this.findPageById(pageId);
	const index = this.pages.indexOf(oldpage);
	this.pages.splice(index, 1);

}

	

 

}
