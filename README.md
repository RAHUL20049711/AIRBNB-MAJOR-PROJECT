🏨 Wanderlust – Hotel Booking Web App
Wanderlust is a full-stack hotel booking platform where users can browse, search, and manage hotels on a map-based interface. Built using Node.js, Express, EJS, and MongoDB, with map rendering via Maplibre + MapTiler and image uploads handled through Cloudinary. The app is deployed using Render.

🌟 Features
🔍 Browse and Filter Hotels

🗺️ Interactive Map View with Markers

📝 User Authentication (Login, Register, Logout)

📦 CRUD Operations for Listings (Admin/Host Panel)

💬 Review System for Guests

📷 Hotel Image Uploads via Cloudinary

🔒 Robust Error Handling & Validation

🌐 Deployed Live on Render

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript, EJS

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Maps: Maplibre GL JS + MapTiler

Authentication: Passport.js

Image Hosting: Cloudinary

Deployment: Render

Templating: EJS

📸 Screenshots
(Insert screenshots of key pages: home, hotel details, map, add listing, etc.)

🚀 Getting Started
Prerequisites
Node.js & npm

MongoDB (Atlas or local)

Cloudinary account

MapTiler account

Clone and Install
bash
Copy
Edit
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
npm install
Configuration
Create a .env file in the root directory with the following:

init![Screenshot 2025-04-22 184338](https://github.com/user-attachments/assets/b1274e09-2c66-44ad-837c-8642e6933a0d)
![Screenshot 2025-04-22 144551](https://github.com/user-attachments/assets/e0e56ec9-de5a-4758-843a-444779c6c294)
![Screenshot 2025-04-22 144502](https://github.com/user-attachments/assets/a85e8124-80fb-4342-9000-239cb071bf56)
![Screenshot 2025-04-22 144446](https://github.com/user-attachments/assets/c712d0e7-1f21-4007-9fb2-f073610dcb7d)
![Screenshot 2025-04-22 144536](https://github.com/user-attachments/assets/16d27cf6-4218-4aa8-b0b2-ac883824b67b)
![Screenshot 2025-04-22 144515](https://github.com/user-attachments/assets/b7082fd3-9258-45a6-9e10-7b3ac5ca1002)
![Screenshot 2025-04-22 144415](https://github.com/user-attachments/assets/879cac97-67ea-456c-8cf3-16d73c641f85)
![Screenshot 2025-04-22 144352](https://github.com/user-attachments/assets/94455b7a-f3ad-4658-bb02-8e8a73c4cecf)

Copy
Edit
DB_URL=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SECRET=your_session_secret
Run the App Locally
bash
Copy
Edit
npm start
Go to: http://localhost:8080

🌐 Live Demo
Check out the live version on Render:
👉 https://wanderlust-hotel-booking-major-project-1.onrender.com/listings

🗂️ Folder Structure
csharp
Copy
Edit
├── models/           # Mongoose schemas
├── public/           # Static assets
├── routes/           # App routes
├── views/            # EJS templates
├── middleware/       # Middleware utilities
├── utils/            # Helpers (e.g., error handling)
├── app.js            # Entry point
└── .env              # Environment configuration
🌈 Future Enhancements
Hotel availability calendar

Email confirmation on booking

Stripe integration for payments

Favorites/Wishlist functionality

Admin analytics dashboard

🤝 Contributing
Contributions, feedback, and ideas are welcome! Feel free to fork the repo and submit PRs.

📄 License
Licensed under the MIT License.
