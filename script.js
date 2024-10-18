function goToNextScreen() {
    alert("Next screen logic can be implemented here!");
}

function customizeName(index) {
    const newName = prompt("Enter new name:");
    if (newName) {
        document.getElementById(`name${index}`).innerText = newName;
    }
}
