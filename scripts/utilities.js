function condition(id, number) {
  const btn = document.getElementById(id);
  if (total >= number) {
    btn.disabled = false;
    btn.classList.add("enabled");
  }
}
