# BlogSpace
This full-featured, secure, and production-ready Blogging Web Application is built using the Node.js, Express, and MongoDB (Mongoose) ecosystem under a classic Model-View-Controller (MVC) architectural pattern.

Key Capabilities
# Authentication & Authorization: Secure session handling via Passport.js integrated with custom middleware for granular, role-based   authorization (User, Owner, and Admin).
# Content Management: Complete RESTful routing supporting full Create, Read, Update, and Delete (CRUD) operations for both blog posts and nested review/comment engines.
# Data & Media Integrity: Strict server-side request payload validation powered by Joi schemas, alongside cloud-based multi-part media storage optimization utilizing Multer and the Cloudinary API.

# Features
# User Authentication & Authorization
• Secure Sessions: Powered by express-session and passport for seamless session management.
• Authentication Strategies: Local registration and login using passport-local with automated password hashing via passport-local-   mongoose.
# Role-Based Access Control (RBAC): Enforces distinct permission levels through custom middleware:
• User: Can browse published posts and submit comments or ratings.
• Owner: Has full CRUD privileges exclusively over self-authored blog posts.
• Admin: Has global administrative overrides to moderate, edit, or delete any post or review across the platform.

# Content Management (CRUD)
• Rich Blog Posts: Schema tracking for titles, HTML content bodies, categories, custom cover images, and structured hashtag arrays.
• Interactive Reviews: Integrated nested comment system allowing authenticated users to leave feedback and rate posts on a 1–5 scale.
• Rich Text Editing: Runtime integration of the Quill Rich Text Editor for publishing cleanly formatted web content.

# Security & Data Integrity
• Schema Validation: Strict server-side verification via Joi validation schemas to intercept and reject malformed payloads at the request boundary.
• Asynchronous Error Handling: Operational thread wrapping (wrapAsync) paired with centralized global error-handling middleware to catch exceptions and render custom user-friendly error views.
• Form Overriding: Support for REST-compliant semantic routing via method-override to seamlessly handle PUT and DELETE transactions from standard browser forms.

# Media Uploads
• Stream-Based Processing: Multi-part form data processing and payload parsing via Multer.
• Decoupled Cloud Storage: Hosted asset optimization using the Cloudinary V2 API, streaming media directly to a secure remote cloud bucket to keep the application server lightweight.

# Tech Stack & Dependencies
• Backend Framework: Node.js, Express (v5.1.0)
• Database & ODM: MongoDB Server Engine, Mongoose (v8.16.0)
• Template Engine: Embedded JavaScript (EJS) rendered views, utilizing ejs-mate layout boilerplates for clean UI encapsulation.
• Validation & Security: Joi Data Schemes, Passport.js Security Engine, Connect-Flash State Notifications.
• File Storage Integration: Multer I/O Drivers, Multer-Storage-Cloudinary Connectors, Cloudinary Software Development Kit.

# Project Structure
```text
├── controllers/          
│   ├── admin.js         
│   ├── posts.js        
│   ├── reviews.js        
│   └── users.js         
├── models/               
│   ├── post.js          
│   ├── review.js       
│   └── user.js           
├── routes/               
│   ├── admin.js         
│   ├── post.js          
│   ├── review.js         
│   └── user.js           
├── views/                
│   ├── layouts/          
│   │   └── boilerplate.ejs 
│   ├── partials/         
│   │   ├── flash.ejs     
│   │   ├── footer.ejs    
│   │   └── navbar.ejs    
│   ├── admin/            
│   ├── posts/           
│   ├── users/            
│   └── error.ejs        
├── public/               
│   ├── css/             
│   │   └── style.css    
│   ├── js/               
│   │   └── script.js     
│   └── images/           
├── utils/                
│   ├── ExpressError.js   
│   └── wrapAsync.js      
├── .env                 
├── app.js                
├── cloudConfig.js        
├── middleware.js         
├── Schema.js             
└── package.json                                                                                              

```
# Installation & Setup
1. Clone the Repository
```text
git clone https://github.com/Megha504/BlogSpace.git
cd BlogSpace
```
2. Install Dependencies
```text
npm install
```
3. Configure Environment Variables
Create a .env file in the root directory:
```text
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
SESSION_SECRET=your_custom_session_secret_string
```
4. Start MongoDB
Ensure your local database engine is active at mongodb://127.0.0.1:27017
```text
mongod # Windows
```
5. Launch Server
```text
node app.js     # Standard execution
npx nodemon     # Development mode with auto-reloads
```
Once started, open your browser and navigate to http://localhost:8080
