# NiceGadgets — E-commerce Platform

**Team:** AMOV-2  
**Project Duration:** 2 weeks  

---

## Project Overview

**NiceGadgets** is a modern e-commerce platform built from scratch, enabling users to browse, select, and purchase gadgets online. The primary goal of the project was to deliver a **market-ready platform** that maximizes user conversion and retention while providing a solid technical foundation.

The platform was designed with **real business requirements** in mind and includes:

- Intuitive and responsive interface (Mobile-First)  
- Dynamic content to engage users  
- Personalized UX (light/dark theme, internationalization)  
- Fast product search and filters without empty-result pages  
- Persistent favorites and comparison lists for both guests and registered users  
- Progressive and secure checkout process  

---

## Technology Stack

- **Frontend:** React + TypeScript, Vite, Tailwind CSS  
- **Backend & Database:** Supabase  
- **UI Components:** shadcn/ui (based on Tailwind), Lucide Icons  
- **Other:** Swiper for sliders, i18next for internationalization  

---

## Features

### Landing Page & User Engagement
- Responsive design for all devices (Mobile-First)  
- Sticky header for constant navigation access  
- Dynamic sliders:
  - `Brand new models` — filtered by release year  
  - `Hot prices` — filtered by discount and includes CTA for registration  
- Theme support and automatic theme detection  
- Internationalization support  

### Product Catalog & Search
- Dynamic filters based on available products  
- Debounced search input (1000ms) for performance  
- Favorites and Compare functionality  
- Guest selections saved in LocalStorage with intelligent merge on login/registration  

### Checkout & Conversion
- Progressive form to reduce cognitive load  
- Custom input masks and validation to minimize errors  
- Clear order confirmation and backend integration  
- Seamless user experience to increase purchase completion rates  

---

## Architecture

- **Atomic Design:** UI components organized as Atoms → Molecules → Organisms → Pages  
- **Code Structure:** modular, scalable, and maintainable  

---

## Team
**Vlad Matkovskyi** — developer

**Artem Vikuliev** — developer

**Maksym Tovstopiatyi** — developer

**Vladyslav Sulyma** — Project Manager & developer

**Olexandr Oliferuk** — Tech Lead & developer

---

## Getting Started

1. Clone the repository:  
   ```bash
   git clone https://github.com/AMOV-team/nice-gadgets-frontend/

2. Install dependencies:
bash
npm install

3. Run locally:
bash
npm run dev
