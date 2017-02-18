/**
 * Step one: go to https://action.donaldjtrump.com/mainstream-media-accountability-survey/
 * Step two: copy the below code and paste it into you browser JS console
 * Step three: hit enter to randomly generate a name, email, and zip code and submit the form
 *
 * Hopefully this will send empty survey results, or fill out the survey with non-shitty responses
 * and use this script to generate anonymous contact info.
 */
function randNum( low, high ) {
	return Math.floor( Math.random() * high ) + low;
}

function randString( charset ) {
	return charset.charAt( Math.floor( Math.random() * charset.length ) );
}

function nameGen( len1, len2 ) {
	var text1 = '',
		text2 = '',
		charset = 'abcdefghijklmnopqrstuvwxyz';
	for( var i=0; i < len1; i++ ) {
		text1 += randString( charset );
	}
	for( var i=0; i < len2; i++ ) {
		text2 += randString( charset );
	}
	return text1 + ' ' + text2;
}

function emailGen( len1, len2 ) {
	var text = '',
		domain = '',
		charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

	for( var i=0; i < len1; i++ ) {
		text += randString( charset );
	}

	for( var i=0; i < len2; i++ ) {
		domain += randString( charset );
	}

	return text + '@' + domain + '.com';
}

function zipGen() {
	var charset = '1234567890',
		zip = '';

	for( var i=0; i < 5; i++ ) {
		zip += randString( charset );
	}

	return zip;
}


var name = nameGen( randNum( 3, 10 ), randNum( 3, 10 ) );
var email = emailGen( randNum( 10, 30 ), 3 );
var zip = zipGen();

jQuery( 'input#id_full_name' ).val( name );
jQuery( 'input#id_email' ).val( email );
jQuery( 'input#id_postal_code' ).val( zip );
jQuery( 'input[type=submit]' ).click();
