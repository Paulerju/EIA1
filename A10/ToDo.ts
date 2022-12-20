const tasks: NewTask[] = []; 
let del = (<HTMLInputElement>document.getElementById("bin")); 


interface NewTask{
    text: string; 
   
}

document.querySelector('#new').addEventListener('click', function() {

let div = document.createElement("div");
div.setAttribute("id","div1");
document.body.appendChild(div);

let text = document.createElement("p");
text.setAttribute("id","text");
if(Inputvalue != ""){
    Inputvalue = (<HTMLInputElement>document.getElementById("Input")).value; 
text.innerHTML = Inputvalue;
 tasks.push(task); console.log(tasks)
 let lenght = tasks.length; 
 document.querySelector("h2").textContent = "There are "+lenght+ " Tasks in total.";
}

div.appendChild(text); 

let check = document.createElement("input"); 
check.setAttribute("type", "checkbox"); 
check.setAttribute("id", "box"); 
div.appendChild(check); 

let Trashbin = document.createElement("i");
Trashbin.setAttribute("class","fas fa-trash");
div.appendChild(Trashbin);

});

