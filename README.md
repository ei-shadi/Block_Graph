<div align="center">

# 🧩 Block Graph ---> [Draggable Block Tree]

A dynamic and interactive block tree where blocks can be added, dragged, and connected with parent-child dashed lines.

</div>

---

<div align="center">

## 🖥️ Project Overview

</div>

This project demonstrates a draggable block tree UI built in **React** with **Tailwind CSS**. Users can:

* Add new blocks dynamically.
* Drag blocks around freely.
* See dashed lines connecting each block to its parent, updating automatically as blocks move.

---

<div align="center">

## ⚡ Features

</div>

* 🎯 **Random Initial Position:** Blocks appear at random positions on page load.
* ➕ **Add Child Blocks:** Each block has a `+` button to create child blocks.
* ✋ **Drag & Drop:** Blocks can be moved around by mouse drag.
* 📏 **Dynamic Connecting Lines:** Dashed lines connect parent and child blocks and update as blocks move.
* 🧩 **Fully Interactive:** Supports multiple levels of block hierarchy.

---

<div align="center">

## 🛠️ Tech Stack

</div>

| Feature          | Technology              |
| ---------------- | ----------------------- |
| UI               | React.js                |
| Styling          | Tailwind CSS            |
| State Management | React useState / useRef |

---

<div align="center">

## 🧑‍💻 User Roles

</div>

* **User:** Can interact with blocks, add child blocks, and drag them around.

---

<div align="center">

## 🖼️ Interface Snapshots

</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/yourusername/placeholder.png" alt="Draggable Block Tree Screenshot" class="rounded-lg shadow-lg" width="600"/>
</div>

---

<div align="center">

## 🚀 Getting Started

</div>

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/Block_Graph.git
cd Block_Graph
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

<div align="center">

## 🗂️ Project Structure

</div>

```
src/
├─ components/
│  ├─ Block.jsx          # Block component with + button & drag logic
│  ├─ ConnectionLine.jsx # Dashed line between parent and child
├─ utils/
│  └─ randomPosition.js  # Utility for generating random coordinates
├─ App.jsx               # Main component managing state of blocks
```

---

<div align="center">

## 📌 Notes

</div>

* Blocks’ positions are managed using React state and refs.
* Connecting lines update automatically based on parent-child positions.
* Tailwind CSS handles all styling; feel free to customize for your theme.

---

<div align="center">

## 🔗 Live Demo

</div>

[View Live Demo](https://your-demo-link.netlify.app)

---

<div align="center">

## 💻 License

</div>

This project is licensed under the **Fringecore License**.
