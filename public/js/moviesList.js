window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';


    let logo = document.querySelector('figure')

logo.addEventListener('mouseover', (e) => {
    body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList');
    
})
logo.addEventListener('mouseleave', (e) => {
    body.style.backgroundColor = 'white';
        body.classList.remove('fondoMoviesList');
    console.log('Aca esta lo que queres')
})

}