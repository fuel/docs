/*
 * This is inspired by the CodeIgniter user guide's create_menu function.
 * http://codeigniter.com/user_guide/nav/nav.js
 *
 * It extracts the navigation to a single file for easier updating.
 */

//define document navigation
var nav = {
		"Basic": {
			"Home":			"index.html",
			"Requirements":	"requirements.html",
			"License":		"license.html",
			"Credits":		"credits.html"
		},
		"Installation": {
			"Instructions":	"installation/instructions.html",
			"Download":		"installation/download.html",
			"Troubleshooting":		"installation/troubleshooting.html"
		},
		"General": {
			"Classes": {
				"Introduction":		"general/classes.html",
				"Extending Core":	"general/extending_core.html"
			},
			"Coding Standards":	"general/coding_standards.html",
			"Configuration":	"general/configuration.html",
			"Controllers": {
				"Base" :		"general/controllers/base.html",
				"Template":		"general/controllers/template.html",
				"Rest":			"general/controllers/rest.html"
			},
			"HMVC Requests":	"general/hmvc.html",
			"Modules":			"general/modules.html",
			"Models":			"general/models.html",
			"Model-View-Controller":	"general/mvc.html",
			"Migrations":		"general/migrations.html",
			"Views":			"general/views.html",
			"ViewModels":		"general/viewmodels.html",
			"Routing":			"general/routing.html",
			"Packages":			"general/packages.html",
			"Security":			"general/security.html",
			"Tasks":			"general/tasks.html",
			"404 handling":		"general/404.html",
		},
		"Classes": {
			"Agent": {
				"Configuration":	"classes/agent/config.html",
				"Usage":			"classes/agent/usage.html",
			},
			"Arr":			"classes/arr.html",
			"Asset":		"classes/asset.html",
			"Autoloader":	"classes/autoloader.html",
			"Cache": {
				"Configuration":	"classes/cache/config.html",
				"Usage":			"classes/cache/usage.html",
				"Advanced":			"classes/cache/advanced.html"
			},
			"Cli":			"classes/cli.html",
			"Config":		"classes/config.html",
			"Cookie":		"classes/cookie.html",
			"Crypt":		"classes/crypt.html",
			"Database": {
				"Introduction":   	  "classes/database/introduction.html",
				"Usage":          	  "classes/database/usage.html",
				"DB class":       	  "classes/database/db.html",
				"DBUtil class":   	  "classes/database/dbutil.html",
				"Query Building":	{
					"Introduction":			"classes/database/qb.html",
					"Insert builder":	"classes/database/qb_insert.html",
					"Select builder":	"classes/database/qb_select.html",
					"Update builder":	"classes/database/qb_update.html",
					"Delete builder":	"classes/database/qb_delete.html",
					"Where builder":	"classes/database/qb_where.html"
				}
			},
			"Date":			"classes/date.html",
			"Debug":		"classes/debug.html",
			// "Email":		"todo.html",
			"Event":		"classes/event.html",
			// "Error":		"todo.html",
			// "Exception":	"todo.html",
			"Fieldset":		"classes/fieldset.html",
			"File": {
				"Introduction":	"classes/file/intro.html",
				"Usage":		"classes/file/usage.html",
				"Advanced":		"classes/file/advanced.html",
				"Handlers":		"classes/file/handlers.html",
			},
			"Form":			"classes/form.html",
			"Format":		"classes/format.html",
			"Ftp":			"classes/ftp.html",
			"Fuel":			"classes/fuel.html",
			"Html":			"classes/html.html",
			"Image":	    "classes/image.html",
			"Inflector":	"classes/inflector.html",
			"Input":		"classes/input.html",
			"Lang":			"classes/lang.html",
			"Log":	    	"classes/log.html",
			"Migrate":		"classes/migrate.html",
			"Mongo_Db": {
				"Introduction":	"classes/mongo/introduction.html",
				"Methods":		"classes/mongo/methods.html"
				//"Usage":		"classes/mongo/usage.html"
			},
			"Pagination":	"classes/pagination.html",
			// "Profiler":	"todo.html",
			"Redis":		"classes/redis.html",
			"Request":		"classes/request.html",
			"Response":		"classes/response.html",
			// "Route":		"todo.html",
			"Security":		"classes/security.html",
			"Session": {
				"Configuration":	"classes/session/config.html",
				"Usage":			"classes/session/usage.html",
				"Advanced":			"classes/session/advanced.html"
			},
			"Str": 			"classes/str.html",
			// "Unzip":		"todo.html", // dont do this, needs to be cleaned up. forget it exists.
			"Upload": {
				"Configuration":	"classes/upload/config.html",
				"Usage":			"classes/upload/usage.html"
			},
			"Uri":			"classes/uri.html",
			"Validation": {
				"Introduction": "classes/validation/validation.html",
				"Methods": "classes/validation/methods.html"
			},
			"View":			"classes/view.html"
		},
		"Oil": {
			"Introduction":		"packages/oil/intro.html",
			"Generate":			"packages/oil/generate.html",
			"Refine":			"packages/oil/refine.html",
			"Package":			"packages/oil/package.html",
//				"Test":				"packages/oil/test.html",
			"Console":			"packages/oil/console.html"
		},
		"Auth Package": {
			"Introduction":		"packages/auth/intro.html",
			"Usage":			"packages/auth/usage.html",
			"Driver types": {
				"Login":		"packages/auth/types/login.html",
				"Groups":		"packages/auth/types/groups.html",
				"ACL":			"packages/auth/types/acl.html"
			},
			"SimpleAuth": {
				"Introduction":	"packages/auth/simpleauth/intro.html",
				"Login":		"packages/auth/simpleauth/login.html",
				"Groups":		"packages/auth/simpleauth/groups.html",
				"ACL":			"packages/auth/simpleauth/acl.html"
			},
			"Writing drivers":	"packages/auth/drivers.html"
		},
		"Orm Package": {
			"Introduction":		"packages/orm/intro.html",
			"Creating Models":	"packages/orm/creating_models.html",
			"CRUD":				"packages/orm/crud.html",
			"Relating Models": {
				"Introduction":	"packages/orm/relations/intro.html",
				"Belongs To":	"packages/orm/relations/belongs_to.html",
				"Has One":		"packages/orm/relations/has_one.html",
				"Has Many":		"packages/orm/relations/has_many.html",
				"Many to Many":	"packages/orm/relations/many_many.html"
			},
			"Observers": {
				"Introduction":			"packages/orm/observers/intro.html",
				"Included observers":	"packages/orm/observers/included.html",
				"Writing your own":		"packages/orm/observers/creating.html"
			}
		}
};

//insert the navigation
function show_nav(page, path)
{
	active_path = window.location.pathname;
	path = path == null ? '' : path;
	$.each(nav, function(section,links) {
		var h3 = $('<h3></h3>');
		h3.addClass('collapsible').html(section);
		h3.attr('id', 'nav_'+section.toLowerCase().replace(' ', ''));
		h3.bind('click', function() {
			$(this).next('div').slideToggle();
		});

		$('#main-nav').append(h3);
		var div = $('<div></div>');
		if ('nav_'+page != h3.attr('id')) {
			div.hide();
		}

		var ul = div.append('<ul></ul>');
		ul.find('ul').append(generate_nav(path, links));

		$('#main-nav').append(div);
		$('#main-nav').find('#nav_'+page).next('div').slideDown();
	});
}

//generate the navigation
function generate_nav(path, links)
{
	var html = '';
	$.each(links, function(title, href) {
		if (typeof(href) == "object")
		{
			for(var link in href) break;
			html = html + '<li><a href="'+path+href[link]+'">' + title + '</a>';
			html = html + '<ul>' + generate_nav(path, href) + '</ul></li>';
		}
		else
		{
			active = '';
			if (active_path.indexOf(href, active_path.length - href.length) != -1)
			{
				active = ' class="active"';
			}
			html = html + '<li><a href="'+path+href+'"'+active+'>'+title+'</a></li>';
		}
	});
	return html;
}

// IE8 fix for displaying the sections correctly.
var dummy_section = document.createElement('section');
