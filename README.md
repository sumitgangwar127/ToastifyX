# 🍞 ToastifyX
### 🔗 **Documentation:** [toastifyx-docs.vercel.app](https://toastifyx-docs.vercel.app/)

A lightweight, animated toast notification library for **Vanilla JavaScript**.  
No frameworks. No dependencies. Just clean, customizable toasts ✨

---

## ✨ Features

- 🚀 Zero dependencies
- 🎨 Multiple toast types (success, error, info, warning)
- 🎬 Smooth animations
- 📍 Flexible positions
- ⏱ Auto-dismiss with progress bar
- 🧼 Simple API
- 📦 Works with CDN & bundlers

---

## 📦 Installation

### Using npm
```bash
npm install toastifyx
```
### Using yarn
```bash
yarn add toastifyx
```

### 📥 Importing
With bundlers (Vite, Webpack, etc.)
```js
import ToastifyX from "toastifyx";
import "toastifyx/dist/toastifyx.css";
```

### Using CDN / Script tag

```html
<link rel="stylesheet" href="toastifyx.css" />
<script src="toastifyx.umd.js"></script>
```

### 🚀 Basic Usage

```js
ToastifyX.success("Saved successfully!");
ToastifyX.error("Something went wrong");
ToastifyX.info("New update available");
ToastifyX.warning("Low battery");
```

### 🔧 Advanced Usage

```js
ToastifyX.show({
  type: "success",
  message: "Profile updated!",
  position: "top-right",
  animation: "pop",
  duration: 3000
});
```

### ⚙️ API Reference

### `ToastifyX.show(options)`

| Option    | Type   | Required | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| type      | string | No       | "success", "error", "info", "warning" |
| message   | string | Yes      | Toast message                         |
| position  | string | No       | Toast position                        |
| animation | string | No       | Animation type                        |
| duration  | number | No       | Auto-close time in ms                 |

### 🎨 Toast Types

| Type    | Description          |
| ------- | -------------------- |
| success | Green success toast  |
| error   | Red error toast      |
| info    | Blue info toast      |
| warning | Yellow warning toast |


### 🎬 Animation Options
| Animation | Effect           |
| --------- | ---------------- |
| fade      | Smooth fade-in   |
| slide     | Slide from right |
| pop       | Scale pop effect |
| combo     | Slide + scale    |

### 📍 Position Options
| Animation | Effect           |
| --------- | ---------------- |
| fade      | Smooth fade-in   |
| slide     | Slide from right |
| pop       | Scale pop effect |
| combo     | Slide + scale    |


### 🧪 Example
```js
ToastifyX.show({
  type: "warning",
  message: "Low battery!",
  animation: "slide",
  position: "bottom-left",
  duration: 4000
});
```

### 🛠 Browser Support
- Chrome
- Firefox
- Safari
- Edge
- 

📄 License
MIT © 2025 Sumit Gangwar


