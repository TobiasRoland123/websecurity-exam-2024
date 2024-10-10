# websecurity-exam-2024

Meningen med eksamen er ikke at bygge den mest sikre app, men handler om at bygge en app hvor vi er beviste om hvilke security issues vi tager hånd om og hvordan vi har gjort det i koden.

# Techstack

## Frontend:

- plain vanilla html, css, js and tailwind css

## Backend:

- express.js

## Database:

- SQLlite

# Projekt krav:

- Your project source codeshould be documented.(Commets in your code.)
- Multilevel (privileges) login with backend authentication.
- New user registration.
- Data stored in cookie or other form (localStorage etc.)
- A list of items created by users, with option for setting visible private/public. Admin can see everything.
- Some items have a function for adding data, like adding a comment to an item or similar.
- File upload (images), a kind of profile picture might be an idea.

## Vores applikation som minimum være sikret mod:

- SQLinjection,and command injection.
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- XML External Entity (XXE) and serialization/injection.(See slideshow 9.)
- Client side manipulation.(So not trusting the client side, you must haveserver side validation.)You are not expected to produce a mature and production quality implementation that can compete with existing frameworks.
  You areexpected to be able to insert session ID, and CSRF Tokensin the right places. If you know of limitations in your product, discuss thisin your report.

## Recommendations

You should consider the following:

- Firewall –enable and configure the firewall on the server.
- Use of Transport Layer Security (TLS)
- Use of encryption and hashing.(Hashing passwords in the user DB table.)-
- Configuration settings for your project, if using PHP php.ini, if using Nginx nginx.conf etc.

## Deployment

Feel free to deploy on a virtual server somewhere, and configure the server as you like:•Users, Apache, PHP,...

- Have a development environment.
- Maybeuse a repository.(For source control.)
- Make sure you have a running copy on your machine, so you can demoit at theexam.
  Deploy the application to a server of your choice.Example: Amazon, digitalocean, ...Hint: Using a real name and deployingon a server will allow you to use tools like Mozilla Observatory for checking settings
