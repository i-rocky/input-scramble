chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  const { text } = message;
  await navigator.clipboard.writeText(text);

  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    z-index: 9999;
  `;
  toast.innerText = 'Copied to clipboard!';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
});
