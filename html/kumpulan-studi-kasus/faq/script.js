document.addEventListener("DOMContentLoaded", function(){
       const questions = document.querySelectorAll(".question")

       questions.forEach(function(question){
              question.addEventListener("click", function(){
                     const answer = this.nextElementSibling
                     if(answer.classList.contains("active")){
                            answer.classList.remove("active")
                     }else{
                            answer.classList.add("active")
                     }
              })
       })
})