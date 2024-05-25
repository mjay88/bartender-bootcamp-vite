# Bartender Bootcamp Training App

When I was in management at the bar where I currently work I had the idea to make a custom website to help train new bartenders, and this is the completed version of that idea. The frontend is React built with vite, react-bootstrap and sass for styling and I used redux toolkit for state management. The sidebar is from a library called react-bootstrap-sidebar-menu which I re-configured for my needs. The server is built with node and express, and I am using MongoDb with Mongoose for the database. All of the images are served from Cloudinary. The site is authorized and authenticated using custom middleware, and I am using custom middleware for error handling as well.

## Features

- Users can register or log in
- Track course progress by clicking the completed check box at the bottom of each section
- Track users test scores
- Display users progress through the course
- Edit profile information

## Usage

- Create a MongoDB database and obtain your MongoDB URI - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a cloudinary account to get an API key and secret code

## Env Variables

Create a .env file and add the following:

##

        NODE_ENV = development
        PORT = 5000
        MONGO_URI = your mongodb uri
        JWT_SECRET = 'any jwt_secret will do'
        API_KEY='<cloudinary key'>
        API_SECRET='<cloudinary secret'>

## Install Dependencies (frontend and backend)

##

        npm install
        cd frontend
        npm install

## Run Locally

##

        npm run dev

## Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

##

        # Import data
        npm run data:import

        # Destroy data
        npm run data:destroy
