/*
 * This is inspired by the CodeIgniter user guide's create_menu function.
 * http://codeigniter.com/user_guide/nav/nav.js
 *
 * It extracts the navigation to a single file for easier updating.
 */

//define document navigation
var nav = {
		"Basic": {
			"Home":"index.html",
			"Requirements":"requirements.html",
			"License":"license.html",
			"Credits":"credits.html"
		},
		//example group
		"Group1": {
			"Item 1":"group1/item1.html",
			"Item 2":"group1/item2.html"
		}
};

//insert the navigation
function show_nav(page)
{
	$.each(nav, function(section,links) {
		var h3 = $('<h3></h3>');
		h3.addClass('collapsible').html(section);
		h3.attr('id', section.toLowerCase().replace(' ', ''));
		h3.bind('click', function() {
			$(this).next('div').slideToggle();
		});
		$('nav').append(h3);
		var div = $('<div></div>');
		if (page != h3.attr('id')) {
			div.hide();
		}
		var ul = div.append('<ul></ul>');
		$.each(links, function(title, href) {
			ul.find('ul').append('<li><a href="'+href+'">'+title+'</a></li>');
		});
		$('nav').append(div);
		$('nav').find('#'+page).next('div').slideDown();
	});
}