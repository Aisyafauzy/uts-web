var a = 5
let b = 10
const nama = ["ilham", "tayo", "lie"]
const data = {
    namadepan: "depan",
    namatengah: "tengah",
    namabelakang: "belakang"
}

function cetaknama(params) {
    let namapanjang = ""
    params.forEach(element => {
        namapanjang += (element + " ");
    });
    return namapanjang
}
console.log(cetaknama(nama));
const gabungsting = (params1,params2)  => {
    return (params1 + " " + params2)
}

console.log(gabungsting(nama[0],nama[1]));

const left = document.getElementsByClassName("theContent")
console.log(left);

for (let index = 0; index < left.length; index++) {
    const element = left[index];
    element.addEventListener('mouseenter',() => {
        element.style = ("color: white; background-color:red;")
    })
    element.addEventListener('mouseleave',() => {
        element.style = ("color:black; background-color:aqua;")
    })

    element.addEventListener('click',() => {
        element.style = ("color:white; background-color:gray;")
        element.innerHTML = ("<h2>ditekan</h2>")
    })
}