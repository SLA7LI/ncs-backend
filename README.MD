# SALA7LI – A Smarter Way to Get Things Fixed

SALA7LI is a platform that connects clients with skilled service providers like plumbers, electricians, carpenters and more, using negociation driven experience. Whether you're facing a home emergency or planning maintenance work, SALA7LI makes it easy to find reliable help, fast and effective.

We aim to empower local workers with job opportunities and give clients full control over who they hire, how they negotiate, and when the job gets done.

---

## 📚 Table of Contents

- [📖 About](#About)
- [✨ Features](#Features)
- [🛠️ Tech Stack](#Tech-Stack)
- [⚙️ Installation](#Installation)
- [📡 API Documentation](#API-Documentation)

## About

SALA7LI is more than a marketplace, it's a  system that transforms how people request and deliver home and on-site services. Instead of fixed listings and static prices, we let every service request become a negotiation space ("lobby") where workers can bid and clients stay in control and in the end accept who will continiue with.



## Features

## • Worker Browsing & Filtering  
Clients can easily browse available workers and apply filters based on service category, location, and availability.

## • Smart Service Request Creation  
Clients can describe their problems using a simple form — or use our intelligent assistant (chatbot) to complete the process conversationally.

## • Bidding-Based Negotiation (Lobby System)  
Each service request becomes a negotiation space ("lobby") where selected workers place bids on the job. The client stays in full control of whom to hire.

## • Automatic Worker Invitation  
Upon submitting a request, the system automatically invites 3–10 relevant workers based on urgency, category, and proximity using a recommendation system.

## • Urgency-Aware Pricing  
Urgent requests can trigger higher starting prices or slightly increased platform fees to prioritize faster service.

## • Service Demand Heatmaps  
A visual heatmap highlights high-demand areas by location and service category, helping bring more workers.

## • Mutual Deposit System  
Both the client and the worker submit a small deposit to confirm their seriousness. Once the job is mutually confirmed as completed, the deposit is transferred to the worker (minus platform fees).

## • Worker Verification  
Workers are required to submit official documents (e.g., commercial registration) to unlock full access to job opportunities, enhancing platform trust.

## • AI-Powered Chatbot Assistant  
A built-in chatbot helps users navigate the platform, fill out forms, ask questions, and take action quickly.

## • Performance & Activity Tracking  
Workers’ profiles include statistics such as number of bids joined, job completion rates, client feedback, and response handling performance.

## • Dynamic Worker Resume Building  
The system helps workers build strong digital resumes by showcasing past lobbies, completed jobs, ratings, and history with clients.


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



