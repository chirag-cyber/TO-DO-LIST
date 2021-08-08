window.onload = function(){
    let task = document.querySelector("#inputfield input");
    let addTask = document.querySelector("#add");
    let list = document.querySelector("#list");
    

    addTask.addEventListener("click", ()=>{
        list.insertAdjacentHTML(
            `afterbegin`,
            `<li>
                   <i class="fas fa-trash deleteTask"></i>

                   <h4>${task.value}</h4>
            </li>`
        );

        task.value = "";

        let deleteTask = document.querySelectorAll(".deleteTask");

        deleteTask.forEach((del) =>{
            del.addEventListener("click", ()=>{
                del.parentElement.remove();

            });
        });
    });
};
