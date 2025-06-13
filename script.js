// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!name || !email.includes("@")) {
        document.getElementById("formMessage").innerText = "Please enter a valid name and email!";
    } else {
        document.getElementById("formMessage").innerText = "Thank you for contacting us!";
        this.reset();
    }
});



// To-Do List Functionality
function addTask() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText.trim() === "") return;

    let taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskInput").value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

// Image Gallery Functionality
document.getElementById("imageInput").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            document.getElementById("galleryContainer").appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});