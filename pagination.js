document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 6; // Number of items per page
    const container = document.getElementById("filter-data");
    const items = Array.from(container.querySelectorAll(".box"));
    const paginationControls = document.getElementById("pagination-controls");
  
    // Calculate total pages
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    // Show a specific page
    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
  
      items.forEach((item, index) => {
        item.style.display = index >= start && index < end ? "block" : "none";
      });
  
      updatePaginationControls(page);
    }
  
    // Update pagination controls
    function updatePaginationControls(currentPage) {
      paginationControls.innerHTML = ""; // Clear existing controls
  
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = currentPage === i ? "active" : "";
        button.disabled = currentPage === i;
        button.addEventListener("click", () => showPage(i));
        paginationControls.appendChild(button);
      }
    }
  
    // Initialize pagination
    if (items.length > 0) {
      showPage(1); // Show the first page by default
    }
  });
  