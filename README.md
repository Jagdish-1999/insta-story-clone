## Getting Started

First, install all the dependencies by running these commands:

```bash
yarn install
#or
npm install
```

//Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [https://insta-story-clone-five.vercel.app/](https://insta-story-clone-five.vercel.app/) with your browser to see the result.

This is clone of simple instagram stories

Used Tech :

1. Next.js
2. Typescript
3. React.js
4. Cypress.
5. Next.js api routes to write backend api.
6. Sass to style components

Features -

7. User List is fetched from api. (path for api route is: /app/api/user-list/)
8. When user click any user profile it will open an new page on it with full image view.
9. This image will be visible a certain amount of time (for now the time is 5 sec hard-coded).
10. After 5 second next slide will be moved and next image will be visible.
11. User can move next slide by clicking half right portion of viewport
12. When user click on left side of viewport it will move to prev image slide
13. And when user click on right side of viewport it will move to next image slide
14. If user reach to last slide it will close the full screen page of story and user list will be visible again
15. User manually can close the full screen story window by clicking cross icon on the page.

//Test cases in cypress:

9. Integrate cypress to write test cases.
10. Run command: <yarn cypress open> to run test-cases
11. E2E test cases are there in the code to test flow of the feature.
12. To test full screen story test cases you need to click on any user when test cases are in loading state it will pass all the test cases.
13. This is only for mobile view not for desktop view

@TODO

1. Need to do image optimization
