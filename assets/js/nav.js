/*
 * This is inspired by the CodeIgniter user guide's create_menu function.
 * http://codeigniter.com/user_guide/nav/nav.js
 *
 * It extracts the navigation to a single file for easier updating.
 */

function show_nav(path)
{
	document.write(
		'<ul>'+
		'<li><a href="'+path+'index.html">Home</a></li>'+
		'</ul>'
	);
}