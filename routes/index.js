var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	projects["viewAlt"] = false;
  	response.render('index', projects);
 	//data['viewAlt'] = false;
 	
};

exports.viewAlt = function(request, response) {
	response.render('index', projects);
	projects["viewAlt"] = true;
	

}

