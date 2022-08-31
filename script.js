const push = document.querySelector("#push");
const input = document.querySelector("#newtask input");
const tasks = document.querySelector("#tasks");
const editTasks = document.querySelectorAll(".edit-btn");

push.onclick = function () {
  if (input.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    tasks.innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${input.value}
              </span>

              <div>
              <button class="edit-btn">
                  <i class="fa fa-pencil" title="edit" style="font-size:18px"></i>
              </button>
              
              <button class="delete-btn">
                  <i class="fa fa-trash-o" title="delete" style="font-size:18px"></i>
              </button>
              </div>
          </div>
      `;

    const currentTasks = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.parentNode.remove();
      };
    }
    for (let i = 0; i < editTasks.length; i++) {
      editTasks[i].onclick = function () {};
    }
  }
};
document.querySelector("#clear").onclick = function () {
  tasks.innerHTML = "";
};
