let count=0
let el_count=document.getElementById("count")
let saveEl=document.getElementById("save-el")
function increment() {

    count+=1
    el_count.innerText=count
    
}
function save() {
    preNumbers=count+" - "
saveEl.textContent+=preNumbers
count=0
el_count.innerText=0
}
