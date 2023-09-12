# CRUD Operations for User Management API - [https://google.com](https://google.com)

This document outlines the standard format for requests and responses for CRUD operations to manage user data with a "name" attribute.

## Base URL

The base URL for all API endpoints is: [https://google.com](https://google.com)

## Endpoints

This explains the site

### 1. Create a New User

#### Request

- **Endpoint:** `/`
- **HTTP Method:** POST
- **Url**: [https://google.com](https://google.com)

- **Request Body:**

  ```json
  {
    "name": "John Doe"
  }
  ```

#### Response

- **HTTP Status Codes**:

  - 200 Created: User successfully created
  - 400 Bad Request: Input validation failed
  - 500 Server Error: Internal server error

- **Response Body**

  - On success:

    ```json
    {
      "id": "12345",
      "name": "John Doe"
    }
    ```

  - On input validation fail:

    ```json
    {
      "error": "Only String is accepted."
    }
    ```

  - Other failures:

    ```json
    {
      "error": "Internal server error."
    }
    ```

### Fetch single user

### 2. Read User Data

#### Request

- **Endpoint:** `/{userId}`
- **HTTP Method:** GET
- **Url**: [https://google.com](https://google.com)

  #### Response

- **HTTP Status Codes**:

  - 200 OK: Users' Fetched Successfully
  - 404 Bad Request:Usert Does Not Exist
  - 500 Server Error: Internal server error

  - on success:

    ```json
    {
      "id": "12345",
      "name": "Mark Brown"
    }
    ```

- on failure(if user is not found)

      ```json
      {
        "message": "Usert Does Not Exist"
      }
      ```

- Other failures:

        ```json
        {
          "error": "Internal server error."
        }
        ```

`UPDATE USER`

### 3. Update User Data

#### Request

- **Endpoint:** `/{userId}`
- **HTTP Method:** PUT
- **Url**: [https://google.com](https://google.com)

- **Request Body:**

- Request Body:

  ```json
  {
    "name": "Jane Jackie"
  }
  ```

### Response

- **HTTP Status Codes**:

  - 200 Created: User successfully created
  - 400 Bad Request: Input validation failed
  - 500 Server Error: Internal server error

    - On input validation fail:

      ```json
      {
        "error": "Only String is accepted."
      }
      ```

  - on failure(if user is not found)

    ```json
    {
      "message": "User Does Not Exist"
    }
    ```

  - on success:

    ```json
      {
          "message" : "Jane Jackie Updated Successfully"
          "updatedUser":{
          "id": "12345",
          "name": "Jane Jackie",
          }
      }

    ```

  - on Other failure:
    ```json
    {
      "error": "Internal server error."
    }
    ```

` DELETE USER`

### 4. Delete User

- **Endpoint:** `/{userId}`
- **HTTP Method:** DELETE
- **Url**: [https://google.com](https://google.com)

### Response

- **HTTP Status Codes**:

- 200 OK: ' User Deleted Successfully
- 404 No Found: User Not Found
- 500 Server Error: Internal server error

  - on failure(if user is not found)

    ```json
    {
      "message": "User Does Not Exist"
    }
    ```

  - on success:

    ```json
    {
      "message": "User Deleted Successfully"
    }
    ```

  - on Other failure:

    ```json
    {
      "error": "Internal server error."
    }
    ```

# API Setup and Deployment Guide

This guide provides step-by-step instructions for setting up and deploying the API locally for development or on a server for production use.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)

## Local Development Setup

Follow these steps to set up the API for local development:

1. **Clone the Repository**

   Clone the API repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

### 1. Install Dependencies

Install the required Node.js dependencies using npm:

- npm install

### 2. Configuration

- Create a `.env` file in the project root and configure environment-specific variables there.

### 3. Start the API

Start the API locally using the following command:

- npm start

## Deployment to a Server

Below are guides to host the `API` to a server

### 1. Choose a Hosting Provider

Select a hosting provider for your API. Common options include AWS, Heroku, DigitalOcean,
cyclic, render or any other provider of your choice and follow systematically their hosting guides.

### 2. Configure Server

Set up your server environment(those .env variables in your local machine)

### 3.Test The API

Copy the provided link and test it to know whether it's working as expected
