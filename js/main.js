/* This is a JS comment */
function askQuestions() {
	var firstName = prompt('What is you first name?'),
		lastName = prompt('What is your last name?'),
		fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('How old are you?')
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	} else if (age >= 13) {

		console.log('User is a teenager');

	} else {

		console.log('User is a child');

	}

	if (firstName.toLowerCase().trim() === 'general' &&  lastName !== 'assembly') { //om fornavn er general og etternavn ikke er assembly vil det kommen greetings
	//.tolowercase og.trim er store og små bokstaver og mellomrom etter navn
	 console.log('Greeting General');

		}
}


// When the page has loaded
$(function () {

	// when the user clicks an h3 element
	$('h3').on('click', function() {

	// Hide the next element
	$(this).next().slideToggle(500);

	});
});