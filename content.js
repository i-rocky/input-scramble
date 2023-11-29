chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { text } = message;
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.width = '50%';
  textarea.style.height = '50%';
  textarea.style.fontSize = '2rem';
  modal.appendChild(textarea);
  document.body.appendChild(modal);
  textarea.focus();

  textarea.addEventListener('blur', () => {
    document.body.removeChild(modal);
  });
});
