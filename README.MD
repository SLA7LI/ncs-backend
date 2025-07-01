# SALA7LI – A Smarter Way to Get Things Fixed

SALA7LI is a platform that connects clients with skilled service providers like plumbers, electricians, carpenters and more, using negociation driven experience. Whether you're facing a home emergency or planning maintenance work, SALA7LI makes it easy to find reliable help, fast and effective.

We aim to empower local workers with job opportunities and give clients full control over who they hire, how they negotiate, and when the job gets done.

---

## 📚 Table of Contents

- [📖 About](#-about)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [⚙️ Installation](#️-installation)
- [📡 API Documentation](#-api-documentation)

## About

SALA7LI is more than a marketplace, it's a  system that transforms how people request and deliver home and on-site services. Instead of fixed listings and static prices, we let every service request become a negotiation space ("lobby") where workers can bid and clients stay in control and in the end accept who will continiue with.



## Features
### • Worker Browsing & Filtering
Clients can browse available service providers and apply filters based on:
- Service category  
- Geographic location  
- Availability  

### • Smart Service Request Creation
Clients can:
- Describe their service need through a simple form  
- Or use our AI-powered chatbot assistant to fill out the request conversationally  

### • Bidding-Based Negotiation (Lobby System)
Each request becomes a **lobby**, a negotiation space where:
- Invited workers bid with their prices  
- Clients stay in control and choose the worker that fits best  

### • Automatic Worker Invitation
Once a request is submitted:
- The system invites **3–10 workers** automatically  
- Selection is based on urgency, category, and proximity using a recommendation system  

### • Urgency-Aware Pricing
- Urgent service requests can trigger higher initial prices  
- A slightly higher platform fee may apply to prioritize faster responses  

### • Service Demand Heatmaps
- Real-time heatmaps display **high-demand areas** by location and service type  
- Helps attract more workers to areas with client needs  

### • Mutual Deposit System
- Both the client and the worker submit a small **deposit** to confirm commitment  
- After mutual job confirmation, the deposit is released to the worker (minus platform fees)  

### • Worker Verification
- Workers must upload **official documents** (e.g., commercial registration)  
- Unlocks full access to job opportunities and increases trust  

### • AI-Powered Chatbot Assistant
- Users are guided through the platform by a built-in chatbot  
- Supports service request creation, FAQs, and platform actions  

### • Performance & Activity Tracking
- Worker profiles include detailed analytics:
  - Number of bids participated in  
  - Job success rates  
  - Feedback and handling performance  

### • Dynamic Worker Resume Building
- Workers can showcase:
  - Completed jobs  
  - Previous client lobbies  
  - Ratings and history  
- Builds a powerful digital reputation on the platform  

## Tech Stack
| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React Native, React.js            |
| Backend     | Node.js, Express.js, go Lang      |
| Database    | Mysql                             |                        
| Deployment  | Vercel / Render / Railway         |
| Auth        | JWT, bcrypt                       |

## Installation
```bash
git clone https://github.com/SLA7LI/ncs-backend.git
cd ncs-backend
docker-composer up -d --build

```

## API Documentation


This document outlines the main API endpoints for both the Node.js (Express) and Go (Chi) services in this repository.

---

## Node.js Backend API (`/api/v1/`)

### Authentication Routes (`/api/v1/auth`)
| Method | Endpoint               | Description                        |
|--------|------------------------|------------------------------------|
| POST   | /registerasworker      | Register a new worker account      |
| POST   | /registerasclient      | Register a new client account      |
| POST   | /login                 | Login as worker or client          |
| GET    | /getWorkers            | Get all workers                    |
| GET    | /getprofile            | Get profile of current user        |

---

### Service Requests Routes (`/api/v1/servicerequests`)
| Method | Endpoint                     | Description                                              | Auth Required |
|--------|------------------------------|----------------------------------------------------------|--------------|
| GET    | /getlobbies                  | Get all open lobbies                                     | No           |
| POST   | /create                      | Create a new service request (client only)               | Yes          |
| GET    | /worker                      | List service requests assigned to worker                 | Yes          |
| GET    | /client                      | List service requests made by a client                   | Yes          |
| GET    | /:id                         | Get details of a specific service request by ID          | Yes          |
| GET    | /                            | List all service requests                                | Yes          |
| POST   | /invite                      | Invite a worker to a service request                     | Yes          |
| POST   | /joinbidding                 | Worker joins a service request bidding                   | Yes          |
| POST   | /leave                       | Leave a service request                                  | Yes          |
| POST   | /acceptworker                | Accept a worker to a service request (client only)       | Yes          |
| POST   | /markasdone                  | Mark a service request as done                           | Yes          |
| POST   | /placebid                    | Place a bid on a service request                         | Yes          |

---

### Kafka Payment Routes (`/api/v1/kafka`)
| Method | Endpoint           | Description                                 |
|--------|--------------------|---------------------------------------------|
| POST   | /create-escrow     | Create an escrow (asynchronous via Kafka)   |
| POST   | /pay-worker        | Trigger payment to worker (Kafka)           |

---

## Go Backend API

### Notification Routes (`/notifs`)
| Method | Endpoint                    | Description                       |
|--------|-----------------------------|-----------------------------------|
| POST   | /notifs/createnotif         | Create a new notification         |
| GET    | /notifs/getunreadusernotif/{id} | Get unread notifications for user |
| PUT    | /notifs/updatereadable/{id} | Mark user notification as read    |

### Payment Routes (`/payment`)
| Method | Endpoint                    | Description                                 |
|--------|-----------------------------|---------------------------------------------|
| POST   | /payment/payoutoworker/{id} | Trigger payout to worker for an escrow      |



