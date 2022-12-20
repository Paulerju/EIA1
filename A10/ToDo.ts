let tasks: NewTask[] = [];
let del = (<HTMLInputElement>document.getElementById("bin"));
let lenght = tasks.length;

interface NewTask {
    text: string;

}

document.querySelector('#new').addEventListener('click', function () {
    let Inputvalue = (<HTMLInputElement>document.getElementById("Input"));

    let div = document.createElement("div");
    div.setAttribute("id", "div1");
    document.body.appendChild(div);

    let task: NewTask = {
        text: Inputvalue.value,
    };

    let text = document.createElement("p");
    text.setAttribute("id", "text");

    if (Inputvalue.value.length !== 0) {
        console.log(Inputvalue);
        Inputvalue = (<HTMLInputElement>document.getElementById("Input"));
        text.innerHTML = Inputvalue.value;
        tasks.push(task); console.log(tasks)
        lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total.";
    }

    div.appendChild(text);

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "box");
    div.appendChild(check);

    let Trashbin = document.createElement("i");
    Trashbin.setAttribute("class", "fas fa-trash");
    Trashbin.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        tasks.pop();
        lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total.";
    })
    div.appendChild(Trashbin);
    console.log(tasks.length);
});

