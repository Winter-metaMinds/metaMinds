# metaMinds
a hackathon project
# Jan Seva Platform – Personalized Government Scheme Recommendation

## Overview

Jan Seva is a citizen-oriented platform designed to help individuals discover government schemes they are eligible for. Unlike traditional portals, this platform:

- Suggests schemes based on a user’s age, education, social category, and economic background.
- Tracks whether citizens are aware of certain schemes.
- Provides an interactive AI Chatbot to guide users step-by-step.
- Integrates a machine learning model for personalized recommendations.

This project is inspired by MySarkar but is built with simplicity, transparency, and accessibility in mind.

---

## System Design

### Architecture Overview

The platform consists of several connected components:

[User Interface (React.js)]
          |
          v
[Backend APIs (Node.js + Express)]
          |
          v
[Database (MongoDB Atlas)]
          |
          v
[Machine Learning Model (Flask/Python)]
          |
          v
[AI Chatbot (OpenAI GPT API)]

Key Points:

The frontend handles all user interactions, including form submission and chatbot conversations.

The backend manages user data, scheme details, and communicates with the ML model and chatbot.

The ML model evaluates eligibility using input data such as age, education, social category, and income.

The chatbot offers real-time guidance and scheme explanations.

Flow diagram:

Start
  |
  v
User enters personal information
  |
  v
System validates inputs
  |
  v
Data sent to ML model
  |
  v
ML predicts eligible schemes
  |
  v
Schemes displayed to the user
  |
  v
End

Data flow

User Scheme Recommendation

User fills personal details in the frontend form.

Backend validates input and sends data to the ML model API.

ML model predicts eligible schemes.

Backend sends results back to the frontend for display.

Chatbot Interaction

User asks a question via the chat widget.

Backend forwards the query to the AI API.

AI response is returned to the user in real-time.
Improvements
achine Learning Enhancements

Incorporate additional features like location, employment status, and family size.

Regularly update the model with new government schemes for accuracy.

Explore ensemble models for improved recommendation quality.

Frontend & User Experience

Mobile-first responsive design.

Interactive dashboards to show awareness statistics.

Personalized notifications for new schemes.

Chatbot Enhancements

Multi-lingual support (Hindi and English).

Maintain conversation context over multiple interactions.
achine Learning Enhancements

Incorporate additional features like location, employment status, and family size.

Regularly update the model with new government schemes for accuracy.

Explore ensemble models for improved recommendation quality.

Frontend & User Experience

Mobile-first responsive design.

Interactive dashboards to show awareness statistics.

Personalized notifications for new schemes.

Chatbot Enhancements

Multi-lingual support (Hindi and English and others).

Maintain conversation context over multiple interactions.

Voice input and output integration.

Security & Performance

Secure authentication using JWT/OAuth2.

Faster API responses through caching.

Logging and monitoring for backend operations.

Community Feedback & Analytics

Feedback option to rate scheme usefulness.

Dashboard for administrators to track scheme adoption and awareness

Security & Performance

Secure authentication using JWT/OAuth2.

Faster API responses through caching.

Logging and monitoring for backend operations.

Community Feedback & Analytics

Feedback option to rate scheme usefulness.

Dashboard for administrators to track scheme adoption and awareness
Key Highlights
Intelligent Discovery
Vector-based semantic search with MiniLM embeddings
Location & profile-based personalization
Real-time eligibility checks via backend rules engine
AI Assistant
Powered by Google Gemini + Hugging Face Transformers
Trained for Indian government schemes knowledge base
Multilingual support (IndicTrans2 + Google Translate API)
Universal Access
IVR system (Twilio + Ngrok) for feature phones
Voice + DTMF navigation
Indic TTS/ASR for natural conversations in Indian languages
Document Intelligence
Tesseract OCR + Transformers (NER) for field extraction
AI-guided form filling & audio instructions for semi-literate users
Community Platform
Role-based access for Citizens, NGOs, Officials, Admin
AI moderation using sentiment analysis & hate speech detection

Tech Backbone
Frontend: React + Tailwind (PWA ready)
Backend: Node.js + Express + MongoDB Atlas (with Vector Search)
AI Services: FastAPI + Transformers (NLP, OCR, CV)
Voice: Twilio APIs + IndicTrans2 for speech/translation
AI Models: state-of-the-art all-MiniLM-L6-v2, microsoft/dit-base-finetuned-rvlcdip, cardiffnlp/twitter-roberta-base-sentiment-latest, TF-IDF Vectorizer
Auth & Security: JWT + bcrypt + role-based access

Awareness and utilization of government schemes – summarized from field studies in India.

AI applications in public services – insights from World Bank reports.

e-Governance platforms in India – NITI Aayog reports on digital government.

Conversational AI for citizen engagement – UNDP studies on chatbots in public services.


