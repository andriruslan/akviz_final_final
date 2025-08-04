// Логіка блокування/розблокування полів редагування (🔒 / 🔓)
function toggleLock(id) {
  const input = document.getElementById(id);
  const button = input.nextElementSibling;

  if (input.hasAttribute("readonly")) {
    input.removeAttribute("readonly");
    button.textContent = "🔒";
  } else {
    input.setAttribute("readonly", true);
    button.textContent = "🔓";
  }

  updatePreview();
}
