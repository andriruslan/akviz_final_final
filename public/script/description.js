function getDescriptionSection(result) {
  const hasSound = document.getElementById("descSound").checked;
  const hasCourse = document.getElementById("descCourse").checked;
  const descCustom = document.getElementById("description").value.trim();

  let descriptionParts = [];

  if ((result === "Обстріляно" || result === "Уражено") && (hasSound || hasCourse)) {
    if (hasSound && hasCourse) {
      descriptionParts.push("Після обстрілу ціль змінила звук та курс");
    } else if (hasSound) {
      descriptionParts.push("Після обстрілу ціль змінила звук");
    } else if (hasCourse) {
      descriptionParts.push("Після обстрілу ціль змінила курс");
    }
  }

  if (descCustom) {
    descriptionParts.push(descCustom);
  }

  return descriptionParts.length > 0 ? descriptionParts.join(". ") : "";
}
