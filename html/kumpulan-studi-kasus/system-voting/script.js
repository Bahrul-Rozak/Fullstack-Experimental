const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

let count1 = 0
let count2 = 0
let count3 = 0

option1.addEventListener('click', ()=>{
       count1++
       showResult()
})

option2.addEventListener('click', ()=>{
       count2++
       showResult()
})

option3.addEventListener('click', ()=>{
       count3++
       showResult()
})

function showResult(){
       const total = count1 + count2 + count3
       const percentage1 = ((count1 / total) * 100).toFixed(2)
       const percentage2 = ((count2 / total) * 100).toFixed(2)
       const percentage3 = ((count3 / total) * 100).toFixed(2)

       result.innerHTML = `
          Hasil Voting : <br>
          Pilihan 1: ${count1} (${percentage1}) <br>
          Pilihan 2: ${count2} (${percentage2}) <br>
          Pilihan 3: ${count3} (${percentage3}) <br>
       `
}