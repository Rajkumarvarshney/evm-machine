let bjp = 0
let sp = 0
let upa = 0
let bsp = 0
let max = 0
let z = 0
let result = false
document.getElementById("result").addEventListener('click', () => {
    result = true
    document.querySelector('.bjp1').style.display = "none";
    document.querySelector('.sp1').style.display = "none";
    document.querySelector('.bsp1').style.display = "none";
    document.querySelector('.upa1').style.display = "none";

    let arr = []
    arr.push(sp)
    arr.push(upa)
    arr.push(bsp)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            z = i
        }
    }
    if (max > bjp) {
        arr[z] = bjp
        bjp = max
    }
    sp = arr[0]
    upa = arr[1]
    bsp = arr[2]

    console.log(bjp)
    document.getElementById('1').innerHTML = "BJP" + ":" + bjp
    document.getElementById('2').innerHTML = "SP" + ":" + sp
    document.getElementById('3').innerHTML = "UPA" + ":" + upa
    document.getElementById('4').innerHTML = "BSP" + ":" + bsp

})
if (!result) {
    document.getElementById('bjp').addEventListener('click', () => {
        bjp += 1
        //document.getElementById('bjp').innerHTML = bjp
        console.log(bjp, "bjp")

    })
    document.getElementById('sp').addEventListener('click', () => {
        sp += 1
        console.log(sp, "sp")
    })
    document.getElementById('upa').addEventListener('click', () => {
        upa += 1
        //document.getElementById('upa').innerHTML = bjp
        console.log(upa, 'upa')
    })
    document.getElementById('bsp').addEventListener('click', () => {
        bsp += 1
        //document.getElementById('bsp').innerHTML = bjp
        console.log(bsp, 'bsp')
    })
}
