document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input, textarea");
  
    // Glow effect on focus
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 8px #00f0ff";
      });
      input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
      });
    });
  
    // Form submission handler
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual form submission
  
      // Basic validation
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderBottom = "2px solid red";
          valid = false;
        } else {
          input.style.borderBottom = "2px solid #00f0ff";
        }
      });
  
      if (valid) {
        // Show success message
        showSuccessMessage("Your message has been sent! 🚀");
  
        // Reset form
        form.reset();
      }
    });
  
    function showSuccessMessage(message) {
      const msgDiv = document.createElement("div");
      msgDiv.textContent = message;
      msgDiv.style.position = "fixed";
      msgDiv.style.bottom = "30px";
      msgDiv.style.right = "30px";
      msgDiv.style.padding = "15px 25px";
      msgDiv.style.background = "#00f0ff";
      msgDiv.style.color = "#0b0c2a";
      msgDiv.style.borderRadius = "10px";
      msgDiv.style.fontWeight = "bold";
      msgDiv.style.boxShadow = "0 0 10px #00f0ff";
      msgDiv.style.transition = "opacity 0.5s ease";
  
      document.body.appendChild(msgDiv);
  
      setTimeout(() => {
        msgDiv.style.opacity = "0";
        setTimeout(() => msgDiv.remove(), 500);
      }, 3000);
    }
  });
  const form = document.getElementById("your-form-id");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs.sendForm('n89847683@gmail.com', 'your_template_id', form)
    .then(() => {
      alert("Your message has been sent! 🚀");
      form.reset();
    }, (error) => {
      alert("Failed to send email. Try again later.");
      console.error(error);
    });
});
