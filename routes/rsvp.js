var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

/*
* create a controller to handle POST request
*/
exports.addRSVP = function(request, response){
	var rsvpEmail = request.body.rsvpEmail;
	//this will print to your terminal whenever the POST request is made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);//add to current data

	//let us den send back some fata so teht browder knows it works
	response.send(rsvpEmail);
};