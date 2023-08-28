//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log('data', data)
            document.querySelector('h4').innerText = data.subclasses[0].name
            document.querySelector('h3').innerText = data.classes[0].name
            document.querySelector('h2').innerText = data.name
            // document.querySelector('ul').innerText = data.desc[0]

            // clear ul before running fetch again.
            const ul = document.querySelector('ul')
            ul.innerHTML = ''

            data.subclasses.forEach(e => {
                console.log(e.name)
                //create li
                const li = document.createElement('li')
                //add text to li
                li.textContent = e.name
                //append li to ul
                document.querySelector('ul').appendChild(li)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

