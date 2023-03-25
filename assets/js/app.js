console.log('App id loading');

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
