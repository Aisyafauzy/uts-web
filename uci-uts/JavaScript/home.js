
let film = {
    "film": [
        {
            "id": 1,
            "judul": "The Dark Knight",
            "detail": "The Dark Knight adalah film superhero 2008 yang disutradarai, diproduksi, dan ditulis bersama oleh Christopher Nolan.",
            "link": "https://play.google.com/store/movies/details?id=dUMUH4NNYDY"
        },
        {
            "id": 2,
            "judul": "InterSteller",
            "detail": "Interstellar adalah film fiksi ilmiah epos tahun 2014 yang disutradarai oleh Christopher Nolan dan diproduseri oleh Emma Thomas, Christopher Nolan dan Lynda Obst. Naskah film ini ditulis oleh Jonathan Nolan dan Christopher Nolan",
            "link": "https://play.google.com/store/movies/details?id=F6TU69adAzE"
        }, {
            "id": 3,
            "judul": "The Lion King",
            "detail": "The Lion King adalah sebuah film animasi produksi Walt Disney Feature Animation yang dirilis ke bioskop oleh Walt Disney Pictures pada 15 Juni 1994, dan dirilis untuk publik pada 24 Juni 1994. Film ini merupakan film ke-32 dari rangkaian film animasi klasik Walt Disney.",
            "link": "https://m.youtube.com/watch?v=LgIVOqYtktw"
        }, {
            "id": 4,
            "judul": "Oppenheimer",
            "detail": "Kisah tentang seorang fisikawan Amerika Serikat bernama J. Robert Oppenheimer yang mengembangkan bom atom.",
            "link": "https://www.youtube.com/watch?v=uYPbbksJxIg"
        }, {
            "id": 5,
            "judul": "COCO",
            "detail": "Terlepas dari larangan musik yang membingungkan keluarganya, Miguel bermimpi untuk menjadi musisi berprestasi seperti idolanya, Ernesto de la Cruz. Putus asa untuk membuktikan bakatnya, Miguel menemukan dirinya berada di alam baka yang menakjubkan dan penuh warna setelah serangkaian peristiwa misterius. Sepanjang jalan, ia bertemu dengan penipu menawan Hector, dan bersama-sama, mereka memulai perjalanan yang luar biasa untuk membuka kisah sebenarnya di balik sejarah keluarga Miguel.",
            "link": "https://www.youtube.com/watch?v=0-Jpk9DlzAM"
        }

    ]
}
datafilm = film.film
console.log(datafilm);
let movieList = document.getElementById("movie");
for (let index = 0; index < datafilm.length; index++) {
    const element = datafilm[index];
    movieList.insertAdjacentHTML('beforeend', `<div id="${element.judul}" class="movie-content" onclick="showdetail(${element.id})">
    <h1>${element.judul}</h1>
    <p id="detail-${element.judul}">${element.detail}</p></div>`)
}

function showdetail(params) {
    const data = datafilm.find((film) => film.id === params)
    const filmnya = document.getElementById(`detail-${data.judul}`)
    filmnya.style.display = "block"
}
