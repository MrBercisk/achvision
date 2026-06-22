# ArchVision Studio • Professional Architectural Portal

An elite, highly polished single-page portal designed spec-for-spec for **ArchVision Studio Co.**, a premier architectural agency specializing in thermal passive planning, bioclimatic layout alignments, and sustainable regional masonry solutions.

This application is engineered with **React 18**, **TypeScript**, and **Vite**, utilizing **Tailwind CSS** for ultra-crisp display typography, generous negative space, and a high-contrast warm contemporary palette (Slate & Sumba Cream).

---

## 🏛️ Architectural Design & Scope Philosophy

Consistent with professional architectural craft, we emphasize a *high-information, low-clutter layout*. Rather than overwhelming visitors with infinite scrolling widgets or complex sub-page systems, the interface consolidates high-value design briefs directly onto a single, high-contrast responsive viewport:

1. **Bespoke Technical blue-sheet Overview**:
   - Instead of complex multi-pane playground slider forms that distract clients, users can select concrete design sectors (e.g., *Residential Design*, *Commercial Workspace*, *Bespoke Hospitality*) and immediately review real, detailed building specs.
   - Specs are divided into highly granular, read-only professional parameters covering **Materiality**, **Passive Aero-Thermal Design**, **Targeted Performance Metrics**, and **Zoning & Building Codes**.
   - **One-click Injection**: When a client selects a service specification sheet, it instantly injects the technical brief directly into their contact consultation form.

2. **Interactive Legal Overlays**:
   - Fully animated, responsive modals built utilizing `motion/react` present formal **Privacy Policy** and **Terms of Service** agreements directly over the viewport without forcing redirects or page reloads.

3. **Secure Submission Transmission Alerts**:
   - When visitors submit contact specifications and customized project ranges, the transmission engine processes parameters, presents a premium floating confirmation HUD toast, and resets fields cleanly.

---

## 🛠️ Technology Stack & Libraries

- **Framework**: React 18 with TypeScript and Vite.
- **Micro-Animations**: `motion/react` handles modal triggers, mobile drawer transitions, and the premium transmission toasts smoothly.
- **Branding Icons**: Sleek vector iconography sourced from `lucide-react` (utilizing `Compass` as our central layout precision emblem).
- **Styling Method**: Utility-first responsive Tailwind CSS.

---

## 🚀 Running & Developing Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Live Shell Commands
Install dependencies and trigger the Vite development server locally:

```bash
# Populate local node_modules
npm install

# Start the Node development server on Port 3000
npm run dev
```

### 3. Compilation & Validation
To test compliance with TypeScript type-checking or compile the production bundle:

```bash
# Validate that the codebase has no syntax errors
npm run lint

# Compile static assets to the target dist/ directory 
npm run build
```

---

*Formulated with care and absolute design discipline for ArchVision Studio. AIA Professional Member Entity.*
