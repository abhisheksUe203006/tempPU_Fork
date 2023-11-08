# Panjab University Complaint App

A full stack app for online registration and resolution of complaints in Panjab university.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)
## Project Overview

The Panjab University Complaint App is a full-stack application built on the MERN (MongoDB, Express.js, React, Node.js) technology stack, designed to enhance the overall experience of students, faculty, and staff at Panjab University by providing an efficient platform for submitting, tracking, and resolving complaints and feedback.

#### Employee Management(Admin/Assistant)
The assistant profile can add, remove employees and can assign jobs to the employees.
Admin profile can add and remove employees.
#### Attendance system(Assistant)
Assistant profile can record attendance for employees.	 Attendance is then visible to the admin profile.

#### Complaint registration and status tracking(User)
User can register complaints with details including address, phone num, details, and photos. They can then track the progress of the complaint.

## Features

- [ ] User profile creation and management
- [ ] Employee profile creation and management
- [ ] Admin, Assistant, Worker and User Dashboard
- [ ] Push notifications
- [ ] Attendance System
- [ ] Metric Analysis by Admin(Complaints completed till date, Attendance records etc.)
- [ ] ### Backend features

## Technologies

- React.js
- Node.js
- MongoDB
- Express.js

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/marvelCodeMan/tempPU/tree/master
```

2. Go to the project directory and install dependencies for both the client and server
```bash
cd client/PuApp
npm install
```
```bash
cd ../..
cd server
npm install --legacy-peer-deps
```

3. Start the server
```bash
cd server
npm start
```


3. Start the client
```bash
cd client/PuApp
npm start
```

4. Download Expo Go app on android and scan the QR code generated on starting the client. 

5. If a web view view is preferred then press the "w" key and follow the instructions generated to download appropriate package. Then,
```bash
cd client/PuApp
npm start
```
## Usage

### Admin
Admin profiles are created by adding the credentials directly to MongoDB. After that the profile can be accessed by using the apps login interface.
### Assistant
Assistant profiles can be created using an admin profile. Access is using the login interface after which the assistant can create and delete workers,, assign complaints, add and remove workers from a complaint and mark attendance for employees(workers).

### Worker profile
Worker profiles can be created by an admin or an assistant profile. Access is using the apps login interface after which workers can see completed, pending and ongoing complaints assigned to them. They can then update the complaints and close them on completion.
### User
User can register for the app using the registration interface. They can then submit complaints to the appropriate department along with photos for the complaint.

## License

This project is licensed under the [MIT License](https://github.com/abhisheksUe203006/tempPU_Fork/blob/master/LICENSE).