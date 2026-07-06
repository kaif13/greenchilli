# Green Chilli Restaurant

React/Vite website for Green Chilli Pizza & Fast Food.

## Run

```bash
npm install
npm run dev
```

## Menu Images

Menu item data is in `src/data/siteData.js`.

To change a menu image:

1. Put the new image in `public/menu`.
2. Use a JPG filename like `veg-roll.jpg`.
3. In `src/data/siteData.js`, change the item's `img: menuImg("veg-roll")` value to match the filename without `.jpg`.

Example: `public/menu/special-pizza.jpg` becomes `img: menuImg("special-pizza")`.

Gallery images work the same way, but they live in `public/gallery` and use `galleryImg("image-name")`.
