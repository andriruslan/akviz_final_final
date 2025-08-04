// Логіка блокування/розблокування полів
function toggleLock(id) {
  const input = document.getElementById(id);
  const button = input.nextElementSibling;
  const isReadonly = input.hasAttribute("readonly");

  if (isReadonly) {
    input.removeAttribute("readonly");
    button.textContent = "🔒";
  } else {
    input.setAttribute("readonly", true);
    button.textContent = "🔓";
  }
}
