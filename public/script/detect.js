function checkDetect() {
  const visual = document.getElementById("visual");
  const obs = document.getElementById("obs");

  // Дозволяємо редагування "із приладів" тільки коли "візуально" активне
  if (visual.checked) {
    obs.disabled = false;
  } else {
    obs.checked = false;
    obs.disabled = true;
  }

  updatePreview();
}

// Слухаємо зміни всіх трьох чекбоксів
["acoustic", "radar", "visual", "obs"].forEach(id => {
  document.getElementById(id)?.addEventListener("change", checkDetect);
});
