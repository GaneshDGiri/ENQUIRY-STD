Certainly. Here is a `README.md` file for your MERN stack Enquiry System application, incorporating your specified instructions and using the provided images to describe its features.

---

# MERN Stack Enquiry System

A full-stack web application built with the MongoDB, Express, React, and Node.js (MERN) stack, designed to streamline user inquiries. The system allows users to securely register, log in, submit inquiries, and track the status of their messages, including admin responses.

## Key Features

* **User Authentication:** Secure registration and login for users. Separate login portal for administrators.
* **Enquiry Submission:** Users can submit detailed inquiries or issues.
* **Message Tracking:** A dashboard where users can view all their submitted messages and their status.
* **Admin Interface (Inferred):** A separate interface for administrators to view all incoming inquiries and provide replies.
* **Real-time Updates:** (If implemented) The system can show real-time status updates for inquiries.

## Technology Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JSON Web Tokens (JWT)
* **Styling:** Custom CSS / Bootstrap (as seen in screenshots)

## Application Screenshots

### User Login Page

This is the main entry point for users to access the system. It features a clean login form with email and password fields.

![User Login Page](image_0.png)

### User Message Status

After logging in, users can view their message history. This page shows the text of their message, its status (e.g., "Replied"), and the admin's response.

![User Dashboard - Message Status](image_1.png)

## Installation and Setup

Follow these steps to get a local copy up and running.

### Prerequisites
<img width="1920" height="1080" alt="Screenshot (208)" src="https://github.com/user-attachments/assets/c561c66d-33ae-4a2b-b791-b65399411a6d" />
<img width="1920" height="1080" alt="Screenshot (207)" src="https://github.com/user-attachments/assets/c8cb7894-0381-4f9c-a693-7fe7cd0c895c" />
<img width="1920" height="1080" alt="Screenshot (208)" src="https://github.com/user-attachments/assets/578d9a0e-514f-4346-9e44-41c6cee52860" />
<img width="1920" height="1080" alt="Screenshot (207)" src="https://github.com/user-attachments/assets/604eaebd-4583-4db8-b3c3-2e97629c47de" />

* Node.js (v14+ recommended)
* npm (Node Package Manager)
* MongoDB (Either a local installation or a cloud cluster like MongoDB Atlas)

### Step 1: Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

### Step 2: Configure Environment Variables

You will need to set up `.env` files in both the `backend` and `frontend` (if applicable) directories.

**Backend `.env` Example:**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/enquiry_db  # Or your Atlas connection string
JWT_SECRET=your_jwt_secret_key_here
```

**Frontend `.env` Example (if needed for API URL):**

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Step 3: Setup Backend

1.  Navigate to the backend directory.
2.  Install dependencies.
3.  Run the backend server.

```bash
cd backend
npm install
node server.js
```

The backend server should now be running, typically on port 5000.

### Step 4: Setup Frontend

1.  Navigate to the frontend directory.
2.  Install dependencies.
3.  Run the development server.

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will start, usually on a port like 5173. You can access the application at `http://localhost:5173`.

## Application Flow

1.  **Register:** If you don't have an account, click the "Register here" link on the login page.
2.  **Login:** Use your credentials to log in on the user login page (`image_0.png`).
3.  **Dashboard:** Upon successful login, you'll be directed to your dashboard.
4.  **Submit Enquiry:** Use the "Enquiry Form" navigation link (seen in `image_1.png`) to submit a new inquiry.
5.  **Check Status:** Click "Check Status" in the navigation bar to view your submitted inquiries and any admin replies (`image_1.png`).
6.  **Admin Login:** Admin access is through the "Admin Login" button on the main header.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
