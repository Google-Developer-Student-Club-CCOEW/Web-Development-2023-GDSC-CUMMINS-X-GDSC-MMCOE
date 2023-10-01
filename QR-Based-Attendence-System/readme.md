Certainly, here's a README file for your project based on the schema and information you provided:

# QR-Based Attendance System - Web Application

## Table of Contents
1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [User Roles and Functionality](#3-user-roles-and-functionality)
    - 3.1 [Teacher](#31-teacher)
    - 3.2 [Student](#32-student)
4. [System Architecture](#4-system-architecture)
    - 4.1 [Frontend](#41-frontend-html-css-javascript)
    - 4.2 [Backend](#42-backend-nodejs)
5. [API Endpoints](#5-api-endpoints)
    - 5.1 [Teacher Registration and Login API](#51-teacher-registration-and-login-api)
    - 5.2 [Student Registration and Login API](#52-student-registration-and-login-api)
    - 5.3 [Get Student Details API](#53-get-student-details-api)
    - 5.4 [Get Teacher Details API](#54-get-teacher-details-api)
    - 5.5 [Generate QR Code API](#55-generate-qr-code-api)
    - 5.6 [Set QR Limit Functionality](#56-set-qr-limit-functionality)
    - 5.7 [Scan QR API](#57-scan-qr-api)
6. [User Interfaces](#6-user-interfaces)
    - 6.1 [Teacher Details Page UI](#61-teacher-details-page-ui)
    - 6.2 [Student Details Page UI](#62-student-details-page-ui)
    - 6.3 [Create Class UI](#63-create-class-ui)
    - 6.4 [Scan Class UI](#64-scan-class-ui)
7. [System Functionality](#7-system-functionality)
    - 7.1 [Teacher Registration and Login](#71-teacher-registration-and-login)
    - 7.2 [Student Registration and Login](#72-student-registration-and-login)
    - 7.3 [Create Class Functionality](#73-create-class-functionality)
    - 7.4 [Generate QR Code Functionality](#74-generate-qr-code-functionality)
    - 7.5 [Scan QR Code Functionality](#75-scan-qr-code-functionality)
8. [Dashboard Features](#8-dashboard-features)
    - 8.1 [Teacher Dashboard](#81-teacher-dashboard)
    - 8.2 [Student Dashboard](#82-student-dashboard)

---

## 1. Introduction

This documentation outlines the design and functionality of the QR-Based Attendance System, a web application built using HTML, CSS, and JavaScript for the frontend, and Node.js for the backend. The system aims to simplify attendance tracking in educational institutions through QR code technology.

## 2. Project Overview

The QR-Based Attendance System allows teachers to create and manage classes, generate QR codes for each class session, and record student attendance by scanning the QR codes. Students can log in to view their attendance records and see details about classes they've attended.

## 3. User Roles and Functionality

### 3.1 Teacher
- Registration and login
- Create and manage classes
- Generate QR codes for class sessions
- View details of attended classes and students

### 3.2 Student
- Registration and login
- View attendance records
- View details of attended classes

## 4. System Architecture

### 4.1 Frontend (HTML, CSS, JavaScript)
- The frontend is responsible for the user interface and user interactions.
- It communicates with the backend via HTTP requests.

### 4.2 Backend (Node.js)
- The backend handles user authentication, class management, and attendance recording.
- It exposes APIs for frontend interactions and manages the database.

## 5. API Endpoints

### 5.1 Teacher Registration and Login API
- `/teacher/register` - Register a new teacher
- `/teacher/login` - Authenticate a teacher

### 5.2 Student Registration and Login API
- `/student/register` - Register a new student
- `/student/login` - Authenticate a student

### 5.3 Get Student Details API
- `/student/details` - Retrieve student details

### 5.4 Get Teacher Details API
- `/teacher/details` - Retrieve teacher details

### 5.5 Generate QR Code API
- `/generate-qr-code` - Generate a QR code for a class session

### 5.6 Set QR Limit Functionality
- Set a limit for QR code usage per session

### 5.7 Scan QR API
- `/scan-qr` - Record student attendance by scanning the QR code
- Store student IDs into the attended session list

## 6. User Interfaces

### 6.1 Teacher Details Page UI
- Display teacher details
- Manage classes
- Generate QR codes

### 6.2 Student Details Page UI
- Display student details
- View attendance records

### 6.3 Create Class UI
- Create a new class
- Set class details

### 6.4 Scan Class UI
- Scan QR code to record attendance
- Display class details

## 7. System Functionality

### 7.1 Teacher Registration and Login
- Teachers can register for a new account and log in to access their dashboard.

### 7.2 Student Registration and Login
- Students can register for a new account and log in to access their dashboard.

### 7.3 Create Class Functionality
- Teachers can create new classes, set class details, and generate QR codes for class sessions.

### 7.4 Generate QR Code Functionality
- Teachers can generate QR codes for class sessions, ensuring that each code is unique.

### 7.5 Scan QR Code Functionality
- Students can scan QR codes to mark their attendance for a class session.

## 8. Dashboard Features

### 8.1 Teacher Dashboard
- View and manage classes
- Generate QR codes
- View attended classes and students

### 8.2 Student Dashboard
- View attendance records
- View details of attended classes

---

## Schema

### Student Table
- Student_id
- Full Name
- Branch
- Email
- Year
- Password

### Teacher Table
- Teacher_id
- Full Name
- Branch
- Email
- Specialization
- Password

### Class Table
- Class_id
- Class_name
- Teacher_id
- Start_time
- End_time
- Date
- Attendees (Array)

## Color Theme
The color theme strictly follows a white background and blue color wherever color is needed. The hex color code for blue is `#007BFF`.
