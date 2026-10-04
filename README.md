<img width="1432" height="789" alt="Screenshot 2026-10-04 at 7 57 21 PM" src="https://github.com/user-attachments/assets/35f72370-8311-4394-8772-738f24eae340" /># MERN E-Commerce Website

A full-stack e-commerce app with product browsing, cart, orders, JWT authentication with role-based access, OTP email verification, and Razorpay payments.

**Live Demo:** https://reactmain-tau.vercel.app

## Try it quickly

**Demo login (no signup needed)**
- Email: `admin@gmail.com`
- Password: `123`

**Test payment (Razorpay test mode, no real money is charged)**
- Card: `5267 3181 8797 5449`, any future expiry, any CVV
- On the sample payment page, enter any 4-10 digit OTP to succeed
- use date -  12/30 & CVV - 123 and the skip otp and enter OTP - 1234 and continue

## Good to know

- **Signup OTP:** The OTP email uses Resend's free tier, which only delivers to verified addresses. New signups from other emails won't receive an OTP, so please use the demo login above. With a verified domain, it would work for everyone.
- **First load:** The backend is hosted on Render's free tier and may take up to a minute to wake up. Please wait and refresh if the first request is slow.

## Tech Stack

React.js, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Razorpay, Vercel, Render

## Features

- Product browsing, cart management, and order placement
- JWT authentication with role-based access for users and admins
- OTP-based email verification and bcrypt password hashing
- Razorpay payment integration with HMAC-SHA256 signature verification

