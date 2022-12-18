let Inputvalue = document.getElementById("Input").value;
const tasks = [];
let del = document.getElementById("bin");
let task = {
    text: Inputvalue,
};
document.querySelector('#new').addEventListener('click', function () {
    let div = document.createElement("div");
    div.setAttribute("id", "div1");
    document.body.appendChild(div);
    let text = document.createElement("p");
    text.setAttribute("id", "text");
    if (Inputvalue != "") {
        Inputvalue = document.getElementById("Input").value;
        text.innerHTML = Inputvalue;
        tasks.push(task);
        console.log(tasks);
        let lenght = tasks.length;
        document.querySelector("h2").textContent = "There are " + lenght + " Tasks in total.";
    }
    div.appendChild(text);
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "box");
    div.appendChild(check);
    let Trashbin = document.createElement("img");
    Trashbin.setAttribute("src", "../Images\Mülltonne.png");
    Trashbin.setAttribute("id", "bin");
    div.appendChild(Trashbin);
});
/* Delete??*/
document.querySelector('#bin').addEventListener('click', function () {
    let d = document.getElementById("div1");
    let d_nested = document.getElementById("nested");
    let throwawayNode = d.removeChild(d_nested);
});
//# sourceMappingURL=ToDo.js.map