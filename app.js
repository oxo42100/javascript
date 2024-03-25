// Écouter l'événement DOMContentLoaded pour s'assurer que le script s'exécute après le chargement complet du DOM.
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez le formulaire et les éléments nécessaires comme le message d'erreur et la liste des commentaires.
    const form = document.querySelector('form');
    const errorMessage = document.getElementById('error-message');
    const commentList = document.getElementById('comment-list');
 // Ecouter l'événement 'submit' du formulaire.
 form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêchez la soumission standard du formulaire pour permettre la validation et l'ajout dynamique.

    let isFormValid = true; // Variable pour suivre la validité du formulaire.
    let formData = { // Objet pour stocker les données du formulaire.
        firstName: '',
        lastName: '',
        message: ''
    };

 // Récupérer les valeurs des champs du formulaire et retirez les espaces superflus avec la cmde value.trim().
formData.firstName = form.querySelector('[name="first-name"]').value.trim();
formData.lastName = form.querySelector('[name="last-name"]').value.trim();
formData.message = form.querySelector('[name="message"]').value.trim();

// Vérifier qu'aucun des champs est vide pour déterminer la validité du formulaire.
if (!formData.firstName || !formData.lastName || !formData.message) {
    isFormValid = false; // Mettre à jour la validité si un champ est vide.
}
// Afficher ou masquer le message d'erreur basé sur la validité du formulaire.
if (!isFormValid) {
    errorMessage.style.display = 'block';
} else {
    errorMessage.style.display = 'none'; // Cacher le message d'erreur si le formulaire est OK.
    addComment(formData); // Ajouter le commentaire à la liste (voir fontion addComment)
    form.reset(); // Réinitialiser tous les champs du formulaire après l'ajout.
}
});

// Fonction pour ajouter un commentaire à la liste.
function addComment(data) {
    // Créer le HTML pour le nouveau commentaire en utilisant les données du formulaire.
    const commentHTML = `
        <div class="flex space-x-4 text-sm text-gray-500">
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${data.firstName} ${data.lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${data.message}</p>
                </div>
            </div>
        </div>
    `;
    // Insérer le nouveau commentaire HTML à la fin de la liste des commentaires.
    commentList.insertAdjacentHTML('beforeend', commentHTML);
    }
});