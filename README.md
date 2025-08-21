# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Github Link](https://your-solution-url.com)
- Live Site URL: [Vercel Link](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Vanilla CSS (custom properties, flexbox, and grid)
- Mobile-first workflow
- [React](https://reactjs.org/)
- TypeScript for type safety
- Context API for global state management

### What I learned

This project helped my understanding of:

- Using **React Context API** to manage cart state globally
- Creating reusable React components (like the Navbar, product gallery, and cart)
- Handling **responsive layouts** with CSS flexbox and grid
- Managing images dynamically (thumbnails → main image switching)
- Implementing cart logic (add, remove, update quantities)

Here’s a small snippet I’m proud of:

```tsx
const addToCart = (item: CartItem) => {
  setCart((prev) => {
    const existing = prev.find((p) => p.id === item.id);
    if (existing) {
      return prev.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
      );
    }
    return [...prev, item];
  });
};

```
## Continued Development

In future projects, I want to:

- Improve accessibility (ARIA roles for modals/lightbox and keyboard navigation)

- Add animations for cart updates and gallery transitions.

- Connect the cart logic to a backend API for persistence.

## Useful Resources

React Docs
 - For React concepts and hooks.

CSS Tricks Flexbox Guide
 - Helped with responsive layouts.

MDN Web Docs
 - Great reference for both CSS and JS.

## Author

Frontend Mentor - @Angelina Onuoha
Twitter - @Angelina Onuoha

## Acknowledgments

A very Big thanks to Mr Setemi my instructor for providing the challenge.