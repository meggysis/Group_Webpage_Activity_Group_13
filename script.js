/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    const button = bio.previousElementSibling;
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        button.textContent = "Hide Bio";
    } else {
        bio.style.display = "none";
        button.textContent = "Show Bio";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection1 = document.getElementById("bios1");
    const biosSection2 = document.getElementById("bios2");
    const visionSection = document.getElementById("vision");

    // Display the bios section(s) and hide the vision section
    if (sectionId === "bios") {
        biosSection1.style.display = "flex";
        biosSection2.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide both bios sections
    else if (sectionId === "vision") {
        biosSection1.style.display = "none";
        biosSection2.style.display = "none";
        visionSection.style.display = "block";
    }
}
