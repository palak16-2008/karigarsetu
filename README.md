# KarigarSetu 🧵

### From Craft to Customer

**KarigarSetu** is a digital marketplace designed to connect **Indian artisans (karigars)** with buyers through a simple and accessible web platform.

The platform allows artisans to showcase their products, manage their catalogue, receive enquiries, and maintain their profiles, while buyers can explore products through a dedicated marketplace and view individual product details.

🔗 **Live Demo:** https://karigarsetu-inky.vercel.app/

---

## ✨ Features

### 🧑‍🎨 For Artisans

* **Artisan Dashboard** — Manage artisan activities from a dedicated dashboard.
* **Add Products** — Add handmade products to the marketplace.
* **Product Catalogue** — View and manage listed products.
* **Enquiries** — Manage enquiries from interested buyers.
* **Profile Management** — Maintain artisan profile information.
* **Role-Based Access** — Artisan-specific pages are protected from unauthorized access.

### 🛍️ For Buyers

* **Marketplace** — Browse available artisan products.
* **Product Details** — View detailed information about individual products.
* **Buyer Dashboard** — Access buyer-specific functionality.
* **Easy Discovery** — Explore products through a dedicated marketplace interface.

### 🌐 Platform Features

* Responsive web interface
* Client-side routing
* Separate buyer and artisan experiences
* Role-based protected routes
* Clean component-based React architecture
* Multi-language UI state support
* Lucide icon integration

---

## 🛠️ Tech Stack

| Technology           | Purpose                       |
| -------------------- | ----------------------------- |
| **React 18**         | Frontend UI                   |
| **Vite**             | Development and build tooling |
| **React Router**     | Client-side routing           |
| **Lucide React**     | Icons                         |
| **JavaScript / JSX** | Application development       |
| **CSS**              | Styling                       |
| **Vercel**           | Deployment                    |

The current project uses React 18, Vite 6, React Router, and Lucide React as its primary frontend dependencies.

---

## 📁 Project Structure

```text
karigarsetu/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── AddProduct.jsx
│   │   ├── ArtisanDashboard.jsx
│   │   ├── BuyerDashboard.jsx
│   │   ├── Catalogue.jsx
│   │   ├── Enquiries.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Marketplace.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── data.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The repository currently follows this page/service/component structure, with routing centralized in `App.jsx`.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm

### 1. Clone the repository

```bash
git clone https://github.com/palak16-2008/karigarsetu.git
```

### 2. Navigate to the project

```bash
cd karigarsetu
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, typically:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## 🔐 User Roles

KarigarSetu currently supports two primary roles:

### Artisan

Artisans can access:

* Artisan Dashboard
* Add Product
* Enquiries
* Profile
* Catalogue

### Buyer

Buyers can access:

* Buyer Dashboard

Public users can access:

* Home
* Login
* Register
* Marketplace
* Product Details

The application uses protected routes based on the stored user role.

---

## 🔄 Application Flow

```text
                    ┌──────────────┐
                    │  KarigarSetu │
                    │    Website   │
                    └──────┬───────┘
                           │
             ┌─────────────┴─────────────┐
             │                           │
        ┌────▼────┐                 ┌────▼────┐
        │ Artisan │                 │  Buyer  │
        └────┬────┘                 └────┬────┘
             │                           │
       ┌─────┴─────┐               ┌─────▼─────┐
       │ Dashboard │               │ Marketplace│
       └─────┬─────┘               └─────┬─────┘
             │                           │
       ┌─────┼────────┐             ┌────▼──────┐
       │     │        │             │  Product  │
       ▼     ▼        ▼             │  Details  │
    Product Catalogue Enquiries     └───────────┘
       │
       ▼
    Profile
```

---

## 🎯 Purpose

Traditional artisans often face challenges reaching customers beyond their local markets.

KarigarSetu aims to provide a digital bridge between **craft creators and customers**, giving artisans a dedicated space to present their work while making handcrafted products easier for buyers to discover.

The goal is to help bring traditional craftsmanship into the digital marketplace without losing its connection to the people who create it.

---

## 🔮 Future Improvements

Possible future enhancements include:

* Backend API integration
* Persistent database storage
* Secure authentication
* Online payments
* Product search and filtering
* Product categories
* Reviews and ratings
* Artisan verification
* Image upload and cloud storage
* Order management
* Real-time notifications
* Multilingual content
* Location-based artisan discovery
* Mobile/PWA support

---

## 🤝 Contributing

Contributions are welcome!

### 1. Fork the repository

```bash
git clone https://github.com/palak16-2008/karigarsetu.git
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

Implement and test your changes locally.

### 4. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

### 5. Push your branch

```bash
git push origin feature/your-feature
```

### 6. Open a Pull Request

Create a Pull Request describing your changes and why they are useful.

---

## 📄 License

No license file is currently included in the repository.

If you plan to make KarigarSetu open source for others to reuse or contribute to, consider adding an appropriate license.

---

## 🌐 Links

* **GitHub:** https://github.com/palak16-2008/karigarsetu
* **Live Application:** https://karigarsetu-inky.vercel.app/

---

## ❤️ Vision

> **From Craft to Customer.**

KarigarSetu is built with the vision of helping traditional artisans reach more customers and participate in the modern digital economy.

**Made with ❤️ to support Indian craftsmanship and the people behind it.**
