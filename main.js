let buttons = document.querySelectorAll('.btn-custom');
    buttons.forEach(button => {
    let text = button.textContent;
    button.innerHTML = ''; // Kosongkan konten tombol

    for (let char of text) {
        let span = document.createElement('span'); // Membuat elemen span untuk setiap karakter
        span.textContent = char === ' ' ? '\u00A0' : char; // Tambahkan spasi non-breaking jika karakter adalah spasi
        button.appendChild(span); // Tambahkan span ke tombol
    }
    let spans = button.querySelectorAll('span');

    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover'); // Perbaiki dari spar menjadi span
            }, index * 50);
        });
    });

    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover'); // Perbaiki dari spar menjadi span
            }, index * 50);
        });
    });
});