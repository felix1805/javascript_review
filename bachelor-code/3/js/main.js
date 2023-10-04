// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))
// function checkForRose(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert("Wrong!");
// 	}
// }

// target all classes with name 'contestant', create variable for these
// create array from previous variable, use foreach to add event listener to run function for click event
// use else if to target correct classlist and see if it contains result, alert if wrong

// const finalContestant = document.querySelectorAll('.contestant')


// Array.from(finalContestant).forEach(element => element.addEventListener('click', runCheckFinalContestant))

// function runCheckFinalContestant(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert('nope')
// 		document.querySelector('#pElement').classList.toggle('hidden')		
// 	}
// }

// const contestantList = document.querySelectorAll('.contestant')

// Array.from(contestantList).forEach(element => element.addEventListener('click', checkContestant))

// function checkContestant(click) {
// 	if (click.taget.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert('not')
// 	}
// }

// const contestantList2 = document.querySelectorAll('.contestant')
// Array.from(contestantList2).forEach(element => element.addEventListener('click', runContestantCheck))

// function runContestantCheck(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert('nope')
// 	}
// }



// const filterListOfContestants = document.querySelectorAll('.contestant')

// Array.from(filterListOfContestants).forEach(element => element.addEventListener('click', runCheckFunction))

// function runCheckFunction(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert('nope')
// 	}
// }


// const contestant2 = document.querySelectorAll('.contestant')

// Array.from(contestant2).forEach(element => element.addEventListener('click', checkContest))

// function checkContest(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert('niet')
// 	}
// }

const contestant3 = document.querySelectorAll('.contestant')

Array.from(contestant3).forEach(element => element.addEventListener('click', checkContest3))

function checkContest3(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden')
	} else 
	alert('nope')
}
