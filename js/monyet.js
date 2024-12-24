<script>
  // Ambil elemen input pencarian dan daftar produk
  const searchInput = document.getElementById('searchInput');
  const productItems = document.querySelectorAll('.product-item');

  // Fungsi untuk menangani pencarian
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase(); // Ambil input dan ubah menjadi huruf kecil

    productItems.forEach(item => {
      const title = item.querySelector('h3').textContent.toLowerCase(); // Ambil nama produk

      // Tampilkan produk jika ada kecocokan dengan pencarian
      if (title.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
</script>
