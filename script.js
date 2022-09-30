document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches(
    '[data-dropdown-button]',
  );
  if (
    !isDropdownButton &&
    e.target.closest('[data-dropdown]') != null
  )
    return;

  let currrentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');

    document
      .querySelectorAll('[data-dropdown].active')
      .forEach((dropdown) => {
        if (dropdown === currentDropdown)
          returndropdown.classList.remove('active');
      });
  }
});
