const photoUpload = document.getElementById('photo-upload');
const photoGallery = document.getElementById('photo-gallery');

photoUpload.addEventListener('change', function(event) {
    const files = event.target.files;

    if (files.length === 0) {
        return;
    }

    // જો ફોટો ગેલેરીમાં ગ્રીડ ન હોય તો તેને બનાવો
    let photoGrid = document.querySelector('.photo-grid');
    if (!photoGrid) {
        photoGrid = document.createElement('div');
        photoGrid.classList.add('photo-grid');
        photoGallery.appendChild(photoGrid);
    }

    for (const file of files) {
        // ખાતરી કરો કે ફાઈલ એક ઈમેજ છે
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                photoGrid.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    }
});
