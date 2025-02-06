document.getElementById("saveBtn").addEventListener("click", saveEntry);

function saveEntry() {
    let entry = document.getElementById("diaryEntry").value;
    if (entry.trim() === "") {
        alert("Entry cannot be empty!");
        return;
    }

    let encryptedEntry = btoa(entry); // Simple encryption using Base64
    let listItem = document.createElement("li");
    listItem.textContent = encryptedEntry;
    document.getElementById("entriesList").appendChild(listItem);

    document.getElementById("diaryEntry").value = ""; // Clear the input
}
