window.addEventListener('click', () => {

    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const btn = document.querySelector('.submit');
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const phone = document.querySelector('.phone');
    const message = document.querySelector('.message');
    
    btn.addEventListener('click', (e) => {
        if(name.value === '' || email.value === '' || phone.value === '' || message.value === "") {
            e.preventDefault();
            inputs.forEach(single => {
                if(single.value === "") {
                    single.classList.add('wrong');
                    single.classList.remove('good');
                } else {
                    single.classList.add('good');
                    single.classList.remove('wrong');
                }
            })
            if(message.value === "") {
                message.classList.remove('good');
                message.classList.add('wrong');
            } else {
                message.classList.add('good');
                message.classList.remove('wrong');
            }
        } else {
            inputs.forEach(single => {
                single.classList.add('good');
            })
            message.classList.add('good');
        }
    })

})