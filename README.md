HAIRY PODDER
This web application allows users to create, view, edit, and delete wizard characters through an interactiv interface. Each wizard has unique attributes and a unique details page. The app uses character management and dynamic routing.

GIF walkthrough:

<img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW81NWx3Y3ZlZHUyajNva3M3ZGF3d2QwZHBuMG94dHlmY2ZqNGJ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n7rCnftgWvY6X74XuW/giphy.gif' />
Tech used: HTML, CSS, JavaScript, React, Vite, Supabase
This project was built using React and Vite, with Supabase as the backend for storing wizard data. The app uses React Router for navigation between the create, summary, detail, and edit pages. Each wizard has a unique URL, and the summary view is sorted by creation time.

I implemented full CRUD functionality where users can create new wizards, view a live-updating list, edit attributes, and delete entries. Supabase handles all data persistence, and I used local state to manage form inputs and live updates across pages.

Lessons Learned:
One of the biggest challenges was connecting Supabase correctly with the frontend logic. It took some debugging to get the data flow working between the forms, the database, and the UI updates. Once that was set up, it was satisfying to see how real-time updates could work smoothly. I also learned how to structure a multi-page React app with detailed routing and how to manage updates across different views without full page reloads.
