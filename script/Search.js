
 function Searchfunction() {
    const a = document.getElementsByClassName("movie-card");
    for (let i = 0; i < a.length; i++) {
        let movieTitle = document.getElementById(`${a[i].dataset.id}`).innerHTML;
        let inputField = document.getElementById("input_field").value;
        if (movieTitle.toLowerCase().indexOf(inputField.toLowerCase()) !== -1) {
            a[i].style.display = "block"
        } else {
            a[i].style.display = "none"
        }
    }
    inputFocus();
}

// Btn-click
export function ClickBtn() {
    document.getElementById("search_btn").addEventListener('click', () => {
        Searchfunction();
    });
}

// Enter-click
export function EnterBtn() {
    document.getElementById('input_field').addEventListener('keypress', (event)=>{
        if(event.key === 'Enter'){
            Searchfunction();
        }
    });
}

// Input-Focus
export function inputFocus() {
    document.getElementById('input_field').focus();
}