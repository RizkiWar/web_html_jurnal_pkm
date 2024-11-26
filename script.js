function toggleDropdown(event) {
    // Mencegah aksi default link
    event.preventDefault();
    
    // Toggle kelas "active" pada dropdown
    const dropdown = event.target.nextElementSibling;
    dropdown.classList.toggle("active");
  }
  
  // Menutup dropdown saat mengklik di luar
  document.addEventListener("click", function(event) {
    const isClickInside = event.target.closest('.nav-link');
    if (!isClickInside) {
      const dropdowns = document.querySelectorAll('.drop-down');
      dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
  });