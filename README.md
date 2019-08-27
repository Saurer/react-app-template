This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.

## Table of Contents

-   [Questions? Feedback?](#questions-feedback)
-   [Folder Structure](#folder-structure)
-   [Available Scripts](#available-scripts)
    -   [yarn dev](#yarn-dev)
    -   [yarn build](#yarn-build)
    -   [yarn start](#yarn-start)
    -   [yarn export](#yarn-export)
    -   [yarn package](#yarn-package)
    -   [yarn release](#yarn-release)
    -   [yarn test](#yarn-test)
-   [Adding Components](#adding-components)
-   [Fetching Data](#fetching-data)
-   [Custom Server](#custom-server)
-   [Syntax Highlighting](#syntax-highlighting)
-   [Deploy to Now](#deploy-to-now)
-   [Something Missing?](#something-missing)

## Questions? Feedback?

Check out [Next.js FAQ & docs](https://github.com/zeit/next.js#faq) or [let us know](https://github.com/segmentio/create-next-app/issues) your feedback.

## Folder Structure

This project contains semantic structure of folders:

```
.
├── README.md
├── src
│   ├── app
│   │   ├── components
│   │   ├── containers
│   │   ├── modules
│   │   ├── pages
│   │   ├── static
│   │   └── next.config.js
│   └── electron
├── node_modules
│   ├── [...]
├── package.json
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./src/app/pages/index.js` maps to the `/` route and
`./src/app/pages/about.js` would map to `/about`.

The `./src/app/static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

-   Automatic transpilation and bundling (with webpack and babel)
-   Hot code reloading
-   Server rendering and indexing of `./src/app/pages`
-   Static file serving. `./src/app/static/` is mapped to `/static/`

Read more about [Next's Routing](https://github.com/zeit/next.js#routing)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `yarn build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.

### `yarn export`

Exports your application to serverless static assets. You can use it to serve with any provider of your choice (for e.g. Github Pages)

### `yarn start-desktop`

Starts the application in electron with development mode.

The page will reload if you make edits.

### `yarn package`

Packages your application using electron-builder

### `yarn release`

Packages your application using electron-builder to installation file. This mode will also sign the binary file if configured

### `yarn test`

Launches jest to perform unit testing of the project

## Adding Components

We recommend keeping React components in `./src/app/components` and they should look like:

### `./src/app/components/Simple.js`

```tsx
const Simple: React.SFC = () => <div>Simple Component</div>;

export default Simple; // don't forget to export default!
```

### `./src/app/components/Complex.js`

```tsx
import { Component } from 'react';

class Complex extends Component<{}, { text: string }> {
    state = {
        text: 'World'
    };

    render() {
        return <div>Hello {this.state.text}</div>;
    }
}

export default Complex; // don't forget to export default!
```

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./src/app/pages/stars.js`

```tsx
const Page: React.FC<{ stars: any }> = props => (
    <div>Next stars: {props.stars}</div>
);

Page.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    const stars = json.stargazers_count;
    return { stars };
};

export default Page;
```

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `Link` component or using the routing APIs.

_Note: `getInitialProps` can **not** be used in children components. Only in `pages`._

Read more about [fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)

## Custom Server

Want to start a new app with a custom server? Run `create-next-app --example customer-server custom-app`

Typically you start your next server with `next start`. It's possible, however, to start a server 100% programmatically in order to customize routes, use route patterns, etc

This example makes `/a` resolve to `./src/app/pages/b`, and `/b` resolve to `./src/app/pages/a`:

```ts
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === '/a') {
            app.render(req, res, '/b', query);
        } else if (pathname === '/b') {
            app.render(req, res, '/a', query);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(3000, err => {
        if (err) {
            throw err;
        }
        console.log('> Ready on http://localhost:3000');
    });
});
```

Then, change your `start` script to `NODE_ENV=production node server.js`.

Read more about [custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing)

## Syntax Highlighting

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Deploy to Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1.  Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2.  Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

You can find more details about [`now` here](https://zeit.co/now).

## Something Missing?

If you have ideas for how we could improve this readme or the project in general, [let us know](https://github.com/segmentio/create-next-app/issues) or [contribute some!](https://github.com/segmentio/create-next-app/edit/master/lib/templates/default/README.md)
