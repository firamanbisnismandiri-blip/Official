// =====================================================
// NAVIGASI SMOOTH SCROLL
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


// =====================================================
// NAVIGASI AKTIF SAAT SCROLL
// =====================================================

const sections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".nav-link"
);

const sectionObserver = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach(function (link) {

        link.classList.toggle(
          "active",
          link.getAttribute("href") ===
          "#" + entry.target.id
        );

      });

    });

  },
  {
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  }
);


sections.forEach(function (section) {

  sectionObserver.observe(section);

});


// =====================================================
// DATA DETAIL LAYANAN
// =====================================================

const serviceDetails = {

  supplier: {

    title: "General Supplier",

    items: [
      "Pengadaan barang dan jasa."
    ]

  },


  document: {

    title: "Document Handling",

    items: [

      "Pengurusan dan penerbitan PBG.",

      "Pengurusan dan penerbitan PKKPR Darat dan PKKPRL Laut.",

      "Pengurusan dan penerbitan Sertifikat SHGB Induk dan Pecah.",

      "Pengurusan dan penerbitan dokumen lahan BP Batam (UWTO, SKEP, SPJ, rekom).",

      "Pengurusan dan penerbitan PBB Induk dan Pecah.",

      "Pengurusan izin lingkungan (SPPL / UKL-UPL / AMDAL).",

      "Pengurusan dan penerbitan Sertifikat Laik Fungsi (SLF).",

      "Pengurusan dan penerbitan Certificate of Origin (COO)."

    ]

  },


  notarial: {

    title: "Notarial Deed",

    items: [

      "Pendirian akta PT, CV, dan Yayasan.",

      "RUPS / Akta.",

      "Penerbitan NPWP PT / CV.",

      "Pembuatan akun dan/atau perubahan OSS.",

      "Penerbitan NIB."

    ]

  },


  construction: {

    title: "Construction",

    items: [

      "Pembuatan bangunan baru.",

      "Renovasi bangunan."

    ]

  },


  architect: {

    title: "Architect Design",

    items: [

      "Pembuatan gambar kerja bangunan.",

      "Pembuatan Rincian Anggaran Biaya (RAB).",

      "Pembuatan site plan, denah, dan tampak.",

      "Pembuatan hitung struktur.",

      "Pembuatan tiga dimensi bangunan (3D)."

    ]

  },


  realestate: {

    title: "Real Estate",

    items: [

      "Penjualan rumah baru.",

      "Penjualan rumah second.",

      "Agen property."

    ]

  }

};


// =====================================================
// ELEMENT POPUP
// =====================================================

const serviceModal =
  document.getElementById("serviceModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalList =
  document.getElementById("modalList");

const modalWhatsapp =
  document.getElementById("modalWhatsapp");

const serviceButtons =
  document.querySelectorAll(".service-card");

const closeModalButtons =
  document.querySelectorAll("[data-close-modal]");


// =====================================================
// BUKA POPUP
// =====================================================

function openServiceModal(serviceKey) {

  const service =
    serviceDetails[serviceKey];

  if (!service) {
    return;
  }


  // Judul popup
  modalTitle.textContent =
    service.title;


  // Bersihkan daftar lama
  modalList.innerHTML = "";


  // Masukkan semua detail
  service.items.forEach(function (item) {

    const li =
      document.createElement("li");

    li.textContent = item;

    modalList.appendChild(li);

  });


  // Buat pesan WhatsApp otomatis
  const message =
    encodeURIComponent(
      "Halo PT Firaman Bisnis Mandiri, " +
      "saya ingin berkonsultasi mengenai layanan " +
      service.title +
      "."
    );


  modalWhatsapp.href =
    "https://wa.me/628117000250?text=" +
    message;


  // Tampilkan popup
  serviceModal.classList.add("open");

  serviceModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


// =====================================================
// TUTUP POPUP
// =====================================================

function closeServiceModal() {

  serviceModal.classList.remove(
    "open"
  );

  serviceModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


// =====================================================
// KLIK KARTU LAYANAN
// =====================================================

serviceButtons.forEach(function (button) {

  button.addEventListener(
    "click",
    function () {

      const serviceKey =
        this.dataset.service;

      openServiceModal(
        serviceKey
      );

    }
  );

});


// =====================================================
// KLIK X / BACKGROUND
// =====================================================

closeModalButtons.forEach(function (button) {

  button.addEventListener(
    "click",
    function () {

      closeServiceModal();

    }
  );

});


// =====================================================
// TOMBOL ESC
// =====================================================

document.addEventListener(
  "keydown",
  function (e) {

    if (
      e.key === "Escape" &&
      serviceModal.classList.contains("open")
    ) {

      closeServiceModal();

    }

  }
);