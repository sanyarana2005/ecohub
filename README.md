# Greenify

A modern, interactive web application focused on GreenTech and Climate Resilience. Built with React.js, Tailwind CSS, and Framer Motion.

## Features

### 🏠 Landing Page
- Hero section with animated gradient background
- Call-to-action buttons with smooth scroll animations
- Feature overview cards showcasing all tools

### 🕶️ Resilience Lens (AR Page)
- AR visualization mockup with camera frame
- Three interactive modes:
  - View 2050: See future climate scenarios
  - Flood Risk Mode: Visualize flood zones
  - Greener Future: Explore green infrastructure
- Informative cards explaining each feature

### 🌾 FarmSense AI
- Chat-style interface with AI-powered crop advisor
- Animated illustrations and weather icons
- Real-time conversation simulation
- Responsive chat UI with message history

### 🌳 BioBuffer Simulator
- Interactive 2D/3D visualization canvas
- Add/remove natural elements:
  - Trees 🌲
  - Wetlands 💧
  - Mangroves 🌴
- Real-time climate impact stats:
  - Temperature
  - Flood Risk
  - Air Quality
- Dynamic progress bars and visualizations

### 🚨 Local Lifeline
- Interactive map dashboard
- Emergency information cards:
  - Nearest Shelter
  - Emergency Contact
  - Community Volunteers
- Color-coded alert system (High/Moderate/Safe)
- Weather condition indicators

### ℹ️ About Page
- Project story and mission
- Feature highlights
- Social media links
- Inspirational footer quote

## Tech Stack

- **React.js** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Design Features

- **Modern UI**: Clean, rounded corners, subtle shadows
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Page transitions and micro-interactions powered by Framer Motion
- **Color Palette**: Green (#4ade80), Blue (#60a5fa), Earth tones
- **Typography**: Inter and Poppins fonts

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation bar with dark mode toggle
├── pages/
│   ├── Landing.jsx          # Home page
│   ├── ResilienceLens.jsx   # AR visualization page
│   ├── FarmSenseAI.jsx      # Chat interface page
│   ├── BioBufferSimulator.jsx # Interactive simulator
│   ├── LocalLifeline.jsx    # Emergency dashboard
│   └── About.jsx            # About page
├── App.jsx                  # Main app with routing
└── main.jsx                 # Entry point
```

## License

This project is open source and available for educational purposes.

---

**Building a resilient tomorrow, one action at a time.** 🌍💚