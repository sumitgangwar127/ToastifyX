# ToastifyX

> A lightweight and customizable toast notification library for React apps with built-in animations and positioning.

---

## 🚀 Installation

```bash
npm install toastifyx

or

yarn add toastifyx

## H2 ⚙️ How to Use


import React from 'react';
import { useToast } from 'toastifyx';
import 'toastifyx/dist/toastifyx.css';

function App() {
  const [ToastContainer, showToast] = useToast('top-right');

  const trigger = (type) => {
    showToast({
      type,
      message: `${type} notification`,
      animation: 'pop',
      duration: 3000,
    });
  };

  return (
    <div>
      <button onClick={() => trigger('success')}>Success</button>
      <button onClick={() => trigger('error')}>Error</button>
      <button onClick={() => trigger('info')}>Info</button>
      <button onClick={() => trigger('warning')}>Warning</button>

      {ToastContainer}
    </div>
  );
}


## H2 🔧 showToast(props) Options

Prop	   Type	   Required	  Description
type	   string	 ✅	  One of: "success", "error", "info", "warning"
message	   string	 ✅	  Toast message content
duration   number	 ❌	  Time in ms before it auto-closes (default: 3000)
animation  string	 ❌	  Animation style (see options below)

## H2 🎨 Supported Types
Type	  Description
success	  Green success toast
error	  Red error toast
info	  Blue info toast
warning	  Yellow warning toast

## H2 ✨ Animation Options
Animation	Effect
fade	    Smooth fade-in
slide	    Slide from right
pop	        Scale pop effect
combo	    Slide + scale combo

## H2 📍 Position Options
Use these with useToast(position):

Position	    Description
top-left	    Top left corner
top-right	    Top right corner
bottom-left	    Bottom left corner
bottom-right	Bottom right corner

## H2 🧪 Example Usage

showToast({
  type: 'warning',
  message: 'Low battery!',
  animation: 'slide',
  duration: 4000
});

🛠 License
MIT © 2025 Sumit Gangwar
