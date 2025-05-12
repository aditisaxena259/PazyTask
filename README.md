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

> _([Link To Project deployed on Vercel](https://pazy-task-uclf.vercel.app/))_

Make sure you run the server locally, before viewing it on Vercel.

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
- ✅ **Custom Skeleton Loader** while loading
- ✅ **Added features like Search,Filter,Resize Toggle** via use of Material-React Table
- ✅ **Dark Themed UI** for modern aesthetics


---
## Images 
*Figure 1: Interactive Table UI with drag & drop support*
![Dashboard Preview](/images/img1.png)
*Figure 2:*
![Dashboard Preview](/images/img2.png)
*Figure 3:*
![Dashboard Preview](/images/img3.png)
*Figure 4:*
![Dashboard Preview](/images/img4.png)
*Figure 5:*
![Dashboard Preview](/images/img5.png)
*Figure 6:*
![Dashboard Preview](/images/img6.png)
*Figure 7:*
![Dashboard Preview](/images/img7.png)
*Figure 8:*
![Dashboard Preview](/images/img8.png)
*Figure 9:*
![Dashboard Preview](/images/img9.png)
*Figure 10:*
![Dashboard Preview](/images/img10.png)
*Figure 11:*
![Dashboard Preview](/images/img11.png)
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
