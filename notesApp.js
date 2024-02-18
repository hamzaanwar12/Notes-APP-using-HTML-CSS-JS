let createNode = (text = " ") => {
    let Note = document.createElement("div")
    Note.classList.add("note")
    Note.innerHTML = `
        <div class="features">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        <div class="notes" contenteditable>${text}</div>`
        if(text!=" ")
            Note.querySelector(".notes").setAttribute("contenteditable","false")

    Notebook.appendChild(Note)

    let deleteIcon, toggleicon
    let noted = []

    deleteIcon = Note.querySelector("i.fa-trash")
    toggleicon = Note.querySelector("i.fa-pen-to-square")

    deleteIcon.addEventListener("click", () => Note.remove());
    toggleicon.addEventListener("click", () => 
    {
        let element = Note.querySelector(".notes")
        if(element.getAttribute("contenteditable"))
            element.setAttribute("contenteditable", "false")
        else
        element.setAttribute("contenteditable", "true")

        let notes = document.querySelectorAll("div.notes")
        
        notes.forEach(element =>{
            if(element.textContent != "")
            {
                if(element.getAttribute("contenteditable"))
                {
                    console.log(element.getAttribute("contenteditable"))
                    noted.push(element.textContent)
                }
                console.log(noted)
            }
            else 
                console.log("It cann't be pushed")
            
            localStorage.setItem("notes",JSON.stringify(noted))
        });
    });
}

let addNote = document.querySelector("button")
let Notebook = document.querySelector(".container")
// let StoredNotes = JSON.parse(localStorage.getItem("notes"))

let StoredNotes = JSON.parse( localStorage.getItem("notes"))
console.log(StoredNotes)

if(StoredNotes!=null)
{
    console.log(StoredNotes.length)
    for(let i = 0;i<StoredNotes.length;i++)
        createNode(StoredNotes[i])

}


console.log(addNote)
console.log(Notebook)

addNote.addEventListener("click", () => {
    createNode();
});

