// Fungsi untuk navigasi antar halaman utama
function showPage(page) {
  // Sembunyikan semua halaman
  document.getElementById("homePage").classList.add("d-none");
  document.getElementById("blogPage").classList.add("d-none");
  document.getElementById("contactPage").classList.add("d-none");
  document.getElementById("postContent").classList.add("d-none");

  // Tampilkan halaman yang dipilih
  document.getElementById(page + "Page").classList.remove("d-none");
}

// Data Artikel Blog
const blogPosts = {
  post1: {
      title: "Cara memakai tema Hugo",
      body: "Hugo adalah generator situs statis yang cepat dan fleksibel. Untuk memakai tema, cukup download dari repositori dan aktifkan di config.toml."
  },
  post2: {
      title: "Cara hosting dengan GitHub",
      body: "GitHub Pages memungkinkan kita untuk hosting situs secara gratis. Cukup push file ke branch 'gh-pages' dan aktifkan melalui settings."
  },
  post3: {
      title: "Teknik Telekomunikasi",
      body: "Telekomunikasi modern menggunakan berbagai teknik seperti OFDM, MIMO, dan LoRa untuk meningkatkan kapasitas jaringan."
  }
};

// Fungsi untuk menampilkan artikel blog
function showPost(postId) {
  document.getElementById("blogPage").classList.add("d-none");
  document.getElementById("postContent").classList.remove("d-none");

  document.getElementById("postTitle").innerText = blogPosts[postId].title;
  document.getElementById("postBody").innerText = blogPosts[postId].body;
}
