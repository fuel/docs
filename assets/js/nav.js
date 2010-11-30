/*
 * This is inspired by the CodeIgniter user guide's create_menu function.
 * http://codeigniter.com/user_guide/nav/nav.js
 *
 * It extracts the navigation to a single file for easier updating.
 */

function show_nav(path)
{
	document.write(
		'<h3>Basic</h3>'+
		'<ul>'+
		'<li><a href="'+path+'index.html">Home</a></li>'+
		'<li><a href="'+path+'requirements.html">Requirements</a></li>'+
		'<li><a href="'+path+'license.html">License</a></li>'+
		'<li><a href="'+path+'credits.html">Credits</a></li>'+
		'</ul>'
	);
}