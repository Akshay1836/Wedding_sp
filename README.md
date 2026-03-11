# EverAfter - Wedding Company Homepage (React + Vite)

A minimal, aesthetic homepage scaffold for a wedding company built with React and Vite.

Quick start (Windows PowerShell):

```powershell
cd "c:\Users\aksha\Desktop\Wedding_sp"
npm install
npm run dev
```

This will start the dev server (Vite). Open the printed localhost URL in your browser.

Files of interest:
- `index.html` — base HTML and fonts
- `src/main.jsx` — React entry
- `src/App.jsx` — page layout
- `src/components/*` — site components
- `src/styles.css` — styling

Form email setup:
- Create a `.env` file in the project root.
- Add these values from EmailJS:
- `VITE_INQUIRY_EMAIL=your-email@example.com`
- `VITE_EMAILJS_SERVICE_ID=your_service_id`
- `VITE_EMAILJS_TEMPLATE_ID=your_template_id`
- `VITE_EMAILJS_PUBLIC_KEY=your_public_key`
- Restart the dev server after changing `.env`.
- In your EmailJS template, map variables like `full_name`, `reply_to`, `phone`, `wedding_date`, and `notes`.

Next steps: install dependencies and run the dev server. You can customize text, images, and colors in the styles.
