### Backend README

# QR-Based Attendance System - Backend

## Table of Contents
1. [Introduction](#1-introduction)
2. [System Architecture](#2-system-architecture)
    - 2.1 [Frontend](#21-frontend-html-css-javascript)
    - 2.2 [Backend](#22-backend-nodejs)
3. [API Endpoints](#3-api-endpoints)
    - 3.1 [Teacher Registration and Login API](#31-teacher-registration-and-login-api)
    - 3.2 [Student Registration and Login API](#32-student-registration-and-login-api)
    - 3.3 [Get Student Details API](#33-get-student-details-api)
    - 3.4 [Get Teacher Details API](#34-get-teacher-details-api)
    - 3.5 [Generate QR Code API](#35-generate-qr-code-api)
    - 3.6 [Set QR Limit Functionality](#36-set-qr-limit-functionality)
    - 3.7 [Scan QR API](#37-scan-qr-api)

---

## 1. Introduction

This README outlines the backend aspects of the QR-Based Attendance System, a web application designed to simplify attendance tracking in educational institutions using QR code technology.

## 2. System Architecture

### 2.1 Frontend (HTML, CSS, JavaScript)
- The frontend is responsible for the user interface and interactions.
- It communicates with the backend via HTTP requests.

### 2.2 Backend (Node.js)
- The backend handles user authentication, class management, and attendance recording.
- It exposes APIs for frontend interactions and manages the database.

## 3. API Endpoints

### 3.1 Teacher Registration and Login API
- `/teacher/register` - Register a new teacher
- `/teacher/login` - Authenticate a teacher

### 3.2 Student Registration and Login API
- `/student/register` - Register a new student
- `/student/login` - Authenticate a student

### 3.3 Get Student Details API
- `/student/details` - Retrieve student details

### 3.4 Get Teacher Details API
- `/teacher/details` - Retrieve teacher details

### 3.5 Generate QR Code API
- `/generate-qr-code` - Generate a QR code for a class session

### 3.6 Set QR Limit Functionality
- Set a limit for QR code usage per session

### 3.7 Scan QR API
- `/scan-qr` - Record student attendance by scanning the QR code
- Store student IDs into the attended session list

