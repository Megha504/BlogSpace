

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// ⭐ Star Rating System
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('starRatingInput');
if (stars && ratingInput) {
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.getAttribute('data-value');
      ratingInput.value = rating;
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
      }
    });
  });
}

// 🔍 AJAX Search Handler
$(function () {
  $("#SearchBtn").on("click", function (event) {
    event.preventDefault();
      console.log("Search clicked");
    const query = $("#SearchInput").val().trim();
    if (!query) return;

    $.ajax({
      url: `/posts/search?q=${encodeURIComponent(query)}`,
      method: "GET",
      success: function (data) {
        let resultHTML = '';
        if (data.length === 0) {
          resultHTML = '<p class="text-muted mb-0">No results found.</p>';
        } else {
          data.forEach(post => {
            resultHTML += `
              <div class="mb-2">
                <a href="/posts/${post._id}" class="text-decoration-none fw-semibold d-block">
                  ${post.title}
                </a>
                <small class="text-muted">${post.category}</small>
              </div>
            `;
          });
        }
        $("#searchResults").html(resultHTML).fadeIn();
      },
      error: function () {
        $("#searchResults").html('<p class="text-danger mb-0">Error fetching results.</p>').fadeIn();
      }
    });
  });

  // Hide results when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#searchResults, #SearchInput, #SearchBtn").length) {
      $("#searchResults").fadeOut();
    }
  });
});

