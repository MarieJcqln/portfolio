// Fonction pour inclure un fichier HTML dans une balise spécifique
function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(el => {
        fetch(el.getAttribute("data-include"))
            .then(response => response.text())
            .then(data => el.innerHTML = data)
            .catch(error => console.error("Erreur de chargement :", error));
    });
}

// Exécuter la fonction une fois la page chargée
document.addEventListener("DOMContentLoaded", includeHTML);
