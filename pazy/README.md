# ⚡ Interactive Data Table Dashboard

An advanced, highly customizable data table built with **Material React Table**, **Next.js**, and **MUI**, featuring:

- Sticky headers
- Dynamic column ordering & resizing
- Persistent user settings (via API)
- Tooltips, avatars, and custom cell renderers
- Export to `.xlsx` format
- Custom skeleton loader for better UX
- Dark theme with modern UI

---

## 🚀 Live Preview

> _(Add your deployment link or preview gif here)_

---

## 🧱 Tech Stack

| Tech                | Role                                |
|---------------------|-------------------------------------|
| **Next.js**         | React framework & routing           |
| **React**           | UI components & logic               |
| **MUI**             | Styling & responsive layout         |
| **Material React Table** | Table framework for powerful UI  |
| **XLSX.js**         | Excel export functionality          |
| **Axios**           | API calls for table settings        |
| **TypeScript**      | Type safety                         |
| **Tailwind CSS** (optional) | Tooltip styling, avatars, etc. |

---

## 📦 Features

- ✅ **Sticky Headers** for smooth table scrolling
- ✅ **Dynamic Column Resizing & Reordering**
- ✅ **Row Selection** with optional export
- ✅ **Persistent Layout Settings** using Axios & mock API
- ✅ **XLSX Export**: Download filtered table data
- ✅ **Tooltips** using `@radix-ui/react-tooltip`
- ✅ **Custom Skeleton Loader** while loading
- ✅ **Dark Themed UI** for modern aesthetics

---

## 🖼️ UI Snapshots

> 

---

## 🛠️ Setup Instructions

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/interactive-table-dashboard.git
   cd interactive-table-dashboard
2. **Install the dependencies**:
    ```bash
    npm install
    # or
    yarn install
3. **Run the development server**:
   ```bash
   npm run dev
4. **Setup mock API**:
    ```bash
    // mock-server.js
    const express = require('express');
    const app = express();
    const cors = require('cors');

    app.use(cors());
    app.use(express.json());

    let settings = {};

    app.get('/api/table-settings', (req, res) => {
    res.json(settings);
    });

    app.post('/api/table-settings', (req, res) => {
    settings = req.body;
    res.json({ message: 'Settings saved' });
    });

    app.listen(3001, () => console.log('Mock API running on port 3001'));


---

Let me know if you'd like a version with badges (for license, issues, stars) or to generate a live preview image using `vercel-og`.
