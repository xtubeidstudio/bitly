// Dapatkan nilai parameter "convertowebp" dari URL
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('convertowebp');

// Periksa apakah parameter tersebut ada dan tidak kosong
if (imageUrl) {
  // Buat elemen gambar baru
  const img = new Image();

  // Atur sumber gambar ke URL yang ditentukan
  img.src = imageUrl;

  // Ketika gambar sudah dimuat, konversi ke format WebP
  img.onload = function () {
    // Buat elemen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Atur dimensi canvas sesuai dengan gambar
    canvas.width = img.width;
    canvas.height = img.height;

    // Gambar gambar ke dalam canvas
    ctx.drawImage(img, 0, 0);

    // Konversi konten canvas ke format WebP
    canvas.toBlob(
      function (blob) {
        // Buat URL objek untuk blob WebP
        const webpUrl = URL.createObjectURL(blob);

        // Ganti sumber gambar dengan URL WebP
        img.src = webpUrl;

        // Optional: Tambahkan elemen gambar ke dokumen
        document.body.appendChild(img);
      },
      'image/webp',
      1.0
    );
  };
} else {
  console.error('URL Gambar tidak diberikan');
}
