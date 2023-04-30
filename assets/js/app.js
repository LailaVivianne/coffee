console.log('App id loading');

// en el menu desplegable haciendo toggle para que cuando este uno, no aparezca el otro
document.getElementById("mobile-menu").addEventListener("click", function (){
    document.getElementById("desplegable").classList.toggle("d-none");
});

document.getElementById("delicious").addEventListener("click", function (){
    document.querySelector(".delicious").classList.remove("d-none");
    document.querySelector(".coffee").classList.add("d-none")
});

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".coffee").classList.remove("d-none")
    document.querySelector(".delicious").classList.add("d-none")
});


// el apartado de reseñas
var review1 = '<p style="font-size: 17px; border-bottom: 1px solid rgb(65, 62, 62);" class="p-review-mobile">Maria</p>';
    review1 += '<p class="review-mobile p-review-tablet grey-bg">Excelente cafe y muy buena atencion!</p>';
    review1 += '<p class="grey-bg">Recomiendo!</p>';
var review2 = '<p style="font-size: 17px; border-bottom: 1px solid rgb(65, 62, 62);" class="p-review-mobile">Ana</p>';
    review2 += '<p class="grey-bg">Lo que mas me gusto es el cafe con hielo y los dulces.</p>';
    review2 += '<p class="grey-bg">100% recomiendo!</p>';
var review3 = '<p style="font-size: 17px; border-bottom: 1px solid rgb(65, 62, 62);" class="p-review-mobile">Jose</p>';
    review3 += '<p class="grey-bg">Un lugar muy tranquilo con mucha variedad donde disfrutar plenamente de tu cafe.</p>';
    review3 += '<p class="grey-bg">Volvere!</p>';


var reviewsArray = [
    review1,
    review2,
    review3
];

let reviewsLength = reviewsArray.length;
var reviews = document.getElementById('review');

document.getElementById('left').addEventListener('click', function() {
        var actualKey = Number(reviews.dataset.key);
        var nextKey = actualKey - 1;

if (actualKey == 0) {
    nextKey = 2;
}

reviews.innerHTML = reviewsArray[nextKey];
reviews.dataset.key = nextKey;
});

document.getElementById('right').addEventListener('click', function() {

        var actualKey = Number(reviews.dataset.key);
        var nextKey = actualKey + 1;

if (nextKey > reviewsLength - 1) {
    nextKey = 0;
}

reviews.innerHTML = reviewsArray[nextKey];
reviews.dataset.key = nextKey;
});


