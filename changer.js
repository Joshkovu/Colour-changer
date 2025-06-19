const input = document.querySelector("#input");
const inputContainer = document.querySelector("#list");

function addTask(){
    if (input===''){
        alert("you must write something")
    }else {
        let li =document.createElement("li");
        li.innerHtml=input.value;
        
        inputContainer.appendChild(li);
        li.style.color="red"
    }
    input.value=""
}