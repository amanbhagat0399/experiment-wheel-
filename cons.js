myobj =
{
  "problem": " this is the answer ",
  "choicearray": [],
  "choices":
  {
  },
  "moreinfo": "",
  "whocanhelp": [],
  "Decision": "this is the decision taken by user",
  "assessdecisison": " for decision assesment"
}
var questions = [" 1. What is Problem ?",
  "2. What are the Choices ?",
  "3. what can be the Consequences?",
  "4. What are the Values ?",
  "5. How are you Feeling ?",
  "6.  Anything More you want to share ?",
  "7. Who Can Help ?",
  "8. what is your Decision ?",
  "9. Assess Decision"];

var InputConfig = [
  {"multiple" : false , "question" : " What is Problem ?" , "title" : "Problem" },
  {"multiple" : true , "question" : "What are the choices?" , "title" : "Choice"  },
  {"multiple" : true , "linkedto" : 1 , "question" : "What are the consequences ?" , "title" : "Consequences"},
  {"multiple" : true , "linkedto" : 1 , "question" : "What are the values?" , "title" : "Values"},
  {"multiple" : false , "linkedto": 1 , "question" : " What are your feelings ?" , "title" : "Feelings"},
  {"multiple" : false , "question" : "Anything More you want to share ?" , "title" : "More Information"},
  {"multiple" : false , "question" : "Who Can Help ?" , "title" : "Help"},
  {"multiple" : false , "question" : "What is your Decision ?" , "title" : "Decision"},
  {"multiple" : false , "question" : "Assess Decision." , "title" : "Assess Decision"}
];

function enable_next_button(flag){
  if (flag==9){
    var next_id_number= flag +2;
  }
  else{
    var next_id_number= flag +1;
  }
  
  var next_button_string= next_id_number.toString();
  var next_button_id='b'.concat(next_button_string);
  document.getElementById(next_button_id).disabled = false;
}

var     activeView = "tree";
function toggleDataEntryView()
{
  var tree = document.getElementById("decision_tree");
  var input_box = document.getElementById("userdataentrybox");
          
  if ( activeView == "tree") 
  {
    tree.style.display= "none";
    input_box.style.display="block";
    activeView = "inputbox";
  }   
  else 
  {
    tree.style.display= "block";
    input_box.style.display="none";
    activeView = "tree";
  }                                                                                                                           
}

var currentStage = 0;
var ProgStructure = 
[{}];
function collectresponse(btn){
  var button_id = btn.id;
  // currentStage = btn.GetAtttibute("stage")
  flag = parseInt(button_id.charAt(1)); 
  var qno = parseInt(button_id.charAt(1)) - 1;
  var question = questions[qno];
  console.log(InputConfig[currentStage].multiple)
  if( InputConfig[currentStage].linkedto== 1){

  }
  else if(InputConfig[currentStage].multiple== true){
    document.getElementById("InputNewBtn").disabled=false;
    document.getElementById("InputRemoveBtn").disabled=false;
  }
  else if(InputConfig[currentStage].multiple== false){
    document.getElementById("InputNewBtn").disabled=true;
    document.getElementById("InputRemoveBtn").disabled=true;
  }
  /* When the input box is constructed
    Set the title
    if this question is linked with a choice, set the choice
    else reset the choice

    InputNewBtn
    InputRemoveBtn
    InputNextBtn
    InputPreviousBtn


    multipleoptions - true
  */

  // Set fields of data entry window
  var x = document.getElementById("iQuestion").innerHTML = question;
  
  // Toggle the view
  currentStage+=1;
  toggleDataEntryView();  
 }

 function SubmitInput(){
  enable_next_button(flag);

  // Toggle the view
  toggleDataEntryView();  
 }

var modal6 = document.getElementById("myModal6");
var btn = document.getElementById("b11");
var span6 = document.getElementsByClassName("close6")[0];

span6.onclick = function () {
  modal6.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
function changehtml() {

  document.getElementById("p1").innerHTML = myobj.problem;
  document.getElementById("p6").innerHTML = myobj.moreinfo;
  document.getElementById("p7").innerHTML = myobj.whocanhelp;
  document.getElementById("p8").innerHTML = myobj.Decision;
  document.getElementById("p9").innerHTML = myobj.assessdecisison;
  modal6.style.display = "block";
}