const containers = {};

export function getContainer(position) {
  if (containers[position]) return containers[position];

  const container = document.createElement("div");
  container.className = `notification-wrapper ${position}`;
  document.body.appendChild(container);

  containers[position] = container;
  return container;
}

export function createToastElement({
  id,
  type,
  message,
  animation,
  duration,
  onClose
}) {
  const toast = document.createElement("div");
  toast.className = `notification ${type} ${animation}`;
  toast.dataset.toastId = id;

  const text = document.createElement("span");
  text.textContent = message;

  const closeBtn = document.createElement("span");
  closeBtn.className = "closeBtn";
  closeBtn.innerHTML = "✕";
  closeBtn.onclick = onClose;

  const progressWrapper = document.createElement("div");
  progressWrapper.className = "progress-bar-wrapper";

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  progressBar.style.animationDuration = `${duration}ms`;

  progressWrapper.appendChild(progressBar);

  toast.appendChild(text);
  toast.appendChild(closeBtn);
  toast.appendChild(progressWrapper);

  return toast;
}

export function removeToast(container, toast) {
  if (container.contains(toast)) {
    container.removeChild(toast);
  }
}
