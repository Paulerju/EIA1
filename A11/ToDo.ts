let tasks: NewTask[] = [];
let del = (<HTMLInputElement>document.getElementById("bin"));
let lenght = tasks.length;

interface NewTask {
    text: string;
    
}

document.querySelector('#new').addEventListener('click', function () {
    let Inputvalue = (<HTMLInputElement>document.getElementById("Input"));
    //div wird erstellt
    let newdiv = document.createElement("div");
    newdiv.setAttribute("id", "div1");
    //div kommt an den Anfang
    document.getElementById("wrapper").appendChild(newdiv);
    var sp2 = document.getElementById("wrapper");
    var parentDiv = sp2.firstChild;
    sp2.insertBefore(newdiv,parentDiv)
    

    let task: NewTask = {
        text: Inputvalue.value,
    };
    //Text wird eingefügt
    let text = document.createElement("p");
    text.setAttribute("id", "text"); 
    //Counter
    if (Inputvalue.value.length !== 0) {
        console.log(Inputvalue);
        Inputvalue = (<HTMLInputElement>document.getElementById("Input"));
        text.innerHTML = Inputvalue.value;
        tasks.unshift(task); console.log(tasks)
        lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total.";
    } 

    newdiv.appendChild(text);

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "box");
    newdiv.appendChild(check);

    let Trashbin = document.createElement("i");
    Trashbin.setAttribute("class", "fas fa-trash");
    Trashbin.setAttribute("id","trash");
    Trashbin.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        tasks.pop();
        lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total.";
    })
    newdiv.appendChild(Trashbin);
    console.log(tasks.length);
});

