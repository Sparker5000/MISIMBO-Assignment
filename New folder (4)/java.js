//console.log(hello from Javascript)

document.queryselector('#myform')
        .addeventlistener('submit', 'savebookmark');



        function savebookmark(event){
        	//console.log("save bookmark");

        	var sitename = document.queryselector("#sitename").value;
        	var siteurl = document.queryselector('#siteURL').value;
        	console.log(sitename)
            var bookmark = {
            	name: sitename
            	url: siteurl
            };


        	localStorage.setItem('test', 'Hello world');
        	console.log(localStorage.getItem('test'))


            check if the bookmarks array exists
            if(localStorage.getItem('bookmarks') ===)

            //	init array
        var bookmarks = [];

         //set to localstorage
         localstorage.setItem('bookmarks',)



         //get bookmarks from localstorage
         var bookmarks = json.parse(localstorage.getItem('bookmarks'));

         // add new bookmark  
        	prevent from submitting
        	e.preventDefault();
        }









        function fetchBookMarks(){


        	//get bookmarks from localstorage
        	var bookmarks = JSON.parse(localstorage.getitem('bookmarks'));

        	//Get the output id
        	bookmarksResult = document.queryselector('bookmarksResult');

        	//Build output
        	bookmarksResult.innerhtml = '';

        	for(var i=0;i<bookmarks.length;i++){
        		var name bookmarks[i].name;
        		var url = bookmarks[i.url]


        		bookmarks.innerhtml +=  
        		'<div><h3>' = name = ' ' =
        		'<a class='btn btn-success' 








function deleteBookmarks(url)

       // Get bookmark from localStorage

       //Remove bookmark from bookmark array

       //Rest  bookmark 
