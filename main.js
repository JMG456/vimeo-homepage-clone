const navSearch = document.querySelector('.nav-search');
const navInput = document.querySelector('.nav-input');

navSearch.addEventListener('click', ()=>{
    navSearch.classList.add('inactive');
    navInput.classList.add('active');
})

document.addEventListener('click', e=>{

        if(!e.target.classList.contains('search')){
            navInput.classList.remove('active');
            navSearch.classList.remove('inactive');
            console.log(e.target.classList);
        }

    
})
