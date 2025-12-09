# SymptoCare AI - Healthcare Symptom Checker

<div align="center">

![SymptoCare AI](https://img.shields.io/badge/SymptoCare-AI-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-orange?style=for-the-badge&logo=google)

**An AI-powered educational web application for symptom analysis using Google Gemini AI**

[Demo Video](#) • [Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Features in Depth](#features-in-depth)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🎯 Overview

**SymptoCare AI** is a full-stack healthcare symptom checker built as an educational tool that leverages Google's Gemini AI to analyze user-reported symptoms and provide general health information. The application emphasizes user safety with comprehensive medical disclaimers and is designed to promote health literacy rather than replace professional medical consultation.

### Key Highlights

- 🤖 **AI-Powered Analysis:** Utilizes Google Gemini 2.0 Flash for intelligent symptom interpretation
- 🎨 **Modern UI/UX:** Clean, responsive design with dark/light mode support
- 📊 **History Tracking:** Persistent storage of previous symptom checks
- 📄 **PDF Export:** Professional medical document generation
- 🔒 **Privacy-Focused:** No personal health data stored without consent
- ⚡ **Fast & Responsive:** Optimized performance with Next.js and Express
- 🛡️ **Safety First:** Multiple disclaimers and emergency guidance

---

## ✨ Features

### Core Features

#### 1. **AI-Powered Symptom Analysis**

- Natural language processing of symptom descriptions
- Identifies possible medical conditions
- Provides severity assessment (Low/Medium/High)
- Generates personalized recommendations
- Detects emergency red flags

#### 2. **Dark/Light Mode Toggle**

- System preference detection
- Manual theme switching
- Persistent theme storage
- Smooth CSS transitions
- Optimized for eye comfort

#### 3. **History Management**

- View all previous symptom checks
- Detailed analysis records
- Search and filter functionality
- Delete individual entries
- Export history as JSON

#### 4. **PDF Export**

- Professional medical document format
- Includes all analysis details
- Timestamped reports
- Downloadable for records
- Print-friendly layout

#### 5. **Severity Detection**

- Color-coded visual indicators:
  - 🟢 **Low:** Self-care recommended
  - 🟡 **Medium:** Consider medical consultation
  - 🔴 **High:** Immediate attention required
- Emergency symptom detection
- Risk assessment

#### 6. **Responsive Design**

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interfaces
- Accessible navigation
- Fast load times

#### 7. **Input Validation**

- Client-side form validation
- Server-side data verification
- Rate limiting (10 requests/minute)
- Error handling with user feedback
- Sanitized inputs

#### 8. **Medical Disclaimers**

- Prominent on every page
- Educational purpose emphasis
- Emergency guidance
- Professional consultation reminders
- Legal protection

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology       | Version | Purpose                     |
| ---------------- | ------- | --------------------------- |
| **Next.js**      | 14.0.4  | React framework with SSR    |
| **React**        | 18.2.0  | UI component library        |
| **Tailwind CSS** | 3.4.0   | Utility-first CSS framework |
| **Axios**        | 1.6.2   | HTTP client for API calls   |
| **jsPDF**        | -       | PDF generation library      |
| **React Icons**  | -       | Icon components             |

### Backend Technologies

| Technology               | Version | Purpose                         |
| ------------------------ | ------- | ------------------------------- |
| **Node.js**              | 18+     | JavaScript runtime              |
| **Express**              | 4.18.2  | Web application framework       |
| **Google Generative AI** | 0.21.0  | Gemini AI integration           |
| **CORS**                 | 2.8.5   | Cross-origin resource sharing   |
| **dotenv**               | 16.3.1  | Environment variable management |

### Development Tools

- **Nodemon** - Auto-restart for development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌──────────────────┐
│                 │         │                 │         │                  │
│  Next.js        │◄───────►│  Express.js     │◄───────►│  Google Gemini   │
│  Frontend       │  HTTP   │  Backend API    │  API    │  AI Service      │
│  (Port 3000)    │         │  (Port 5000)    │         │                  │
│                 │         │                 │         │                  │
└─────────────────┘         └─────────────────┘         └──────────────────┘
        │                           │
        │                           │
        ▼                           ▼
┌─────────────────┐         ┌─────────────────┐
│  Browser        │         │  Rate Limiter   │
│  LocalStorage   │         │  Validator      │
│  (History)      │         │  Middleware     │
└─────────────────┘         └─────────────────┘
```

### Request Flow

1. **User Input** → Form submission on `/check` page
2. **Frontend Validation** → Client-side validation with React
3. **API Call** → Axios POST to `/api/symptoms/analyze`
4. **Backend Middleware** → Rate limiting + input validation
5. **Controller** → Business logic processing
6. **LLM Service** → Google Gemini API call with structured prompt
7. **Response Parsing** → JSON extraction and validation
8. **Frontend Display** → Results rendered with ResultCard component
9. **History Storage** → Saved to browser LocalStorage
10. **PDF Generation** → Optional export with jsPDF

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)

  ```bash
  node --version  # Should show v18.x.x or higher
  ```

- **npm** (comes with Node.js)

  ```bash
  npm --version
  ```

- **Google Gemini API Key**

  - Visit: https://aistudio.google.com/app/apikey
  - Create a new API key
  - Free tier available with generous limits

- **Git** (for cloning)
  ```bash
  git --version
  ```

### Installation

#### Step 1: Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/suyash242004/symptocare-ai.git

# Or clone via SSH
git clone git@github.com:suyash242004/symptocare-ai.git

# Navigate to project directory
cd symptocare-ai
```

#### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your preferred editor
nano .env  # or use any text editor
```

**Configure `.env` file:**

```env
# Google Gemini API Configuration
GEMINI_API_KEY=your_actual_api_key_here

# Server Configuration
PORT=5000

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

**Important Notes:**

- Replace `your_actual_api_key_here` with your real Gemini API key
- No quotes around the API key
- No spaces around the `=` sign
- Keep this file secure and never commit it to Git

**Start Backend Server:**

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

**Verify Backend:**

- Open browser: http://localhost:5000/health
- Should see: `{"status":"OK","message":"SymptoCare AI Backend is running"}`

#### Step 3: Frontend Setup

Open a **new terminal** (keep backend running):

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
touch .env.local

# Edit .env.local
nano .env.local
```

**Configure `.env.local` file:**

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Start Frontend Server:**

```bash
# Development mode
npm run dev

# Build for production
npm run build
npm start
```

**Access Application:**

- Open browser: http://localhost:3000
- You should see the SymptoCare AI landing page

---

## 📖 Usage

### Basic Workflow

#### 1. **Home Page**

- Welcome message and feature overview
- Educational disclaimer prominently displayed
- "Start Symptom Check" call-to-action button
- Emergency information section

#### 2. **Check Symptoms Page** (`/check`)

**Input Form:**

- **Symptoms** (Required)

  - Minimum 10 characters
  - Maximum 2000 characters
  - Example: "I have a persistent headache for 2 days, mild fever, and feeling tired"

- **Age** (Optional)

  - Number between 0-120
  - Helps AI provide age-appropriate analysis

- **Gender** (Optional)

  - Options: Male, Female, Other
  - Assists in gender-specific condition identification

- **Duration** (Optional)
  - Dropdown with predefined options
  - Helps assess symptom progression

**Submit & Analysis:**

1. Click "Analyze Symptoms" button
2. Loading animation appears (with medical icon)
3. AI processes request (typically 3-10 seconds)
4. Results display below form

**Results Display:**

- **Severity Badge** - Color-coded (Low/Medium/High)
- **Possible Conditions** - List with likelihood ratings
- **Recommendations** - Actionable advice
- **Red Flags** - Warning signs (if applicable)
- **Disclaimer** - Medical safety notice

**Actions:**

- **Export as PDF** - Download formatted report
- **Start New Check** - Reset form for another analysis
- **View in History** - Automatically saved

#### 3. **History Page** (`/history`)

**Features:**

- View all previous symptom checks
- Sortable by date (newest first)
- Search/filter functionality
- Click to view full details
- Delete individual entries
- Export all history as JSON
- Clear all history option

**History Card Display:**

- Timestamp
- Symptoms summary (truncated)
- Severity indicator
- Quick actions (View, Delete, Export PDF)

#### 4. **About Page** (`/about`)

**Information Provided:**

- What is SymptoCare AI
- How it works (3-step process)
- Technology stack details
- Important limitations and disclaimers
- Educational purpose statement
- Project information

#### 5. **Dark/Light Mode**

**Toggle:**

- Click moon/sun icon in header
- Automatic theme switching
- Preference saved to localStorage
- Applies across all pages
- Smooth transitions

**Themes:**

- **Light Mode:** Clean white background, dark text
- **Dark Mode:** Dark background, light text, reduced eye strain

---

## 📡 API Documentation

### Base URL

```
http://localhost:5000
```

### Endpoints

#### 1. Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "OK",
  "message": "SymptoCare AI Backend is running",
  "timestamp": "2024-12-06T12:00:00.000Z"
}
```

#### 2. Analyze Symptoms

```http
POST /api/symptoms/analyze
```

**Headers:**

```http
Content-Type: application/json
```

**Request Body:**

```json
{
  "symptoms": "string (required, 10-2000 chars)",
  "age": "number (optional, 0-120)",
  "gender": "string (optional: male/female/other)",
  "duration": "string (optional)"
}
```

**Success Response (200):**

```json
{
  "success": true,
  "data": {
    "possibleConditions": [
      {
        "name": "Common Cold",
        "likelihood": "High",
        "description": "Viral infection affecting the upper respiratory tract"
      }
    ],
    "severity": "Low",
    "recommendations": [
      "Rest and stay hydrated",
      "Monitor symptoms for changes"
    ],
    "redFlags": [],
    "disclaimer": "This is for educational purposes only..."
  },
  "timestamp": "2024-12-06T12:00:00.000Z"
}
```

**Error Response (400):**

```json
{
  "success": false,
  "error": "Validation Error",
  "message": "Symptoms description is required and must be a string"
}
```

**Error Response (429):**

```json
{
  "error": "Too Many Requests",
  "message": "Please wait before making another request"
}
```

**Error Response (500):**

```json
{
  "success": false,
  "error": "Analysis Failed",
  "message": "Failed to analyze symptoms. Please try again."
}
```

### Rate Limiting

- **10 requests per minute** per IP address
- 429 status code when exceeded
- Reset after 60 seconds

---

## 📁 Project Structure

```
symptocare-ai/
│
├── .gitignore                    # Git ignore file
├── README.md                     # This file
├── DEMO_INSTRUCTIONS.md          # Demo video guide
│
├── backend/                      # Node.js/Express backend
│   ├── node_modules/             # Dependencies (not committed)
│   ├── src/
│   │   ├── controllers/
│   │   │   └── symptom.controller.js     # Business logic
│   │   ├── routes/
│   │   │   └── symptom.routes.js         # API routes
│   │   ├── services/
│   │   │   └── llm.service.js            # Gemini AI integration
│   │   └── middleware/
│   │       └── validation.js             # Input validation & rate limiting
│   ├── .env                      # Environment variables (not committed)
│   ├── .env.example              # Environment template
│   ├── package.json              # Backend dependencies
│   ├── package-lock.json
│   └── server.js                 # Server entry point
│
└── frontend/                     # Next.js frontend
    ├── node_modules/             # Dependencies (not committed)
    ├── public/
    │   └── favicon.ico           # App icon
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx        # Navigation header
    │   │   ├── Footer.jsx        # Footer with disclaimers
    │   │   ├── DisclaimerBanner.jsx  # Medical disclaimer
    │   │   ├── LoadingSpinner.jsx    # Loading animation
    │   │   ├── SymptomForm.jsx       # Symptom input form
    │   │   ├── ResultCard.jsx        # Results display
    │   │   ├── ThemeToggle.jsx       # Dark/light mode toggle
    │   │   └── HistoryCard.jsx       # History item display
    │   ├── pages/
    │   │   ├── _app.js           # Next.js app wrapper
    │   │   ├── index.jsx         # Landing page
    │   │   ├── check.jsx         # Symptom checker page
    │   │   ├── history.jsx       # History page
    │   │   └── about.jsx         # About page
    │   ├── styles/
    │   │   └── globals.css       # Global styles
    │   └── utils/
    │       ├── api.js            # API utility functions
    │       ├── pdfGenerator.js   # PDF export utility
    │       └── historyStorage.js # LocalStorage management
    ├── .env.local                # Environment variables (not committed)
    ├── .env.local.example        # Environment template
    ├── jsconfig.json             # Path aliases
    ├── next.config.js            # Next.js configuration
    ├── tailwind.config.js        # Tailwind configuration
    ├── postcss.config.js         # PostCSS configuration
    ├── package.json              # Frontend dependencies
    └── package-lock.json
```

---

## 🔍 Features in Depth

### 1. Dark/Light Mode Implementation

**Technology:**

- CSS variables for theme colors
- LocalStorage for persistence
- React Context API for state management
- Tailwind CSS dark mode utilities

**Implementation Details:**

```javascript
// Theme toggle component
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  document.documentElement.classList.toggle("dark");
};
```

**Supported Elements:**

- Background colors
- Text colors
- Border colors
- Shadow effects
- Input fields
- Buttons and cards

### 2. History Management

**Storage:**

- Browser LocalStorage (client-side)
- No server-side data storage
- Privacy-focused approach

**Data Structure:**

```json
{
  "id": "unique_timestamp_id",
  "timestamp": "2024-12-06T12:00:00.000Z",
  "symptoms": "headache and fever",
  "age": 25,
  "gender": "male",
  "duration": "1-3 days",
  "result": {
    "possibleConditions": [...],
    "severity": "Low",
    "recommendations": [...],
    "redFlags": [],
    "disclaimer": "..."
  }
}
```

**Operations:**

- **Create:** Automatically saved after analysis
- **Read:** View all or individual entries
- **Update:** Not supported (immutable records)
- **Delete:** Remove individual entries
- **Export:** Download as JSON or PDF
- **Clear:** Delete all history

**Limits:**

- LocalStorage size: ~5-10MB (browser dependent)
- Recommended max entries: 100
- Automatic cleanup of oldest entries if limit reached

### 3. PDF Export

**Library:** jsPDF

**Generated PDF Contents:**

1. Header with SymptoCare AI branding
2. Timestamp of analysis
3. Patient information (if provided)
4. Symptoms description
5. Severity indicator
6. Possible conditions table
7. Recommendations list
8. Red flags (if any)
9. Medical disclaimer
10. Footer with generation date

**Features:**

- Professional medical document format
- Color-coded severity
- Print-friendly layout
- Automatic page breaks
- Embedded fonts for consistency

### 4. Severity Detection Algorithm

**AI Prompt Engineering:**

- Explicitly requests severity assessment
- Provides clear criteria for each level
- Includes emergency symptom detection

**Classification:**

**Low Severity:**

- Common, self-limiting conditions
- Minimal impact on daily activities
- Self-care usually sufficient
- Examples: Cold, minor headache, mild allergies

**Medium Severity:**

- Conditions requiring monitoring
- May need medical consultation
- Potentially progressive symptoms
- Examples: Flu, persistent cough, moderate pain

**High Severity:**

- Serious or potentially life-threatening
- Requires immediate medical attention
- Emergency red flags present
- Examples: Chest pain, difficulty breathing, severe trauma

---

## 🧪 Testing

### Manual Testing Checklist

#### Backend Tests

- [ ] Health endpoint responds correctly
- [ ] Valid symptom analysis works
- [ ] Input validation rejects invalid data
- [ ] Rate limiting triggers after 10 requests
- [ ] API key validation works
- [ ] Error messages are user-friendly
- [ ] CORS allows frontend requests

#### Frontend Tests

- [ ] Landing page loads correctly
- [ ] All navigation links work
- [ ] Form validation shows appropriate errors
- [ ] Symptom submission triggers loading state
- [ ] Results display correctly formatted
- [ ] Severity colors are accurate
- [ ] History saves and displays correctly
- [ ] PDF export generates valid documents
- [ ] Dark/light mode toggle works
- [ ] Theme persists across page reloads
- [ ] Mobile responsive design works
- [ ] All disclaimers are visible

#### Integration Tests

- [ ] End-to-end symptom check flow completes
- [ ] Different severity levels display correctly
- [ ] Error handling works throughout the app
- [ ] History management (CRUD operations)
- [ ] PDF export from history works
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browser compatibility

### Test Scenarios

#### Test Case 1: Low Severity

```
Input:
- Symptoms: "mild headache and runny nose for 1 day"
- Age: 28
- Duration: "Less than 24 hours"

Expected Output:
- Severity: Low
- Conditions: Common Cold, Allergic Rhinitis
- Recommendations: Rest, hydration, OTC medications
- Red Flags: None
```

#### Test Case 2: Medium Severity

```
Input:
- Symptoms: "fever, cough, and body aches for 3 days"
- Age: 35
- Duration: "1-3 days"

Expected Output:
- Severity: Medium
- Conditions: Influenza, Viral Infection
- Recommendations: Rest, monitor, consider doctor visit
- Red Flags: Watch for worsening symptoms
```

#### Test Case 3: High Severity

```
Input:
- Symptoms: "severe chest pain radiating to left arm, shortness of breath"
- Age: 58
- Duration: "Less than 24 hours"

Expected Output:
- Severity: High
- Conditions: Cardiac emergency, requires immediate attention
- Recommendations: CALL EMERGENCY SERVICES
- Red Flags: Multiple emergency flags
```

---

## 🚢 Deployment

### Frontend Deployment (Vercel)

**Steps:**

1. Push code to GitHub
2. Visit https://vercel.com
3. Import GitHub repository
4. Configure environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend URL
5. Deploy

**Vercel Configuration:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### Backend Deployment (Render/Railway)

**Render Steps:**

1. Visit https://render.com
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: GEMINI_API_KEY, PORT, FRONTEND_URL
5. Deploy

**Environment Variables for Production:**

```env
GEMINI_API_KEY=your_production_key
PORT=5000
FRONTEND_URL=https://your-frontend-domain.vercel.app
NODE_ENV=production
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Issue 1: "Cannot find module '@google/generative-ai'"

**Solution:**

```bash
cd backend
npm install @google/generative-ai
npm run dev
```

#### Issue 2: "GEMINI_API_KEY is not configured"

**Solution:**

- Check `.env` file exists in backend folder
- Verify API key is correct (starts with `AIzaSy`)
- No quotes around the key
- Restart backend server after changes

#### Issue 3: "Rate limit exceeded"

**Solution:**

- Wait 60 seconds before next request
- Or use a different model with higher limits
- For testing, temporarily increase rate limit in `validation.js`

#### Issue 4: "Network Error" or API not connecting

**Solution:**

- Verify backend is running: http://localhost:5000/health
- Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
- Check CORS configuration in backend
- Clear browser cache and restart

#### Issue 5: Dark mode not persisting

**Solution:**

- Check LocalStorage is enabled in browser
- Clear browser cache
- Check console for JavaScript errors
- Verify `localStorage.setItem()` is working

#### Issue 6: PDF export not working

**Solution:**

- Check browser console for errors
- Verify jsPDF library is installed
- Try different browser (some block downloads)
- Check browser download settings

#### Issue 7: History not saving

**Solution:**

- Verify LocalStorage is not full
- Check browser privacy settings (allow LocalStorage)
- Clear existing history and try again
- Check console for storage errors

---

## 🤝 Contributing

While this is an assignment project, suggestions and improvements are welcome!

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines

- Use ESLint for JavaScript linting
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Keep functions small and focused

---

## 📄 License

This project is developed as an educational assignment for **Unthinkable Solutions** and is not intended for commercial use or actual medical diagnosis.

**Important:** This application should NOT be used for:

- Medical diagnosis or treatment
- Emergency medical situations
- Replacing professional healthcare advice
- Commercial healthcare services

---

## 🙏 Acknowledgments

### Technologies & Services

- **Google Gemini AI** - For providing the AI capabilities
- **Anthropic Claude** - For development assistance during coding
- **Vercel** - For potential frontend hosting
- **Render/Railway** - For potential backend hosting

### Assignment

- **Unthinkable Solutions** - For providing the assignment opportunity
- **VIT Pune** - Educational institution

### Inspiration

- Modern healthcare web applications
- AI-powered diagnostic tools
- Educational medical platforms

---

## 📞 Contact & Support

**Developer:** Suyash  
**Email:** [suyashmatade007@gmail.com]  
**GitHub:** [@suyash242004](https://github.com/suyash242004)

### Project Links

- **Repository:** https://github.com/suyash242004/symptocare-ai
- **Documentation:** This README

---

## 📊 Project Statistics

- **Lines of Code:** ~5,000+
- **Components:** 10+
- **API Endpoints:** 2
- **Pages:** 4
- **Development Time:** [Your time]
- **Technologies Used:** 15+
- **Features Implemented:** 8 major features

---

## 🔮 Future Enhancements

Potential features for future versions (not in current scope):

1. **User Authentication**

   - User accounts and login
   - Secure history storage
   - Profile management

2. **Advanced History**

   - Cloud sync across devices
   - Export to multiple formats (CSV, Excel)
   - History analytics and trends

3. **Multi-language Support**

   - Internationalization (i18n)
   - Support for multiple languages
   - Localized medical terminology

4. **Enhanced AI Features**

   - Image upload for symptom analysis
   - Voice input support
   - Follow-up question system
   - Medical image analysis

5. **Integration Features**

   - Telemedicine booking
   - Healthcare provider directory
   - Pharmacy locator
   - Lab test recommendations

6. **Mobile App**

   - React Native mobile application
   - Push notifications for reminders
   - Offline mode support

7. **Advanced Analytics**

   - Symptom trend analysis
   - Personalized health insights
   - Risk factor identification

8. **Community Features**
   - Anonymous health forums
   - Expert Q&A section
   - Health tips and articles

---

## 📝 Changelog

### Version 1.0.0 (December 2024)

- ✅ Initial release with core features
- ✅ AI-powered symptom analysis
- ✅ Dark/light mode support
- ✅ History tracking with LocalStorage
- ✅ PDF export functionality
- ✅ Responsive design
- ✅ Comprehensive medical disclaimers
- ✅ Rate limiting and input validation

---

## ⚖️ Legal & Compliance

### Medical Disclaimer

**IMPORTANT:** This application is provided for **EDUCATIONAL PURPOSES ONLY**.

- This is NOT a medical device
- NOT approved by FDA or any medical authority
- NOT a substitute for professional medical advice
- NOT intended for diagnosis, treatment, or prevention of diseases
- Should NOT be used in emergency situations

**Always:**

- Consult qualified healthcare professionals
- Seek immediate medical attention for emergencies
- Follow professional medical advice
- Use your own judgment regarding health decisions

### Privacy Policy

- No personal health information is stored on servers
- History stored locally in browser only
- API calls do not log personal information
- No third-party tracking or analytics
- No data sharing with external parties

### Terms of Use

By using this application, you agree:

- This is an educational tool only
- You will not use it for actual medical diagnosis
- You understand its limitations
- You will seek professional medical care when needed
- You will not hold the developers liable for any outcomes

---

## 🎓 Educational Value

This project demonstrates:

### Technical Skills

- Full-stack web development
- AI/ML integration
- RESTful API design
- Modern JavaScript frameworks
- Responsive UI/UX design
- State management
- Error handling
- Security best practices

### Soft Skills

- Problem-solving
- Code organization
- Documentation
- User-centric design
- Attention to detail
- Time management
- Project planning

### Healthcare Domain

- Medical terminology understanding
- Patient safety considerations
- Healthcare user experience
- Medical disclaimers importance
- Emergency detection protocols

---

**Made with ❤️ by Suyash for Unthinkable Solutions Assignment**

---

<div align="center">

### ⭐ If you found this project helpful, please star the repository!

**Thank you for reviewing SymptoCare AI**

</div>
