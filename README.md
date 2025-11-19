# Fit Bunny

Fit Bunny is a small project I made to get familiar with building REST APIs in Rust using the Actix Web framework.

## Overview

This project is a dummy app designed to experiment with full-stack development using Rust and modern web technologies. It combines:

- **Backend:**  Rust with [Actix Web](https://actix.rs/) for REST API endpoints, CORS handling, Cookies and JWT geneartion and validation.
- **Database:** Supabase (PostgreSQL) as a database.
- **Frontend:** SvelteKit for the website.
- **Security**  All info such as API keys are all stored in .env so you will have to generate your own. when planning to use this project.
## Features

- **JWT Authentication:**  
  Uses JSON Web Tokens (JWTs) to authenticate users, generating cookies to maintain sessions for a seamless user experience across pages and future visits.
  
- **Full-Stack Integration:**  
  Demonstrates how a Rust backend can interact with a PostgreSQL database and a modern frontend framework like Svelte.

- **REST API Endpoints:**  
  Provides a set of API endpoints for CRUD operations and user authentication.

- **Session Management:**  
  Cookies and JWTs work together to ensure secure and persistent sessions.
