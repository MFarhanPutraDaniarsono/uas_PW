function showSection(sectionId) {
    // Sembunyikan semua bagian
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Tampilkan bagian yang dipilih
    document.getElementById(sectionId).classList.add('active');
}

function submitConsultation() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const healthIssue = document.getElementById('healthIssue').value;

    if (!name || !age || !healthIssue) {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Tanggapan khusus berdasarkan masalah kesehatan yang dipilih
    let healthAdvice;


    
    switch (healthIssue) {
        case 'Mudah Lelah':
            healthAdvice = "Kami sarankan Anda untuk memperhatikan asupan nutrisi dan istirahat yang cukup. Kami akan membantu Anda dengan tips meningkatkan energi.";
            break;
        case 'Sakit Kepala':
            healthAdvice = "Sakit kepala bisa disebabkan oleh banyak faktor. Kami akan membantu mencari akar masalah dan memberikan saran yang sesuai.";
            break;
        case 'Gangguan Tidur':
            healthAdvice = "Gangguan tidur dapat mengganggu kesehatan secara keseluruhan. Kami akan membantu Anda menemukan solusi untuk tidur yang lebih berkualitas.";
            break;
        case 'Migrain':
            healthAdvice = "Migrain dapat ditangani dengan pola hidup sehat dan mengurangi pemicu stres. Kami siap membantu Anda dengan konsultasi lebih lanjut.";
            break;
        case 'Stres dan Kecemasan':
            healthAdvice = "Stres dan kecemasan mempengaruhi kesehatan mental dan fisik. Kami akan membantu Anda dengan tips dan strategi untuk mengelola stres.";
            break;
        default:
            healthAdvice = "Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda untuk konsultasi lebih lanjut.";
            break;
    }

    // Pesan konfirmasi akhir
    const confirmationMessage = `Terima kasih, ${name}! ${healthAdvice} Kami akan segera menghubungi Anda untuk konsultasi lebih lanjut.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
}
