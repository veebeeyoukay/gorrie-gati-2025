# Gorrie Elementary AI Presentation System

> **Great American Teach-In 2025** - Interactive AI Education Platform for 2nd & 4th Graders

A professional, interactive AI education presentation system built for Gorrie Elementary School's Great American Teach-In. This platform provides engaging presentations, live AI demos, parent resources, and comprehensive analytics for educators.

![Gorrie Jaguars](https://img.shields.io/badge/Mascot-Jaguars-orange)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

---

## 🎯 Project Overview

This system was designed to teach elementary school students (2nd and 4th grade) about Artificial Intelligence in an engaging, age-appropriate way. The platform includes:

- **Interactive Presentation** with 10 animated slides
- **Live AI Chat Demo** using Claude API
- **Parent Resource Hub** with safety guides and consulting information
- **Printable Handouts** for students and parents
- **Admin Dashboard** with real-time poll analytics
- **Grade & Audience Customization** (2nd/4th grade, Student/Parent/Teacher versions)

---

## ✨ Features

### 🎤 Presentation Mode
- **10 Interactive Slides** covering AI basics:
  1. Title/Hook with live poll
  2. "Finish the Sentence!" game
  3. AI History Timeline
  4. Library Metaphor (training data)
  5. Word Prediction explanation
  6. Prompting best practices
  7. Context & Memory
  8. Token breakdown
  9. Demo preparation
  10. Safety rules
- **Keyboard Navigation** (Arrow keys, Spacebar)
- **Presenter Notes** (toggleable sidebar)
- **Progress Indicator**
- **Full-screen or Dashboard mode**

### 💬 Live AI Demo
- Kid-friendly chat interface
- Claude API integration with offline fallback
- Token counter for educational purposes
- Pre-set example questions
- Export conversation feature
- Content moderation built-in

### 📚 Parent Resource Hub
- Presentation summary
- Official safety resources (CISA, Florida DOE)
- Recommended family-friendly AI tools
- Comprehensive FAQ section
- Activities to try at home
- **Professional consulting marketing section**

### 📄 Printable Handouts
- **Student Take-Home Sheet**: Fun, activity-based with drawing space
- **Parent Guide**: Professional summary and safety checklist
- Both include QR codes linking to resource hub

### 📊 Admin Dashboard
- Real-time poll analytics with bar charts
- Newsletter subscriber management
- Contact inquiry tracking
- QR code generator
- Page view statistics

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Database**: Neon Postgres (schema provided)
- **AI Integration**: Anthropic Claude API
- **QR Codes**: qrcode.react
- **Printing**: react-to-print

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) Neon Postgres database for production
- (Optional) Anthropic API key for live AI chat

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/veebeeyoukay/gorrie-gati-2025.git
   cd gorrie-gati-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Optional: For live AI chat (works without it in mock mode)
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   
   # Optional: For database features (currently using in-memory storage)
   NEON_DATABASE_URL=your_neon_database_url_here
   
   # Site URL (for QR codes and links)
   NEXT_PUBLIC_SITE_URL=https://vikasbhatia.info/ai
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Default Login Credentials

- **Username**: `Vikasbhatiauk`
- **Password**: `Password`

---

## 📁 Project Structure

```
gorrie-gati-2025/
├── database/
│   └── schema.sql              # Postgres database schema
├── public/
│   └── images/                 # Static assets (jaguar mascot, etc.)
├── src/
│   ├── components/
│   │   ├── presentation/       # Presentation components
│   │   │   ├── slides/         # Individual slide components
│   │   │   ├── SlideWrapper.tsx
│   │   │   └── SlidesContent.tsx
│   │   ├── demo/               # Chat demo components
│   │   ├── resources/          # Resource hub components
│   │   ├── ui/                 # shadcn/ui components
│   │   └── shared/             # Shared components
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── usePresentationMode.ts
│   ├── pages/
│   │   ├── api/
│   │   │   ├── chat.ts         # AI chat API endpoint
│   │   │   └── poll.ts         # Poll data API endpoint
│   │   ├── _app.tsx            # App wrapper
│   │   ├── index.tsx           # Login page
│   │   ├── dashboard.tsx       # Main dashboard
│   │   ├── presentation.tsx    # Presentation mode
│   │   ├── demo.tsx            # AI chat demo
│   │   ├── resources.tsx       # Parent resource hub
│   │   ├── handouts.tsx        # Printable handouts
│   │   └── admin.tsx           # Admin dashboard
│   ├── styles/
│   │   └── globals.css         # Global styles & theme
│   └── types/
│       └── presentation.ts     # TypeScript types
├── .env.local                  # Environment variables (create this)
├── next.config.ts
├── package.json
└── README.md
```

---

## 🎨 Branding & Theme

The application uses **Gorrie Elementary School** branding:

- **Primary Color**: Red (#D92E2E)
- **Secondary Color**: Black
- **Accent Color**: Orange (#F97316)
- **Mascot**: Jaguars 🐆
- **Fonts**: 
  - Headings: Poppins
  - Body: Inter
  - Code: JetBrains Mono

---

## 🔌 API Endpoints

### `/api/chat`
**POST** - Send a message to the AI

**Request:**
```json
{
  "prompt": "How do robots learn?"
}
```

**Response:**
```json
{
  "message": "Robots learn by...",
  "tokens": 42
}
```

### `/api/poll`
**GET** - Retrieve current poll results

**Response:**
```json
{
  "yes": 25,
  "no": 3
}
```

**POST** - Submit a vote

**Request:**
```json
{
  "pollId": "slide1-usage",
  "option": "yes",
  "grade": "2nd",
  "audience": "student"
}
```

---

## 🗄 Database Setup

The project includes a PostgreSQL schema (`database/schema.sql`) for:

- Newsletter subscribers
- Contact inquiries
- Demo session analytics
- Page views
- Poll votes

### Setting up Neon Postgres

1. Create a Neon account at [neon.tech](https://neon.tech)
2. Create a new project
3. Run the schema SQL:
   ```bash
   psql $NEON_DATABASE_URL < database/schema.sql
   ```
4. Add `NEON_DATABASE_URL` to your `.env.local`

**Note**: The app currently works with in-memory storage for demo purposes. Database integration is ready but optional.

---

## 🚢 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Configure Netlify**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

3. **Set environment variables** in Netlify dashboard:
   - `ANTHROPIC_API_KEY` (optional)
   - `NEON_DATABASE_URL` (optional)
   - `NEXT_PUBLIC_SITE_URL`

4. **Deploy**
   - Connect your GitHub repository
   - Netlify will auto-deploy on push

### Custom Domain

The project is configured for `vikasbhatia.info/ai`. Update `NEXT_PUBLIC_SITE_URL` in your environment variables.

---

## 📖 Usage Guide

### For Presenters

1. **Login** with default credentials
2. **Select Grade & Audience** on the dashboard
3. **Launch Presentation** - Use arrow keys or on-screen buttons to navigate
4. **Toggle Notes** - Click "Notes" button to see presenter notes
5. **Run Poll** - On Slide 1, students can vote by clicking the button
6. **Live Demo** - Navigate to `/demo` for interactive AI chat

### For Administrators

1. **Access Admin Dashboard** - Click "Admin Dashboard" link
2. **View Poll Results** - See real-time vote counts and visualizations
3. **Generate QR Codes** - Create QR codes for resource pages
4. **Track Analytics** - Monitor page views and engagement

### For Parents

1. **Scan QR Code** from handout or presentation
2. **Browse Resources** - Access safety guides, tools, and FAQs
3. **Subscribe** - Sign up for newsletter updates
4. **Contact** - Reach out for consulting services

---

## 🎓 Educational Content

The presentation covers:

- **AI Basics**: What AI is and how it works
- **History**: Evolution of AI from 1950s to present
- **Training Data**: How AI learns from information
- **Prediction**: How AI predicts the next word
- **Prompting**: Asking good questions
- **Context**: AI's memory and context understanding
- **Tokens**: How computers read text
- **Safety**: Critical safety rules for kids

---

## 🔒 Security & Privacy

- **Password Protection**: Login required for presentation access
- **Content Moderation**: AI responses filtered for age-appropriateness
- **No Personal Data**: Polls and analytics don't collect PII
- **Offline Mode**: Works without API keys (mock responses)

---

## 🛠 Development

### Running Tests

```bash
npm run build  # Type-check and build
```

### Code Style

- TypeScript strict mode enabled
- ESLint configured
- Prettier recommended

---

## 📝 License

This project is proprietary software created for Gorrie Elementary School's Great American Teach-In 2025.

---

## 👤 Author & Contact

**Vikas Bhatia**  
Cybersecurity & AI Education Consultant  
26+ years of experience

- Website: [vikasbhatia.info](https://vikasbhatia.info)
- Repository: [github.com/veebeeyoukay/gorrie-gati-2025](https://github.com/veebeeyoukay/gorrie-gati-2025)

---

## 🙏 Acknowledgments

- **Gorrie Elementary School** - For the opportunity to present
- **Hillsborough County Public Schools** - Great American Teach-In program
- **Anthropic** - Claude API for AI integration
- **shadcn/ui** - Beautiful component library

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Anthropic Claude API](https://docs.anthropic.com)

---

**Built with ❤️ for Gorrie Elementary School's Great American Teach-In 2025**
