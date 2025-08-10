# 🌿 WellNest

**WellNest** is a wellness session management platform where admins can create, publish, unpublish, and delete wellness sessions.  
It helps streamline the process of managing wellness events with a clean and intuitive dashboard.

---

## ✨ Features
- 📅 Create wellness sessions with **Title**, **Tags**, and **JSON file URL**.
- 📜 View all sessions with **status indicators** (Published / Draft).
- 🚀 Publish or unpublish sessions with one click.
- 🗑️ Delete unwanted sessions.
- 📱 Fully responsive and modern UI.

---

## 🛠 Tech Stack
**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ORM)  
**Other:** Axios for API calls

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ekamsinghh/WellNest.git
cd WellNest
```
### Backend
```bash
npm start
```
### Frontend
```bash
npm run dev
```

## API Routes

| Method | Endpoint            | Description                                       | Auth Required | Request Body |
|--------|---------------------|---------------------------------------------------|---------------|--------------|
| POST   | `/register`         | Register a new user                               | No            | `{ name, email, password }` |
| POST   | `/login`            | Login and receive authentication token            | No            | `{ email, password }` |
| POST   | `/create`           | Create a new wellness session                     | Yes           | `{ title, description, date, status }` |
| GET    | `/my-sessions`      | Get all sessions created by the logged-in user    | Yes           | None         |
| GET    | `/published`        | Get all published sessions                        | Yes           | None         |
| GET    | `/:id`              | Get session details by ID                         | Yes           | None         |
| DELETE | `/:id`              | Delete a session by ID                            | Yes           | None         |
| POST   | `/toggle-status`    | Toggle session status between draft and published | Yes           | `{ sessionId }` |
