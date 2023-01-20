let tasks = [];
let del = document.getElementById("bin");
let lenght = tasks.length;
let Countchecked = 0;
let Countunchecked = 0;
document.querySelector('#new').addEventListener('click', function () {
    let Inputvalue = document.getElementById("Input");
    //div wird erstellt
    let newdiv = document.createElement("div");
    newdiv.setAttribute("id", "div1");
    Countunchecked++;
    //div kommt an den Anfang
    document.getElementById("wrapper").appendChild(newdiv);
    var sp2 = document.getElementById("wrapper");
    var parentDiv = sp2.firstChild;
    sp2.insertBefore(newdiv, parentDiv);
    let task = {
        text: Inputvalue.value,
        checked: false,
    };
    //Text wird eingefügt
    let text = document.createElement("p");
    text.setAttribute("id", "text");
    //Counter
    if (Inputvalue.value.length !== 0) {
        console.log(Inputvalue);
        Inputvalue = document.getElementById("Input");
        text.innerHTML = Inputvalue.value;
        tasks.unshift(task);
        console.log(tasks);
        lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total. " + Countchecked + " are done. " + Countunchecked + " are still open.";
    }
    newdiv.appendChild(text);
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "box");
    newdiv.appendChild(check);
    check.addEventListener("click", function () {
        if (this.checked == false) {
            Countunchecked++;
            Countchecked--;
        }
        else {
            Countchecked++;
            Countunchecked--;
        }
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total. " + Countchecked + " are done. " + Countunchecked + " are still open.";
    });
    let Trashbin = document.createElement("i");
    Trashbin.setAttribute("class", "fas fa-trash");
    Trashbin.setAttribute("id", "trash");
    Trashbin.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        tasks.pop();
        lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total. " + Countchecked + " are done. " + Countunchecked + " are still open.";
        // -1 of checked / unchecked that was deleted 
    });
    newdiv.appendChild(Trashbin);
    console.log(tasks.length);
});
//# sourceMappingURL=ToDo.js.map