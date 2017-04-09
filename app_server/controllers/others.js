
// GET home page
module.exports.about = function(req, res) {
	res.render('generic-text', {
		title: 'About Loc8er',
		content: 'Loc8er was created to help people find places to sit down and get a bit of work done.  \n\n ' +
		'Lorem ip[sum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.'
	});
};