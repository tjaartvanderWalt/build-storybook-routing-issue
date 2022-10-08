# Storybook published build not working as expected

Running `yarn build-storybook` builds storybook, but when viewing the output in the browser the routing does not work.
When clicking on a story in the side nav the story does not load

Steps To build the project

- `yarn`
- `yarn build-storybook`
- `npx http-server ./storybook-static`

Observe that the routing does not work as expected.

