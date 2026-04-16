function m(){
    let n = document.getElementById("nome") .value;
    alert("bem vindo! " +n);
}

function carregar(){
    fetch("https://jsonplaceholder.typicode.com/posts/3")
    Then(res => res.json())
    then(data => {
document.getElementById("titulo").innerHTML=data.title;
})
}
