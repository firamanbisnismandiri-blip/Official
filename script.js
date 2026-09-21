document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       SERVICE DATA
    ===================================================== */
    const services = {
        supplier: {
            number: "01",
            title: "GENERAL SUPPLIER",
            description: `
                <p>
                    PT Firaman Bisnis Mandiri menyediakan layanan
                    pengadaan barang dan jasa untuk berbagai kebutuhan
                    perusahaan, instansi, proyek maupun kebutuhan bisnis.
                </p>
                <strong>Ruang lingkup layanan:</strong>
                <ul>
                    <li>Pengadaan barang kebutuhan perusahaan</li>
                    <li>Pengadaan perlengkapan kantor</li>
                    <li>Pengadaan kebutuhan proyek</li>
                    <li>Pengadaan barang dan jasa lainnya</li>
                    <li>Koordinasi pengiriman dan distribusi</li>
                </ul>
                <p>
                    Kebutuhan pengadaan dapat dikonsultasikan terlebih
                    dahulu agar spesifikasi dan kebutuhan dapat
                    disesuaikan.
                </p>
            `
        },
        document: {
            number: "02",
            title: "DOCUMENT HANDLING",
            description: `
                <p>
                    Layanan pengurusan dan penerbitan dokumen untuk
                    membantu kebutuhan administrasi, legalitas usaha
                    maupun kebutuhan proyek.
                </p>
                <strong>Layanan meliputi:</strong>
                <ul>
                    <li>Pengurusan dan penerbitan PBG</li>
                    <li>Pengurusan PKKPR</li>
                    <li>Pengurusan dokumen pendukung</li>
                    <li>Koordinasi proses administrasi</li>
                    <li>Pendampingan kebutuhan dokumen</li>
                </ul>
                <p>
                    Persyaratan dan proses dapat berbeda sesuai jenis
                    dokumen serta kebutuhan masing-masing klien.
                </p>
            `
        },
        notarial: {
            number: "03",
            title: "NOTARIAL DEED",
            description: `
                <p>
                    Layanan terkait kebutuhan akta dan dokumen
                    kenotariatan untuk mendukung administrasi serta
                    legalitas kegiatan bisnis.
                </p>
                <strong>Layanan dapat mencakup:</strong>
                <ul>
                    <li>Akta pendirian badan usaha</li>
                    <li>Perubahan data atau anggaran dasar</li>
                    <li>Dokumen perusahaan</li>
                    <li>Koordinasi kebutuhan kenotariatan</li>
                    <li>Dokumen legal pendukung lainnya</li>
                </ul>
                <p>
                    Pelaksanaan layanan disesuaikan dengan kebutuhan
                    dan jenis dokumen yang diperlukan.
                </p>
            `
        },
        construction: {
            number: "04",
            title: "CONSTRUCTION",
            description: `
                <p>
                    Layanan konstruksi untuk mendukung kebutuhan
                    pembangunan, renovasi dan pekerjaan proyek.
                </p>
                <strong>Ruang lingkup layanan:</strong>
                <ul>
                    <li>Pekerjaan pembangunan</li>
                    <li>Renovasi dan perbaikan bangunan</li>
                    <li>Pekerjaan sipil</li>
                    <li>Pekerjaan struktur</li>
                    <li>Pekerjaan finishing</li>
                    <li>Koordinasi pekerjaan proyek</li>
                </ul>
                <p>
                    Pelaksanaan pekerjaan disesuaikan dengan spesifikasi,
                    kebutuhan dan ruang lingkup proyek.
                </p>
            `
        },
        architect: {
            number: "05",
            title: "ARCHITECT DESIGN",
            description: `
                <p>
                    Layanan perencanaan dan desain arsitektur untuk
                    membantu mewujudkan konsep bangunan sesuai dengan
                    kebutuhan dan karakter proyek.
                </p>
                <strong>Layanan dapat meliputi:</strong>
                <ul>
                    <li>Konsep desain bangunan</li>
                    <li>Denah dan tata ruang</li>
                    <li>Desain tampak bangunan</li>
                    <li>Visualisasi desain</li>
                    <li>Perencanaan arsitektur</li>
                </ul>
                <p>
                    Konsep desain dapat dikembangkan berdasarkan
                    kebutuhan fungsi, estetika dan karakter bangunan.
                </p>
            `
        },
        realestate: {
            number: "06",
            title: "REAL ESTATE",
            description: `
                <p>
                    Layanan di bidang real estate dan properti untuk
                    membantu kebutuhan terkait aset, properti serta
                    pengembangan kawasan.
                </p>
                <strong>Ruang lingkup layanan dapat meliputi:</strong>
                <ul>
                    <li>Konsultasi kebutuhan properti</li>
                    <li>Informasi dan pemasaran properti</li>
                    <li>Pendampingan kebutuhan properti</li>
                    <li>Koordinasi administrasi</li>
                    <li>Kebutuhan pengembangan properti</li>
                </ul>
                <p>
                    Detail layanan dapat dibicarakan berdasarkan jenis
                    dan kebutuhan properti yang dimaksud.
                </p>
            `
        }
    };
    /* =====================================================
       ELEMENTS
    ===================================================== */
    const modal = document.getElementById("serviceModal");
    const modalBox =
        document.querySelector(".service-modal");
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
    const serviceCards =
        document.querySelectorAll(".service-card");
    const mobileMenuButton =
        document.getElementById("mobileMenuButton");
    const mobileNav =
        document.getElementById("mobileNav");
    const backToTop =
        document.getElementById("backToTop");
    const year =
        document.getElementById("year");
    /* =====================================================
       OPEN MODAL
    ===================================================== */
    function openModal(serviceKey) {
        const service = services[serviceKey];
        if (!service) {
            return;
        }
        modalNumber.textContent =
            service.number;
        modalTitle.textContent =
            service.title;
        modalDescription.innerHTML =
            service.description;
        modal.classList.add("active");
        modal.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.classList.add(
            "modal-open"
        );
        modalBox.scrollTop = 0;
        modalClose.focus();
    }
    /* =====================================================
       CLOSE MODAL
    ===================================================== */
    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute(
            "aria-hidden",
            "true"
        );
        document.body.classList.remove(
            "modal-open"
        );
    }
    /* =====================================================
       SERVICE CARD CLICK
    ===================================================== */
    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            const serviceKey =
                card.dataset.service;
            openModal(serviceKey);
        });
        /*
         Keyboard accessibility:
         Enter / Space
        */
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
    /* =====================================================
       CLOSE BUTTON
    ===================================================== */
    modalClose.addEventListener(
        "click",
        closeModal
    );
    /* =====================================================
       CLICK OUTSIDE MODAL
    ===================================================== */
    modal.addEventListener(
        "click",
        event => {
            if (
                event.target === modal
            ) {
                closeModal();
            }
        }
    );
    /* =====================================================
       ESCAPE KEY
    ===================================================== */
    document.addEventListener(
        "keydown",
        event => {
            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {
                closeModal();
            }
        }
    );
    /* =====================================================
       MODAL CONTACT BUTTON
    ===================================================== */
    modalContact.addEventListener(
        "click",
        () => {
            closeModal();
        }
    );
    /* =====================================================
       MOBILE MENU
    ===================================================== */
    mobileMenuButton.addEventListener(
        "click",
        () => {
            const isOpen =
                mobileNav.classList.toggle(
                    "active"
                );
            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );
        }
    );
    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */
    mobileNav
        .querySelectorAll("a")
        .forEach(link => {
            link.addEventListener(
                "click",
                () => {
                    mobileNav.classList.remove(
                        "active"
                    );
                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });
    /* =====================================================
       BACK TO TOP
    ===================================================== */
    window.addEventListener(
        "scroll",
        () => {
            if (
                window.scrollY > 500
            ) {
                backToTop.classList.add(
                    "show"
                );
            } else {
                backToTop.classList.remove(
                    "show"
                );
            }
        }
    );
    backToTop.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
    /* =====================================================
       CURRENT YEAR
    ===================================================== */
    if (year) {
        year.textContent =
            new Date().getFullYear();
    }
    /* =====================================================
       CLOSE MODAL WHEN CONTACT SECTION IS CLICKED
    ===================================================== */
    document
        .querySelectorAll('a[href="#contact"]')
        .forEach(link => {
            link.addEventListener(
                "click",
                () => {
                    if (
                        modal.classList.contains("active")
                    ) {
                        closeModal();
                    }
                }
            );
        });
});