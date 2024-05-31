# Basic Todo App

This is a simple Todo application built with Next.js, TypeScript, and Prisma. It allows users to create, update, and delete todos.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)

## Features

- Create a new todo
- Update an existing todo
- Delete a todo

## Project Structure

- `app/(dashboard)/layout.js`: Contains the layout for the dashboard.
- `app/layout.js`: Contains the main layout for the app.
- `app/docs/[[...id]]/page.js`: Handles the dynamic routing for the documentation pages.
- `NewTodoForm.tsx`: This component renders the form for creating a new todo.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`

## Database Setup

This project uses Prisma as the ORM. To set up your database:

1. Update the `DATABASE_URL` in the `.env` file with your Postgres database credentials.
2. Run `npx prisma migrate dev` to run the migrations and generate the Prisma Client.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
