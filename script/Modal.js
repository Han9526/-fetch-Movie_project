//  Click-event
export async function addlistener() {

    const movieCards = document.getElementsByClassName('movie-card');
    const modalOverview = document.getElementById('modal-overview');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');

    for (let i = 0; i < movieCards.length; i++) {
        movieCards[i].addEventListener('click', () => {

            const id = movieCards[i].dataset.id;
            const title = document.getElementById(`title-${id}`).innerHTML;
            const imgSrc = document.getElementById(`img-${id}`).getAttribute('src');
            const overview = document.getElementById(`overview-${id}`).innerHTML;

            modalTitle.innerHTML = '';
            modalImg.removeAttribute('src');
            modalOverview.innerHTML = '';

            modalTitle.innerHTML = title;
            modalImg.setAttribute('src', imgSrc);
            modalOverview.innerHTML = overview;

            document.getElementById('modal').style.display = "block";
            document.getElementById('overlay').style.display = "block";

            alert(id);

        });
        document.getElementById('modal-close-btn').addEventListener('click', function () {

            document.getElementById('modal').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
    
        });
    
        document.getElementById('overlay').addEventListener('click', function () {
    
            let modal = document.getElementById('modal').style.display
            let over = document.getElementById('overlay').style.display
    
            if (modal === 'block' && over === 'block') {
                document.getElementById('modal').style.display = 'none';
                document.getElementById('overlay').style.display = 'none';
            }
    
        });
    }

    // Array.from(movieCards).map((card) => {
    //     card.addEventListener('click', function () {
    //         // const id = this.dataset.id;
    //         // alert(card);
    //         // console.log(card);
    //         const imgElement = card.querySelector('img'); // <img> 요소에 대한 참조
    //         const pElement = card.querySelector('p'); // <p> 요소에 대한 참조

    //         console.log(imgElement);
    //         console.log(pElement);
    //     });
    // });
}
