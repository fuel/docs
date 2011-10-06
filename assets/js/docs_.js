// Get the max value from an array
Array.max = function( array ){
    return Math.max.apply( Math, array );
};

;(function($){
	$.fn.anchorify = function(){
		var $icon = $('<a class="internal_link"> <img src="'+path+'assets/img/icon_link.gif" /></a>');
		$icon.click(function(e){
			$.scrollTo(this, { speed:400, offset: -20 });
		});
		return $(this).each(function(){
			var id = $(this).attr('id');
			if(id && id != '')
			{
				var $handle = $icon.clone(true);
				$handle.attr('href', '#/'+id);
				$(this).append($handle);
			}
		});
	}
})(jQuery);

;(function($){
	$.fn.menu_expand = function(){
		return $(this).each(function(){
			var $menu = $(this);
			var $link = $menu.parent().find('> a');
			var $toc_part = $menu.closest('.pane');
			var $handle = $('<span class="expand_me">+</span>');
			$link.click(function(e){
				e.preventDefault();
				$menu.slideToggle(300, function(){
					$toc_part.attr('h', $toc_part.height());
					$toc_part.triggerHandler('update_height');
				});
			});
			$link.append($handle);
		});
	}
})(jQuery);

;(function($){
	$.fn.menu_highlight = function(){
		var highlight_class = 0;
		var $all = $(this);
		var timeout = 0;
	
		return $(this).each(function(){
			var $obj = $(this);
			if($obj.find('.topic').length > 0)
			{
				highlight_class++;
			}
			$obj.addClass('menu_highlight highlight_'+highlight_class)
			.data('highlight', highlight_class)
			.hover(function(){
				clearTimeout(timeout);
				$('.menu_highlight').removeClass('highlighted');
				$('.highlight_'+$obj.data('highlight')).addClass('highlighted');
			},function(){
				timeout = setTimeout(function(){
					$('.highlight_'+$obj.data('highlight')).removeClass('highlighted');
				}, 100);
			});
		});
	}
})(jQuery);



var customSearchControl;
google.load('search', '1', {language : 'en'});
google.setOnLoadCallback(function() {
	customSearchControl = new google.search.CustomSearchControl('006591637332971941800:3efr01twcei');
	customSearchControl.setResultSetSize(4);
	var options = new google.search.DrawOptions();
	options.setSearchFormRoot('cse-search-form');
	options.enableSearchResultsOnly();  
	customSearchControl.draw('cse_content', options);
}, true);


function execute_query() {
	var textNode = document.getElementById('search_input');
	if (textNode.value == '') {
		clear_search();
	} else {
		$('#cse').show();
		customSearchControl.execute(textNode.value);
		$('body').delegate('#main', 'click', function(){
			clear_search();
		});
	}
}

function clear_search()
{
	$('body').undelegate('#content', 'click');
	$('#cse').hide();
	customSearchControl.clearAllResults();
}

function set_key_controls()
{
	$(window).unbind('keyup').keyup(function(e){
		
		if(e.which == 27)
		{
			e.preventDefault();
			$('#toc_handle').triggerHandler('close');
			$('#search_clear').click();
		}
		
		if(e.which == 84)
		{
			e.preventDefault();
			$('#toc_handle').triggerHandler('click');
		}
		
		if(e.which == 83)
		{
			e.preventDefault();
			$('#search_input').focus();
		}
		
	});
}

function method_list($methods)
{
	var list = [];
	$methods.each(function(){
		list.push('<a href="#/'+$(this).attr('id')+'">'+class_prefix+$(this).text().split('(')[0]+"()</a>");
	});
	$('footer').append('<div id="methods"><a href="javascript: $(\'#method_list\').slideToggle(300);" id="methods_handle">method list</a><div id="method_list">'+list.join('')+'</div></div>');
	$('#method_list a').click(function(){
		$.scrollTo($($(this).attr('href').replace("#/","#")), { speed:500, offset: -20 });
	});
}

hljs.tabReplace = '    ';
hljs.initHighlightingOnLoad();

var max_navtable_height = 0;

;(function($){
	$.fn.table_of_content = function(){
		var $all = $(this);
		var $nav = $('header nav');
		var height = 0;
		$nav.css({
			'height': 0,
			'overflow': 'hidden'
		});
		var $handle = $('#toc_handle');
		var $google = $('#google_search');
		var opened = false;
		var $active;
		
		function update_height()
		{
			$active = $all.filter('.active');
			height = heights[$active.data('i')] + 30;
		}
		
		$handle.click(function(e){
			e.preventDefault();
			if(opened == false)
			{
				update_height();
				$nav.animate({
					height: height
				}, 300, function(){
					$(this).removeAttr('style');
					$active.css('position', 'relative');
				});
				opened = true;
				$('#toc_handle').triggerHandler('close');
				$('#search_clear').click();
				$google.fadeOut(300);
				$('#header').animate({
					'margin-top': -50
				}, 300);
			}
			else
			{
				$nav.css({
					height: height,
					overflow: 'hidden'
				});
				$active.css('position', 'relative');
				$nav.animate({
					height: 0
				}, 300);
				opened = false;
				$google.fadeIn(300);
				$('#header').animate({
					'margin-top': 0
				}, 300);
			}
		});
		
		var count = 0;
		var heights = [];
		$(this).each(function(){
			var $part = $(this);
			$part.data('i', count++);
			$part.bind('update_height', function(){
				heights[$part.data('i')] = $part.height();
				update_height();
			});
			$part.triggerHandler('update_height');
		});
		

		return $(this);
	}
})(jQuery);

function setup()
{
	var highlight_class = 0;
	$('ul.column > li').menu_highlight();
	
	
	set_key_controls();
	$('body').delegate('input', 'focus', function(){
		$(window).unbind('keyup');
	}).delegate('input', 'blur', function(){
		set_key_controls();
	});
	
	$('#google_search').submit(function(e){
		e.preventDefault();
		execute_query();
		return false;
	});
	
	$('#search_clear').click(function(){
		$('#search_input').val('');
		clear_search();
	});
	
	$('#search_input').keyup(function(e){
		if(e.which == 27)
		{
			$('#search_clear').click();
		}
	});
	
	$('#main h2, #main h3, #main h4').anchorify();
	
	$('.package_link').each(function(){
		$(this).wrap('<div class="wrap" style="display: none;" />');
		$(this).css('height', '');
		$(this).click(function(e){
			e.preventDefault();
			var rel = $(this).attr('rel');
			$('#main_toc').parent().hide(2000);
			$('#'+rel).parent().show(2000);
		});
	});
	
	$('nav .pane').table_of_content();
	
	var target = $(location.hash.replace('#/','#'))[0];
	if (target) {
	    $.scrollTo(target, { speed:500, offset: -20 });
	}
	
	var $methods = $('h4.method');
	if($methods.length > 0)
	{
		method_list($methods);
	}
	
};