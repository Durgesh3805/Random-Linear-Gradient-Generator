let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let len = values.length
let format1 = '#08AEEA'
let format2 = '#2AF598'

let copyTxt =document.querySelector('.container')


let arr =['top' ,'right','bottom','left']
let dir =document.getElementById("dir")
let arrLen = arr.length
let index=0,iterator =0;



const guessColor = () => {
    let charGroup = []
    for (let i = 1; i <= 6; i++) {
        char = Math.floor(Math.random() * len)

        charGroup.push(values[char])
    }
    return (charGroup.join(""))

}

dir.addEventListener('click',()=>{
    iterator++;
    index = iterator % arrLen;
    dir.innerText =`to ${arr[index]}`
    document.body.style.backgroundImage = `linear-gradient(to ${arr[index]}, ${format1} 0%, ${format2} 100%)`;
    copyTxt.innerText =`  document.body.style.backgroundImage = linear-gradient(to ${arr[index]}, ${format1} 0%, ${format2} 100%);`
    

})

color1.addEventListener("click", () => {
    let color = guessColor();
    format1 = `#${color}`

    color1.innerText = format1;
    document.body.style.backgroundImage = `linear-gradient(to ${arr[index]}, ${format1} 0%, ${format2} 100%)`;
    copyTxt.innerText =`  document.body.style.backgroundImage = linear-gradient(to ${arr[index]}, ${format1} 0%, ${format2} 100%);`


})
color2.addEventListener("click", () => {
    let color = guessColor();
    format2 = `#${color}`

    color2.innerText = format2;
    document.body.style.backgroundImage = `linear-gradient(to ${arr[index]}, ${format1} 0%, ${format2} 100%)`;
    copyTxt.innerText =`  document.body.style.backgroundImage = linear-gradient(to ${arr[index]}, ${format1} 0%, ${format2} 100%);`
})

const copyDiv = () =>{
    navigator.clipboard.writeText(copyTxt.innerText)
    .then(() => {
        alert('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
copyTxt.addEventListener('click',copyDiv)

