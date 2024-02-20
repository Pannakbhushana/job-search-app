# Beekin-Job
Beekin-Job is your go-to job search app, streamlining the process of finding your ideal job. With smart filters and instant updates, discover tailored job listings effortlessly. Your future career starts here.

# Tech Stack
#### FrontEnd : React, Redux, Chakra Ui, Css, JavaScript
#### BackEnd: Node.js, Express.js, Mongodb, Mongoose, JavaScript

# FrontEnd
# Workflow Of the website
## Home Page
![Screenshot (154)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/2222d127-33ac-441a-b486-f10780ed1b62)



# Search Job
![Screenshot (155)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/a5c31448-9be5-468d-8209-ccc504cb79d7)



# Browse Jobs
![Screenshot (156)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/49915e41-a410-49a0-92e7-ddf57fd1597b)



# Single Product Page
![Screenshot (160)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/d1dde915-d033-47d4-895e-6bc4d5b8d3e3)

# Employer Page
### In this page Employer can post new jobs
![Screenshot (157)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/aa27ec88-0556-4d74-b63c-40a58b12abc4)


# Login Page

![Screenshot (158)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/0c343bf6-6566-43f2-9390-c2b8794f0ce6)

# SignUp Page
![Screenshot (159)](https://github.com/Pannakbhushana/job-search-app/assets/112654188/9c48df7a-f4c7-412a-8eac-fa2fab12d8ad)



# Back_End
## API Documentation
### Base URL : https://sapphire-elephant-vest.cyclic.app/
## User Authentication (/userauth)
### Register a User (POST /userauth/register)


Request: 
Body:
username: User's name (string)
email: User's email address (string)
password: User's password (string, minimum 6 characters)

Response:
Status: 201 Created
Body:
id: Unique user identifier (string)
name: User's name (string)
email: User's email address (string)

## User Login (POST /userauth/login)
### User login for registered jobseekers.

Request:
Body:
email: User's email address (string)
password: User's password (string, minimum 6 characters)

Response:
Status: 200 OK
Body:
token: JSON Web Token (JWT) for authentication (string)
Employer Authentication (/employerauth)

## Register an Employer (POST /employerauth/register)
### Registers a new employer for posting jobs.

Request:
Body:
email: Employer's email address (string)
password: Employer's password (string, minimum 6 characters)

Response:
Status: 201 Created
Body:
id: Unique employer identifier (string)
name: Employer's name (string)
email: Employer's email address (string)

## Employer Login (POST /employerauth/login)
### Employer login for posting jobs.

Status: 200 OK
Body:
token: JSON Web Token (JWT) for authentication (string)



## Job Operations (/job)
### Get All Jobs (GET /job)
Fetches all job listings.

Response:
Status: 200 OK
Body: Array of job objects
id: Unique job identifier (string)
title: Job title (string)
description: Job description (string)
company: Company name (string)
location: Job location (string)

## Post a Job (POST /job/add)
### Posts a new job listing by an employer.

Request:

Body:
title: Job title (string)
description: Job description (string)
company: Company name (string)
location: Job location (string)
Response:

Status: 201 Created
Body:
id: Unique job identifier (string)
title: Job title (string)
description: Job description (string)
company: Company name (string)
location: Job location (string)

## Update a Job (PATCH /job/update/:id)
### Updates details of a specific job listing.

Request:

URL Parameter:
id: Unique job identifier (string)
Body (any of the following):
title: New job title (string)
description: New job description (string)
company: New company name (string)
location: New job location (string)
Response:

Status: 200 OK
Body:
id: Unique job identifier (string)
title: Job title (string)
description: Job description (string)
company: Company name (string)
location: Job location (string)


## Delete a Job (DELETE /job/delete/:id)
### Deletes a specific job listing.

Request:

URL Parameter:
id: Unique job identifier (string)
Response:

Status: 204 No Content

## Search Jobs by Role (GET /job?role=role)
### Searches jobs based on the job role.

Request:

Query Parameter:
role: Job role keyword (string)
Response:

Status: 200 OK
Body: Array of job objects matching the role

## Paginated Job Listing (GET /job?page=:page&limit=limit)
### Fetches a paginated list of job listings.

Request:

Query Parameters:
page: Page number (integer)
limit: Number of items per page (integer)
Response:

Status: 200 OK
Body: Array of job objects for the specified page and limit
