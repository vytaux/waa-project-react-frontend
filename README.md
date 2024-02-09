# CS 545 - Web Application Architecture


## Meet "The A Team"! 🚀

- Vytautas Asmantavicius
- Tanzim Islam Chowdhury
- Aakarshan Simkhada
- Basanta Shrestha
- Sanjeev Thapa



## NextHome | #1 Real Estate Platform in the World! 🌎

## Project Overview

Welcome to our CS 545 project! This is not just another property management system. This is **NextHome**, the ultimate real estate platform that connects property owners, customers, and administrators in a seamless and secure way. Whether you want to buy, sell, or rent a property, NextHome is the place to be.

We built this project using Spring Boot for the backend and React for the frontend. Along the way, we learned a lot about web application architecture, such as RESTful APIs, MVC pattern, dependency injection, and more. We also used some of the most popular and powerful technologies in the industry, such as JWT, PostgreSQL, and Docker.


## Technologies Used

- **Frontend:** React - [Frontend Repository](https://github.com/vytaux/waa-project-react-frontend)
- **Backend:** Spring Boot - [Backend Repository](https://github.com/vytaux/waa-project-spring-backend)
- **Security:** JWT for access control
- **Database:** PostgreSQL
- **Containerization:** Docker

## Project Features

### For Administrators
- Dashboard for administrative tasks.
- Approval system for property owner registrations.

### For Property Owners
- Registration as an owner.
- Property management (CRUD).
- Maintenance of property offers:
    - Rejection of offers if not accepted by owner.
    - Status change to 'contingent' upon acceptance from both parties.
    - Receipt of messages from customers.
    - Contingency cancellation.
    - List maintenance of placed offers.

### For Customers
- Registration as a customer.
- Offer history checking.
- Maintenance of current offers.
- Offer placement with status change to 'pending' upon acceptance.
- Sending messages to property owners.
- Maintenance of saved list.

### General Features
- Login/Logout.
- Security with JWT.
- Email notifications offer placement and acceptance.
- Technical aspects: Neat code organization, managed packages, folders, and files.

## Project Setup and Installation

### Prerequisites
- Java JDK 17 or newer
- Node.js and npm
- Docker

### Backend Setup
```
docker-compose up -d
./mvnw clean install spring-boot:run
```

### Frontend Setup
- Install dependencies: `npm install`
- Start the React application: `npm start`
- Access the application at `http://localhost:3000`
