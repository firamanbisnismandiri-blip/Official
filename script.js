document.addEventListener(“DOMContentLoaded”, () => {

/* ================= SERVICE DATA ================= */
const services = {
    supplier: {
        number: "01",
        title: "General Supplier",
        description: `
            <p>
                Layanan General Supplier membantu memenuhi kebutuhan
                barang dan jasa untuk perusahaan, proyek maupun
                kebutuhan operasional lainnya.
            </p>
            <h4>LINGKUP LAYANAN</h4>
            <ul>
                <li>Pengadaan barang kebutuhan perusahaan</li>
                <li>Perlengkapan kantor</li>
                <li>Kebutuhan proyek</li>
                <li>Pengadaan berbagai jenis barang</li>
                <li>Koordinasi pengiriman dan distribusi</li>
            </ul>
        `
    },
    document: {
        number: "02",
        title: "Document Handling",
        description: `
            <p>
                Layanan Document Handling membantu proses pengurusan
                dan penerbitan dokumen yang diperlukan untuk
                kebutuhan administrasi maupun proyek.
            </p>
            <h4>LINGKUP LAYANAN</h4>
            <ul>
                <li>Pengurusan PBG</li>
                <li>Pengurusan PKKPR</li>
                <li>Dokumen pendukung</li>
                <li>Koordinasi administrasi</li>
                <li>Pendampingan proses dokumen</li>
            </ul>
        `
    },
    notarial: {
        number: "03",
        title: "Notarial Deed",
        description: `
            <p>
                Layanan Notarial Deed membantu kebutuhan akta dan
                dokumen kenotariatan yang berkaitan dengan kegiatan
                usaha dan perusahaan.
            </p>
            <h4>LINGKUP LAYANAN</h4>
            <ul>
                <li>Akta pendirian</li>
                <li>Perubahan data perusahaan</li>
                <li>Perubahan anggaran dasar</li>
                <li>Dokumen perusahaan</li>
                <li>Koordinasi dengan notaris</li>
                <li>Dokumen pendukung lainnya</li>
            </ul>
        `
    },
    construction: {
        number: "04",
        title: "Construction",
        description: `
            <p>
                Layanan Construction mencakup kebutuhan pekerjaan
                pembangunan, renovasi dan pekerjaan konstruksi
                sesuai kebutuhan proyek.
            </p>
            <h4>LINGKUP LAYANAN</h4>
            <ul>
                <li>Pembangunan</li>
                <li>Renovasi</li>
                <li>Pekerjaan sipil</li>
                <li>Pekerjaan struktur</li>
                <li>Pekerjaan finishing</li>
                <li>Koordinasi pekerjaan proyek</li>
            </ul>
        `
    },
    architect: {
        number: "05",
        title: "Architect Design",
        description: `
            <p>
                Layanan Architect Design membantu perencanaan dan
                desain bangunan agar kebutuhan ruang, fungsi dan
                konsep proyek dapat direncanakan dengan baik.
            </p>
            <h4>LINGKUP LAYANAN</h4>
            <ul>
                <li>Konsep desain bangunan</li>
                <li>Denah dan layout</li>
                <li>Desain fasad</li>
                <li>Visualisasi</li>
                <li>Perencanaan arsitektur</li>
            </ul>
        `
    },
    realestate: {
        number: "06",
        title: "Real Estate",
        description: `
            <p>
                Layanan Real Estate memberikan solusi dan bantuan
                terkait kebutuhan properti, informasi properti
                maupun pengembangan kebutuhan real estate.
            </p>
            <h4>LINGKUP LAYANAN</h4>
            <ul>
                <li>Konsultasi kebutuhan properti</li>
                <li>Informasi dan pemasaran properti</li>
                <li>Pendampingan kebutuhan properti</li>
                <li>Koordinasi administrasi</li>
                <li>Kebutuhan pengembangan properti</li>
            </ul>
        `
    }
};
/* ================= MODAL ================= */
const serviceCards =
    document.querySelectorAll(".service-card");
const modal =
    document.getElementById("serviceModal");
const modalClose =
    document.getElementById("modalClose");
const modalNumber =
    document.getElementById("modalNumber");
const modalTitle =
    document.getElementById("modalTitle");
const modalDescription =
    document.getElementById("modalDescription");
const modalContact =
    document.getElementById("modalContact");
function openModal(serviceKey) {
    const service = services[serviceKey];
    if (!service) return;
    modalNumber.textContent = service.number;
    modalTitle.textContent = service.title;
    modalDescription.innerHTML =
        service.description;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(() => {
        modalClose.focus();
    }, 50);
}
function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}
serviceCards.forEach(card => {
    card.addEventListener("click", () => {
        const serviceKey =
            card.dataset.service;
        openModal(serviceKey);
    });
    card.addEventListener("keydown", event => {
        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            const serviceKey =
                card.dataset.service;
            openModal(serviceKey);
        }
    });
});
modalClose.addEventListener(
    "click",
    closeModal
);
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});
document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {
        closeModal();
    }
});
modalContact.addEventListener("click", () => {
    closeModal();
});
/* ================= MOBILE MENU ================= */
const mobileButton =
    document.getElementById("mobileMenuButton");
const mobileNav =
    document.getElementById("mobileNav");
mobileButton.addEventListener("click", () => {
    const active =
        mobileNav.classList.toggle("active");
    mobileButton.setAttribute(
        "aria-expanded",
        active ? "true" : "false"
    );
});
mobileNav
    .querySelectorAll("a")
    .forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
/* ================= BACK TO TOP ================= */
const backToTop =
    document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* ================= CURRENT YEAR ================= */
const year =
    document.getElementById("year");
if (year) {
    year.textContent =
        new Date().getFullYear();
}

});