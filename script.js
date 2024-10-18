document.getElementById('title').addEventListener('click', function() {
    window.location.href = 'second.html'; // Bawa ke next screen
});

function customizeName(section) {
    const newName = prompt("Enter new name:", section.textContent);
    if (newName) {
        section.textContent = newName; // Update section dengan nama baru
    }
}
