# React + Vite + Tailwind CSS + Redux Toolkit

Initial project setup using **Vite**, **React**, **Tailwind CSS v4**, **Redux Toolkit**, and **Axios**.

---

## 🚀 Initial Setup

### 1️⃣ Create React app with Vite

```bash
npm create vite@latest . -- --template react
```

Install base dependencies:

```bash
npm install
```

---

### 2️⃣ Install Tailwind CSS (latest)

```bash
npm install tailwindcss @tailwindcss/vite
```

#### Add Tailwind import

In `src/index.css`:

```css
@import "tailwindcss";
```

In `vite.config.js`

```js
import tailwindcss from "@tailwindcss/vite";
plugins: [tailwindcss()];
```

---

### 3️⃣ Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 4️⃣ Install Axios

```bash
npm install axios
```

---

### 5️⃣ Start development server

```bash
npm run dev
```

---

## 🚀 Tech Stack

-   **React** – UI library
-   **Vite** – Fast dev server & bundler
-   **Tailwind CSS (v4)** – Utility‑first CSS
-   **Redux Toolkit** – State management

---

### Test

In `App.jsx`

```jsx
<h1 className="text-3xl font-bold text-blue-500">Redux Bag</h1>
```
