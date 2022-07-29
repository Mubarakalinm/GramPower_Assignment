window.addEventListener('load', () => {

    const Numbers = localStorage.getItem('Numbers');

    if (Numbers === null) {
        Numbersnum = []
    } else {
        Numbersnum = JSON.parse(Numbers);

        Numbersnum.forEach(element => {
            let div = document.createElement('div');
            div.setAttribute('id', 'card');

            let h2 = document.createElement('h2');
            let text = `Store-${element}`
            h2.textContent = text;

            let a = document.createElement('a');
            a.setAttribute('href', '/view.html')

            let button = document.createElement('button');
            button.classList.add('btn');
            let textNode = "View Store";
            button.innerHTML = textNode;


            a.appendChild(button)
            div.append(h2)
            div.append(a)
            document.getElementById('storesjs').append(div)
        });


    }

})


