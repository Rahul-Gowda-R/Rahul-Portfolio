# 🌐 Rahul Gowda R — Portfolio

A modern, responsive personal portfolio that showcases my **projects**, **technical skills** and **experience**. It has a space-themed design with animated star fields and smooth interactions, and it's the main place for recruiters, collaborators and employers to explore my work and connect with me.

🔗 **Live site:** https://rahul-gowda-r.github.io/Rahul-Portfolio/

---

## ✨ Features

* 🧭 Sticky navigation bar that highlights the current section, with a mobile menu
* 📂 Featured projects, with a "View More" button for the rest
* 🛠️ Skills overview and a tech stack backed by real projects
* 💼 Experience timeline with internship highlights
* 🎓 Education, certifications, hackathons and leadership
* 📄 One-click resume download
* 📱 Fully responsive design
* 🌌 Animated cosmic background (star fields and shooting stars)
* 📬 Contact form that emails every message straight to my inbox (via FormSubmit)
* 🚀 Automatic deployment to GitHub Pages on every push

---

## 🛠️ Tech Stack

| Technology               | Purpose                     |
| ------------------------ | --------------------------- |
| React 18                 | UI framework                |
| TypeScript               | Application logic           |
| Vite                     | Build tool and dev server   |
| Tailwind CSS v4          | Styling                     |
| Motion (Framer Motion)   | Animations                  |
| Radix UI / shadcn/ui     | Accessible UI components    |
| Lucide                   | Icons                       |
| GitHub Actions + Pages   | Continuous deployment       |

---

## 📂 Project Structure

```text
Rahul-Portfolio/
│
├── .github/workflows/main.yml   # Builds and deploys to GitHub Pages
├── public/                      # Static files (resume.pdf, favicon.svg)
├── src/
│   ├── components/
│   │   ├── cosmic/              # StarField and ShootingStars backgrounds
│   │   ├── figma/               # ImageWithFallback
│   │   ├── ui/                  # shadcn/ui components
│   │   └── Navbar.tsx
│   ├── styles/globals.css       # Theme tokens and base styles
│   ├── App.tsx                  # Page sections and content
│   ├── index.css                # Tailwind entry point
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

Project, skill and experience content lives in plain arrays at the top of `src/App.tsx`, so updating the portfolio doesn't require touching the layout.

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Rahul-Gowda-R/Rahul-Portfolio.git
cd Rahul-Portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The site opens automatically at:

```text
http://localhost:3000/Rahul-Portfolio/
```

### Build for production

```bash
npm run build
```

The output goes to `dist/`.

---

## 🌍 Deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/main.yml`. It builds the site and publishes it to GitHub Pages. No manual deploy step is needed.

---

## 📌 Sections

* 🏠 Home
* 👨‍💻 About Me
* 🛠️ Skills & Expertise
* 💻 Tech Stack
* 🚀 Featured Projects
* 💼 Experience & Internships
* 🎓 Education
* 🏅 Certifications & Activities
* 📞 Get In Touch

---

## 🔮 Future Enhancements

* Blog section
* Project filtering by technology
* Interactive project demos
* Visitor analytics

---

## 👨‍💻 Author

**Rahul Gowda R**

* GitHub: https://github.com/Rahul-Gowda-R
* LinkedIn: https://www.linkedin.com/in/rahul-gowda-r
* YouTube: https://www.youtube.com/@Becoming_Rahul
* Portfolio: https://rahul-gowda-r.github.io/Rahul-Portfolio/

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this portfolio, consider giving the repository a **⭐ Star** on GitHub.
