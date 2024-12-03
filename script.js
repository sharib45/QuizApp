const questions =[

  {

     question:"Which is the largest animale in world? ok",

     answers: [

        {text :"sharak" ,correct:"true"},
        {text :"sharak", correct:"false"},
        {text :"sharak", correct:"false"},
        {text :"sharak", correct:"false"}

     ]



  },


  {

    question:"Which is the largest animale in world?",

    answers: [

       {text :"sharak" ,correct:"false"},
       {text :"sharak", correct:"false"},
       {text :"sharak", correct:"false"},
       {text :"sharak", correct:"false"}

    ]


  },


  {

    question:"Which is the largest animale in world?",

    answers: [

       {text :"sharak" ,correct:"false"},
       {text :"sharak", correct:"false"},
       {text :"sharak", correct:"false"},
       {text :"sharak", correct:"false"}

    ]


  },

  {

    question:"Which is the largest animale in world?",

    answers: [

       {text :"sharak" ,correct:"false"},
       {text :"sharak", correct:"false"},
       {text :"sharak", correct:"false"},
       {text :"sharak", correct:"false"}

    ]


  }



]



const questionElement = document.getElementById("question");
const answerbutton= document.getElementById("answerbutton");
const nextbutton= document.getElementById("next-btn");


let currentquestionindex = 0;

let score = 0;

function startQuiz(){

  currentquestionindex = 0;
  currentquestionindex = 0;

  nextbutton.innerHTML="Next";

  showQuestion();



}


function showQuestion(){

  resetState();

let currentQuestion = questions[currentquestionindex];
let questionNo =currentquestionindex+1;
questionElement.innerHTML= questionNo+"."+currentQuestion.question;


currentQuestion.answers.forEach(answer => {

const button = document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answerbutton.appendChild(button);

if(answer.correct){

button.dataset.correct= answer.correct;

}
button.addEventListener("click",selectAnswer)


});

  
}

function resetState(){

nextbutton.style.display="none";

while(answerbutton.firstChild){

  answerbutton.removeChild(answerbutton.firstChild);


}


}

 function selectAnswer(e){

   const selectedbtn = e.target;
   const isCorrect = selectedbtn.dataset.correct === "true";
   if(isCorrect){

  selectedbtn.classList.add("correct");
     score++;
   }else{

    selectedbtn.classList.add("incorrect");

   }

   Array.from(answerbutton.children).forEach(button=>{

      if(button.dataset.correct ==="true"){

         button.classList.add("correct");

      }
       button.disabled= true;

   });

  nextbutton.style.display ="block"

 }


 function showScore(){

  resetState();

  questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;

  nextbutton.innerHTML ="Play Again";

  nextbutton.style.display="block";


 }






 function handlenextbutton(){

  currentquestionindex++;

  if(currentquestionindex <questions.length){

    showQuestion();

  }

  else{
   showScore();


  }




 }


nextbutton.addEventListener("click",()=>{

  if(currentquestionindex<questions.length){
    
    handlenextbutton();


  }

  else{

    startQuiz();

  }


});

startQuiz();