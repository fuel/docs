var panes = {};
var pane_names = {
	'main': 'Fuel',
	'auth': 'Auth',
	'email': 'Email',
	'orm': 'ORM',
	'oil': 'Oil',
	'parser': 'Parser'
};

panes.main = {
	"Basic": {
		"Home":			"index.html",
		"Requirements":	"requirements.html",
		"License":		"license.html",
		"Contribute":	"contribute.html",
		"Credits":		"credits.html"
	},
	"Installation": {
		"Instructions":	"installation/instructions.html",
		"Download":		"installation/download.html",
		"Troubleshooting":		"installation/troubleshooting.html",
	},
	"General": {
		"Classes": {
			"Introduction":		"general/classes.html",
			"Extending Core":	"general/extending_core.html"
		},
		"Coding Standards":	"general/coding_standards.html",
		"Configuration":	"general/configuration.html",
		"Constants":		"general/constants.html",
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
		"Num":			"classes/num.html",
		"Package":		"classes/package.html",
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
	}
};

panes.oil = {
	"Oil": {
		"Introduction":		"packages/oil/intro.html",
		"Generate":			"packages/oil/generate.html",
		"Refine":			"packages/oil/refine.html",
		"Package":			"packages/oil/package.html",
//		"Test":				"packages/oil/test.html",
		"Console":			"packages/oil/console.html"
	}
};

panes.auth = {
	"Auth": {
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
	}
};

panes.email = {
	"Email": {
		"Introduction": "packages/email/intro.html",
		"Usage":			"packages/auth/usage.html",
		"Driver types": {
			"Mail":			"packages/auth/drivers/mail.html",
			"SMTP":			"packages/auth/drivers/smtp.html",
			"Sendmail":		"packages/auth/drivers/sendmal.html"
		}
	}
};

panes.orm = {
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

panes.parser = {
	"Parser Package": {
		"Introduction":		"packages/parser/intro.html"
	}
};


var pane_columns = [];
var pane_item_count = [];
var pane_items_per_column = [];
$.each(panes, function(pane, pane_contents){
	var items_count = 0;
	$.each(pane_contents, function(subject, subject_contents){
		$.each(subject_contents, function(item, contents){
			items_count++;
		});
		items_count++;
		items_count++;
	});
	pane_item_count[pane] = items_count;
	pane_columns[pane] = Math.ceil(items_count/2);
	if(pane_columns[pane] > 5)
	{
		pane_columns[pane] = 5;
	}
	pane_items_per_column[pane] = Math.ceil(pane_item_count[pane]/pane_columns[pane]);
});

var html = '';
var pane_picker_html = '';
var active_path = window.location.pathname;

$.each(panes, function(pane, pane_contents){
	pane_picker_html = pane_picker_html + '<li id="pane_menu_'+pane+'">' + pane_names[pane] + '</li>';
	html = html + '<div id="pane_'+pane+'" class="pane"><div class="table"><ul class="column">';
	var processed_subjects = [];
	var max_items = pane_items_per_column[pane];
	var item_count = 0;	
	var col_count = 1;
	$.each(pane_contents, function(subject, subject_contents){
		if(item_count >= max_items)
		{
			item_count = 0;
			col_count++;
			if(col_count >= pane_columns[pane])
			{
				html = html + '</ul><ul class="column last">';
			}
			else
			{
				html = html + '</ul><ul class="column">';
			}
		}
	
		html = html + '<li><h2 class="topic">'+subject+'</h2><ul>';
		
		$.each(subject_contents, function(item, item_contents){
			
			if(item_count >= max_items)
			{
				item_count = 0;
				col_count++;
				if(col_count >= pane_columns[pane])
				{
					html = html + '</ul></li></ul><ul class="column last"><li><ul>';
				}
				else
				{
					html = html + '</ul></li></ul><ul class="column"><li><ul>';
				}
			}
			
			if(typeof item_contents == 'object')
			{
				html = html + '<li><a class="expand_handle" href="#">'+item+'</a>'+nav_html(item_contents)+'</li>';
			}
			else
			{
				var active = '';
				if (active_path.indexOf(item_contents, active_path.length - item_contents.length) != -1)
				{
					active = ' class="active"';
				}
				html = html + '<li><a '+active+' href="'+path+item_contents+'">'+item+'</a></li>';
			}
			
			item_count++;
			
		});
		
		item_count++;
		item_count++;
		
		html = html + '</ul></li>';
	});
	
	html = html + '</ul></div></div>';
	
});

pane_picker_html = '<div class="table pane_picker"><ul id="pane_picker">' + pane_picker_html + '</ul></div>';

function nav_html(contents)
{
	var html = '<ul>';
	$.each(contents, function(item, item_contents){
	if(typeof item_contents == 'object')
	{
		html = html + '<li><a href="#" class="expand_handle">'+item+'</a>'+nav_html(item_contents)+'</li>';
	}
	else
	{
		var active = '';
		if (active_path.indexOf(item_contents, active_path.length - item_contents.length) != -1)
		{
			active = ' class="active"';
		}
		html = html + '<li><a '+active+' href="'+path+item_contents+'">'+item+'</a></li>';
	}
	});
	return html + '</ul>';
}

$("document").ready(function(){
	$('nav').prepend(pane_picker_html+html);
	$('nav ul ul ul').menu_expand();
	var active_item = $('nav a.active');
	if(active_item.length < 1)
	{
		active_item = $('nav ul.column:first-child a:first-child').first();
		active_item.addClass('active');
	}
	
	$('#header nav ul.column ul ul').each(function(){
		if($(this).find('a.active').length > 0)
		{
			$(this).show();
		}
	});
		
	$('nav .pane').hide().each(function(){
		if($(this).find('a.active').length > 0)
		{
			$(this).addClass('active').show();
			$('#pane_menu_'+$(this).attr('id').substr(5)).addClass('active');
		}
	});
	
	var $pane_links = $('#pane_picker li');
	
	$pane_links.click(function(){
		if($(this).hasClass('active'))
		{
			return;
		}
		$pane_links.removeClass('active');
		var pane = $(this).attr('id').substr(10);
		$(this).addClass('active');
		$('.pane.active').removeClass('active').slideUp(400);
		$('#pane_'+pane).addClass('active').slideDown(400, function(){
			$(this).triggerHandler('update_height');
		});
		
	});
	
	setup();
});