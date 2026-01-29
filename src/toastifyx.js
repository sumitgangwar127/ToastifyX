import { TYPES, POSITIONS, ANIMATIONS, DEFAULTS } from "./constants";
import { getContainer, createToastElement, removeToast } from "./dom";

let idCounter = 0;
const timeoutMap = new Map();

function normalizeOptions(options) {
  return {
    type: TYPES.includes(options.type) ? options.type : DEFAULTS.type,
    message: options.message || "",
    position: POSITIONS.includes(options.position)
      ? options.position
      : DEFAULTS.position,
    animation: ANIMATIONS.includes(options.animation)
      ? options.animation
      : DEFAULTS.animation,
    duration:
      typeof options.duration === "number"
        ? options.duration
        : DEFAULTS.duration
  };
}

export function show(options) {
  const opts = normalizeOptions(options);
  const id = ++idCounter;

  const container = getContainer(opts.position);

  const toast = createToastElement({
    id,
    ...opts,
    onClose: () => close(id, container, toast)
  });

  container.appendChild(toast);

  const timeout = setTimeout(() => {
    close(id, container, toast);
  }, opts.duration);

  timeoutMap.set(id, timeout);
}

function close(id, container, toast) {
  if (timeoutMap.has(id)) {
    clearTimeout(timeoutMap.get(id));
    timeoutMap.delete(id);
  }
  removeToast(container, toast);
}

export const success = (message, options = {}) =>
  show({ ...options, type: "success", message });

export const error = (message, options = {}) =>
  show({ ...options, type: "error", message });

export const info = (message, options = {}) =>
  show({ ...options, type: "info", message });

export const warning = (message, options = {}) =>
  show({ ...options, type: "warning", message });
