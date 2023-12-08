// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

document.querySelector('#andi').addEventListener('click', andiNext)
document.querySelector('#claire').addEventListener('click', claireNext)
document.querySelector('#sharleen').addEventListener('click', sharleenNext)

function andiNext() {
	document.getElementById('claire').classList.toggle('hidden')
	// sharleen.classList.add('hidden')
	// andi.classList.toggle('hidden')
}

function claireNext() {
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext() {
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}

// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')



// const andiNext = () => {
// 	andi.classList.toggle('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.add('hidden')
// }
// const sharleenNext = () => {
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// 	claire.classList.add('hidden')
// }
// const claireNext = () => {
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }
// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)