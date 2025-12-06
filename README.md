# SymptoCare AI - Healthcare Symptom Checker 🩺

An AI-powered educational web application that analyzes symptoms and provides general health information using Google Gemini AI.

---

## 🌟 Key Features

✅ **AI-Powered Analysis** - Smart symptom analysis using Google Gemini AI  
✅ **Dark/Light Mode** - Toggle between themes for comfortable viewing  
✅ **History Tracking** - View and manage previous symptom checks  
✅ **PDF Export** - Download analysis results as PDF  
✅ **Severity Detection** - Color-coded severity levels (Low/Medium/High)  
✅ **Responsive Design** - Works seamlessly on mobile and desktop  
✅ **Safety First** - Comprehensive medical disclaimers throughout

---

## 🚀 Quick Start Guide

### Prerequisites

- Node.js (v18 or higher)
- Google Gemini API Key ([Get it here](https://aistudio.google.com/app/apikey))

### Installation Steps

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suyash242004/symptocare-ai.git
cd symptocare-ai
```

#### 2️⃣ Setup Backend

```bash
cd backend
npm install
cp .env.example .env
```

**Edit `.env` file and add your API key:**

```env
GEMINI_API_KEY=your_api_key_here
PORT=5000
FRONTEND_URL=http://localhost:3000
```

**Start Backend:**

```bash
npm run dev
```

✅ Backend running on: `http://localhost:5000`

#### 3️⃣ Setup Frontend (New Terminal)

```bash
cd frontend
npm install
```

**Create `.env.local` file:**

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Start Frontend:**

```bash
npm run dev
```

✅ Frontend running on: `http://localhost:3000`

---

## 📱 How to Use

1. **Visit** `http://localhost:3000`
2. **Navigate** to "Check Symptoms" page
3. **Enter** your symptoms in detail
4. **Add** optional info (age, gender, duration)
5. **Click** "Analyze Symptoms"
6. **View** AI-generated results with recommendations
7. **Export** results as PDF or view in History

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 14 with React 18
- **Styling:** Tailwind CSS
- **Features:** Dark mode, PDF export, History tracking

### Backend

- **Runtime:** Node.js with Express
- **AI:** Google Gemini API (gemini-2.0-flash)
- **Architecture:** RESTful API

---

## 📂 Project Structure

```
symptocare-ai/
├── backend/              # Express API server
│   ├── src/
│   │   ├── controllers/  # Business logic
│   │   ├── routes/       # API endpoints
│   │   ├── services/     # AI integration
│   │   └── middleware/   # Validation & rate limiting
│   ├── .env.example      # Environment template
│   └── server.js         # Server entry point
│
├── frontend/             # Next.js application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application pages
│   │   │   ├── index.jsx    # Home page
│   │   │   ├── check.jsx    # Symptom checker
│   │   │   ├── history.jsx  # History page
│   │   │   └── about.jsx    # About page
│   │   ├── styles/       # CSS styles
│   │   └── utils/        # API utilities
│   └── package.json
│
└── README.md
```

---

## 🎯 API Endpoints

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| `GET`  | `/health`               | Server health check |
| `POST` | `/api/symptoms/analyze` | Analyze symptoms    |

### Example API Request

```bash
curl -X POST http://localhost:5000/api/symptoms/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": "headache and fever for 2 days",
    "age": 25,
    "gender": "male",
    "duration": "1-3 days"
  }'
```

---

## ⚠️ Important Medical Disclaimer

**THIS IS FOR EDUCATIONAL PURPOSES ONLY**

- ❌ Not a substitute for professional medical advice
- ❌ Does not provide medical diagnoses
- ❌ Not for emergency medical situations
- ✅ Always consult qualified healthcare providers
- ✅ For emergencies, call local emergency services

---

## 🎨 Features in Detail

### 1. Dark/Light Mode Toggle

- Automatic theme detection
- Persistent preference storage
- Smooth transitions

### 2. History Tracking

- View all previous symptom checks
- Filter and search functionality
- Delete individual entries

### 3. PDF Export

- Download results as formatted PDF
- Includes all analysis details
- Professional medical document layout

### 4. Severity Detection

- **🟢 Low:** Minor conditions, self-care recommended
- **🟡 Medium:** Moderate symptoms, consider doctor visit
- **🔴 High:** Serious symptoms, immediate attention needed

---

## 🧪 Testing the Application

Try these test scenarios:

**Low Severity:**

```
Symptoms: "mild headache and runny nose for 1 day"
Expected: Low severity, common cold
```

**Medium Severity:**

```
Symptoms: "fever, cough, and fatigue for 3 days"
Expected: Medium severity, flu-like illness
```

**High Severity:**

```
Symptoms: "chest pain and difficulty breathing"
Expected: High severity, emergency red flags
```

---

## 📝 Environment Variables

### Backend `.env`

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🐛 Troubleshooting

### Backend Not Starting

- ✅ Check if port 5000 is available
- ✅ Verify GEMINI_API_KEY is correct
- ✅ Run `npm install` in backend folder

### Frontend Not Connecting

- ✅ Ensure backend is running first
- ✅ Check NEXT_PUBLIC_API_URL in `.env.local`
- ✅ Clear browser cache and restart

### API Key Issues

- ✅ Get new key from https://aistudio.google.com/app/apikey
- ✅ No quotes around key in `.env` file
- ✅ Restart backend after updating `.env`

---

## 👨‍💻 Developer Information

**Developed by:** Suyash  
**Assignment for:** Unthinkable Solutions  
**Repository:** [github.com/suyash242004/symptocare-ai](https://github.com/suyash242004/symptocare-ai)

---

## 📄 License

This project is developed as an educational assignment and is not intended for commercial use or actual medical diagnosis.

---

## 🙏 Acknowledgments

- **Google Gemini AI** for AI capabilities
- **Unthinkable Solutions** for the assignment opportunity

---

## 📞 Support

For any issues or questions:

1. Check the troubleshooting section above
2. Check commit history for implementation details

---

**⭐ If you found this helpful, please star the repository!**

**Made with ❤️ for Unthinkable Solutions Assignment**
