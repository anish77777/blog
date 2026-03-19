# � MegaBlog – Full-Stack React & Appwrite Platform

A high-performance, secure blogging platform featuring real-time authentication, database management, and cloud storage.

##  Key Features
- **Admin Control**: Restricted "Add Post" access based on user email (`anish@gmail.com`).
   Update your email in .env file to get admin access
- **Rich Text Editor**: Powered by **React-Quill** (Free, Open-Source, and NO API keys required).
- **Responsive Design**: Built with TailwindCSS for seamless mobile and desktop viewing.
- **Secure File Storage**: Integrated Appwrite Storage for blog thumbnails.

---

## 🛠️ Appwrite Setup (Crucial)

To get this project running, you must configure your Appwrite Console with these exact settings:

### **1. Database & Collection**
- **Attributes (Case Sensitive!):** All attributes must be **LOWERCASE** to match the code:
  - `title` (String)
  - `content` (Type: **Text** - important for long blogs!)
  - `featuredimage` (String)
  - `status` (String)
  - `userid` (String)
- **Permissions:** Go to Collection Settings -> Permissions -> Add Role **"Any"** -> Check **Read**.

### **2. Storage (Bucket)**
- Create a bucket for images.
- **Permissions:** Go to Bucket Settings -> Permissions -> Add Role **"Any"** -> Check **Read**.
- **Special Config:** This app uses `getFileView` (configured in `appwrite/config.js`) to bypass Appwrite Cloud's "Image Transformation" plan restrictions.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your Appwrite credentials:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID=""
VITE_ADMIN_EMAIL="anish@gmail.com"
```

---

## 💻 Tech Stack
- **Frontend:** React JS (Vite), Tailwind CSS
- **State Management:** Redux Toolkit (@reduxjs/toolkit, react-redux)
- **Backend-as-a-Service:** Appwrite SDK
- **Forms:** React Hook Form
- **RTE:** react-quill-new

## 🏗️ Getting Started
1. Clone the repository.
2. Run `npm install`.
3. Configure your `.env` file.
4. Run `npm run dev`.

---

*Built with ❤️ using React 19 and Appwrite Cloud.*
