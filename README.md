## Project Name

- **Project Name:** GigRapid - A Freelancing Platform.

## Key Features

1. **User Authentication:** Secure user registration and login system, including Google Sign-in, with error message handling for a seamless user experience.

2. **Homepage with Dynamic Tabs:** A dynamic homepage with tab-based job category browsing, powered by React-tabs. Users can view job titles, deadlines, price ranges, short descriptions, and bid on jobs.

3. **Job Posting and Management:** Users can add job listings with details such as title, deadline, description, category, and price range. The data is stored in MongoDB, and users can view and update their posted jobs with a user-specific interface.

4. **Bidding System:** After clicking on the "Bid now" button, users are redirected to a job details page to place their bids. The "Place your bid" form includes fields for bidding amount, deadline, and the bidder's email. Bidding is restricted for job owners.

5. **Bid Requests and Job Management:** Users can view bid requests made on their posted jobs in tabular format. Job owners can manage these requests by accepting or rejecting bids. A dynamic progress bar tracks the job status, with an optional dynamic progress bar package (react-step-progress-bar).

## Live Demo

Live Site: [GigRapid Live](https://gigrapid.web.app/).

Backend Code: [GigRapid Backend](https://github.com/ShafayetAhmad/GigRapid-server)

Technology Used: React, Tailwind, React Router, Express.js, Firebase, MongoDB, Firebase Authentication, Vercel.
