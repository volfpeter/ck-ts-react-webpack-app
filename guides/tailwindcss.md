# Tailwind CSS guide

This guide will walk you through the steps of adding Tailwind CSS to a project that was generated from this cookiecutter template.

Commands should be run in the root folder of your project.

## 1. Install additional dependencies

Install the dependencies that are necessary for using Tailwind CSS with this command: `npm install --save-dev tailwindcss postcss postcss-loader postcss-preset-env`.

## 2. Initialize Tailwind CSS

First run `npx tailwindcss init`, then open the created `tailwind.config.js` file and modify it like this:

```javascript
module.exports = {
    content: ["./src/**/*.{ts,tsx,js,jsx}", "./dist/*.html", "./src/*.html"],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

## 3. Create PostCSS config

Create a `postcss.config.js` file next to the `tailwind.config.js` with this content:

```javascript
const tailwindcss = require("tailwindcss")
module.exports = {
    plugins: ["postcss-preset-env", tailwindcss],
}
```

## 4. Add PostCSS loader to Webpack config

Update `module.rules` in `webpack.config.js` from this:

```javascript
    // Process .css files via the CSS loader
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
    },
```

to this:

```javascript
    // Process .css files via the CSS loader
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
    },
```

Notice the new, `"postcss-loader"` item in the list.

## 5. Include Tailwind CSS in the application

First you need to add a CSS file, e.g. `styles.css` into the `src` folder with this content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then you must import the created CSS file in `index.tsx` for Webpack to process it. If you named the CSS file `style.css`, then your import statement is:

```javascript
import "./style.css" // Tailwind CSS import through styles.css
import "./i18n"
import { Main } from "./Main"
```

## 6. Restart

Stop the Webpack dev server (the `npm run start` process) if it is running to make Webpack pick up your configuration changes and start it again.
