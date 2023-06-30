const table =document.querySelector('table');
const arr = [];
const modal =document.querySelector('.modal')
const btn = document.querySelector('.btn')


setTimeout(() => {
    modal.classList.add('modal_active')
}, 30000);
btn.addEventListener('click',function () {
    location.reload();
})
for (let i = 1; i<=10; i++ ) {
    let tr = document.createElement('tr')
    for(let j = 1; j<=10; j++) {
        let td =document.createElement('td')
        tr.appendChild(td)
    } 
       
     table.appendChild(tr)
     arr.push(Math.floor(Math.random() * 100))
}
console.log(arr);
const allTd =document.querySelectorAll('td');
for (let i = 0; i<allTd.length; i++) {
allTd[i].addEventListener('click',function(){
    console.log(allTd[i],i);
    for (let j = 0; j<arr.length; j++) {
        if(arr[j]===i){
            allTd[i].classList.add("green")
        }else{
        allTd[i].classList.add("red")
        
        }
    }
   


    
})
}