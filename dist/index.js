"use strict";
function addTask(title) {
    var _a;
    const tasksList = document.getElementsByTagName("ul");
    const item = document.createElement("li");
    const taskLabel = document.createElement("label");
    const button = document.createElement("button");
    const div = document.createElement("div");
    div.className = "output-group";
    taskLabel.className = "label";
    taskLabel.textContent = title;
    button.className = "btn btn--danger";
    button.textContent = "Delete";
    button.addEventListener("click", () => {
        const isConfirmed = confirm("Are you sure?");
        if (isConfirmed) {
            item.remove();
        }
    });
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const task = document.createElement("div");
    task.className = "task";
    task.appendChild(checkbox);
    task.appendChild(taskLabel);
    div.appendChild(task);
    div.append(button);
    item.appendChild(div);
    (_a = tasksList[0]) === null || _a === void 0 ? void 0 : _a.append(item);
    const inputField = document.getElementsByTagName("input")[0];
    inputField.value = "";
}
function handleTextChange() {
    var _a;
    return (_a = document.getElementsByTagName("input")[0]) === null || _a === void 0 ? void 0 : _a.value;
}
const inputField = document.getElementById("task");
inputField === null || inputField === void 0 ? void 0 : inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask(handleTextChange());
    }
});
//# sourceMappingURL=index.js.map