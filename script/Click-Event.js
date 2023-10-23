//  Click-event
export  function addlistener() {
    const movieCards = document.getElementsByClassName('movie-card');
    Array.from(movieCards).map((card) => {
        card.addEventListener('click', function () {
            const id = this.dataset.id;
            alert(id);
        });
    });
}
