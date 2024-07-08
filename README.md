#  Food Ordering Website

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Running the Application](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Features Overview](#features-overview)
  - [User Authentication](#user-authentication)
  - [Shopping Cart](#shopping-cart)
  - [Payment Integration](#payment-integration)
  - [Order Management](#order-management)
  - [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)


# Overview
This project is a full stack food ordering application built using React JS, MongoDB, Express, Node JS and Tailwind CSS. 

It features a user-friendly frontend website, an admin panel for managing the application, and a robust backend server. Responsive Design Using TailwindCSS responsive utility variants to build adaptive user interfaces.
The app includes user authentication, shopping cart functionality, and integration with a payment gateway to facilitate online orders and payments.

# Features

#### User Authentication:
 Users can create an account, log in, and log out.
#### Shopping Cart:
 Users can add ,remove food items to their cart and place orders.
#### Order Management:
 Users can view their order status and history.
#### Admin Panel:
 Admins can manage food items, orders, and users.
#### Payment Integration:
 Secure online payments using the Esewa payment gateway.

# Tech Stack
**Frontend:** Vite + React JS, TailwindCSS

**Backend:** Node JS, Express

**Database:** MongoDB

**Payment  Gateway:** [Esewa](https://developer.esewa.com.np/pages/Epay#transactionflow)


# Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

1. Clone the repository:
   ```
    bash
    git clone <repository_url>

   ```

2. Navigate to the project directory:

   ```
   bash
   cd <project_directory>
   ```


3. Install the dependencies:

   ```
   bash
   npm install
   ```

4. Start the development server:
    ```
   bash
   npm start //npm run dev
   ```

The application should now be running on http://localhost:4000.


# Configuration
 1. **Backend Configuration:**

Create a .env file in the backend directory and add the following environment variables:

```
PORT=4000
MONGO_URL="you DB url"
JWT_SECRET = "you secret key here"

```

# Project Structure

**backend/:** Contains the backend code, including routes, controllers, middlewares, uploads and models.

**frontend/:** Contains the frontend code, including components(Header, Footer, Navbar, Food display), pages(Cart, Home, MyOrders, PlaceOrder, Verify), and Context.

**admin/:** Contains the admin panel code for managing the application.

# Features Overview

## User Authentication
**Sign Up:** Users can create a new account.

**Log In:** Users can log in with their credentials.

**Log Out:** Users can log out from their account.

## Shopping Cart
**Add to Cart:** Users can add food items to their shopping cart.

**Remove from Cart:** Users can remove items from their cart.

**View Cart:** Users can view the items in their cart.

**Place Order:** Users can place an order and proceed to payment.

## Payment Integration
**Esewa Payment Gateway:** Secure online payments using esewa.

**Order Confirmation:** Users receive order message upon successful payment.

## Order Management
**Order Status:** Users can view the status of their orders.

**Order History:** Users can view their past orders.

## Admin Panel
**Manage Food Items:** Admins can add, update, and delete food items.

**Manage Orders:** Admins can view and update order statuses.


# Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.

# Acknowledgements
- [React JS](https://react.dev/)

* [Node JS](https://nodejs.org/en)

- [Express](https://expressjs.com/)

- [MongoDB](https://www.mongodb.com/)

* [TailwindCSS](https://tailwindcss.com/docs/installation)

* [Esewa](https://developer.esewa.com.np/)