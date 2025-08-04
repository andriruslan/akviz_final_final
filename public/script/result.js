function updateAmmoVisibility() {
  const result = document.querySelector('input[name="result"]:checked')?.value;

  const ammoGroup = document.getElementById("ammoGroup");
  if (result === "Обстріляно" || result === "Уражено") {
    ammoGroup.style.display = "block";
  } else {
    ammoGroup.style.display = "none";
    // Скидаємо всі поля, якщо приховано
    ["ammo1", "ammo2", "ammo3"].forEach(id => {
      document.getElementById(id).checked = false;
      toggleAmmoCount(id);
    });
  }

  updatePreview();
}

function toggleAmmoCount(ammoId) {
  const countInput = document.getElementById(`${ammoId}Count`);
  const ammoCheckbox = document.getElementById(ammoId);
  countInput.disabled = !ammoCheckbox.checked;
}
