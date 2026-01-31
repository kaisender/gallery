// Funciones para manejar localStorage
function getGallery() {
    const data = localStorage.getItem('bookGallery');
    return data ? JSON.parse(data) : [];
}

function addToGallery(item) {
    const gallery = getGallery();
    gallery.push(item);
    localStorage.setItem('bookGallery', JSON.stringify(gallery));
}

function clearGallery() {
    localStorage.removeItem('bookGallery');
}
