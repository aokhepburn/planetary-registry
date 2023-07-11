# Planetary Registry

![](./finished-project.png)

A long time ago in a galaxy far, far away you have been tasked with creating a software system to track all known planets and add any new ones you find. 

## Instructions

For this project, you’ll be building out a React application that displays a
list of planets, among other features.

Part of what this code challenge is testing is your ability to follow given
instructions. While you will definitely have a significant amount of freedom in
how you implement the features, be sure to carefully read the directions for
setting up the application.

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8085`.
3. In a new terminal, run `npm start`.

Make sure to open
[http://localhost:8085/planets](http://localhost:8085/planets) in the
browser to verify that your backend is working before you proceed!

If you are unfamiliar with HTML tables, take a look at the
[docs with an example here](https://www.w3schools.com/html/html_tables.asp)

## Endpoints

The base URL for your backend is: `http://localhost:8085`

## Core Deliverables

As a user, I should be able to:

- See a table of the planet names from the Star Wars universe.
- Fill out and submit the form to add a new planet. This should add the new planet to the table **as well as post the new planet to the backend API for persistence**.
- Filter planets by typing into the search bar. Only planets that have any field that matches the search term should be in the table.
