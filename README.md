### Hii! Welcome to the post app, here we will search for some post and play around.

- We have used `lerna` as our package manager and `npm` for managing modules in individual packages/apps.

- If you don't have lerna you can install it using the following command.

### install lerna : `npm i -g lerna`

### install all project dependencies ` lerna bootstrap`

** **

> Lets run both of our packages, both are necessary for app to function correctly.

1. Post Server
```
> cd packages/post-server

> npm run start
```

2. Post Client
```
> cd packages/post-client

> npm run start
```

### You can check out UI on `post.localhost:4700`


**  **
## Description about both packages.

**1. Post Service.**
- This is out backend application which is built on nestJS 7+.
- here we have REST-API exposed on `localhost:8800`, where `/api` is the global prefix.
- API has 2 endpoints.
    - `posts` this will give you a list of posts with pagination,you can pass in offset, limit and search as query parameters and search with regex matching on all fields of post. 
    - `posts/:id` this will give you a single post that matches with provided `id` or throw a `not found` error.
- API also has `swagger` due to which you can check all API endpoints and test it wihtout client as well, you can test swagger API on `localhost:8800/api-docs`.
- App passes `lint`, `format`, checks as well as `e2e` and `unit` tests.

**  **
**2. Post Client.**
- This is our frontend application which is built on angular 11, running on `post.localhost:4700`.
- We are using a proxy on our frontend application to query our backend service.
- Client has a 4 components and simple UI.
    - `Navigation component` is at app root and used for navigation among components.
    - `home component` is landing page where we a input field which accepts a ID and button to search the provided ID,
        - if ID not found it gives a message stating the same.
        - if ID found it will cache it on localstorage and redirect you to `Post Component`.
    - `Post Component` this component is lazy loaded on rout `posts`, hence 
    - `Listing Component` this component shows a list of all posts on the system with pagination, and on clicking any post you can open it in `Post Component`
- App passes `lint`, `format`, checks as well as `e2e` and `unit` tests.

