/*
* jQuery Mobile Framework : "role" plugin
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/

(function( $, undefined ) {
	$( document ).bind( "pagecreate", function( e ){
		e.$jqmRoleElements = $( ":jqmData(role)", e.target );
		e.$controlElements = $( "input, textarea, select, button", e.target );
	});
}( jQuery ));