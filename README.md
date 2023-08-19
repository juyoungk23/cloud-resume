# [www.juyoungkim.dev](https://www.juyoungkim.dev)

Welcome to my personal project! Visit my live site at [www.juyoungkim.dev](https://www.juyoungkim.dev) to explore what I've been working on. Below, you'll find detailed information about the architecture, development process, and how you can run the project locally.

## About this Project

This is my Cloud Resume Challenge project. Here's a diagram that illustrates how different parts of the system interact with each other, along with a description of the technologies used.

![Cloud Resume Challenge Architecture Diagram](/frontend/static/diagram.svg)

## High Level Overview

This project incorporates several services offered by GCP. Combining a static frontend website with a highly-available and scalable backend, it demonstrates the essential capabilities of cloud technology.

## Run-Time Architecture

1. **Initial Traffic Routing**: When the client first visits www.juyoungkim.dev, the traffic is routed to a Global HTTPS Cloud Load Balancer.
2. **Visitor Count Retrieval**: The load balancer calls upon Cloud Run to retrieve the visitor count from Firestore.
3. **Serving the Webpage**: The load balancer sends the traffic to Cloud CDN, checking if the cached data is valid (resets every 10 minutes).
4. **Re-caching**: If re-caching is required, Cloud CDN fetches the new website from Google Cloud Storage.

## Dev-Time Architecture

Development involves the following:

1. **Code Mirroring**: New code is mirrored in the Cloud Source Repository.
2. **Cloud Build Triggers**: Frontend and backend triggers are activated for building and deployment.
3. **Storage and Deployment**: The frontend is stored in Google Cloud Storage, and the backend is deployed in Cloud Run.

## Key Tradeoffs

- **Simplicity vs Complexity**: A simpler architecture was possible but would lack security, availability, and scalability.
- **Increased Benefits**: Custom domain name, load balancer, CI/CD, etc., came with increased benefits in line with core principles of cloud computing.

## Next Steps

- **Exploration of Kubernetes**: Swapping Cloud Run with Google Kubernetes Engine.
- **Usage of Terraform**: Programmatic setup in an entirely new Google Cloud project.

## Lessons Learned

- **Hands-on Experience**: Opportunity to learn new technologies, CI/CD, and instant live updates.

## Technologies Used

- Frontend: SvelteKit, HTML, CSS, JavaScript
- Storage: Google Cloud Storage (GCS), Firestore (NoSQL database)
- Compute, Networking, Source Control, CI/CD, Process/Methodology, Communication, Personal Skills

## Running Locally

To run this project locally, you'll need to have pnpm and Vite installed. Follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `pnpm install` to install dependencies.
4. Run `pnpm run dev` to start the development server.
5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

Enjoy exploring the code!

---

<p style="font-size: 1.125rem; line-height: 1.75rem; margin: 1.5rem 0;">Note: Additional styles and effects can be applied as found in the original HTML description.</p>
