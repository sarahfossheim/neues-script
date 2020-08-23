# Neues Script

## What you have

- A simple static site generator with [Eleventy](https://11ty.io)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8080](http://localhost:8080)
4. `npm run build` to build to production locally

## How to make changes
1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) this repository
2. In terminal, [navigate](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html) to this project's folder
3. Run `npm install` in the project folder
4. Run `npm run dev` in the project folder
   - Sanity can be accessed on [http://localhost:3333](http://localhost:3333)
   - The front-end can be viewed on [http://localhost:8080](http://localhost:8080)
5. Code changes to Sanity can be made in the `studio` folder
6. Changes to the front-end code can be made in the `web` folder
7. When changes are made, make [commits and push](https://readwrite.com/2013/10/02/github-for-beginners-part-2/) them out
8. Create a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) for the changes
9. Approve and merge the pull request
10. Netlify will automatically rebuild the site and publish your changes, you can monitor the Netlify dashboard for updates

## Deploy changes

Netlify automatically deploys new changes commited to `main` on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Front-end file structure
- `_data`: fetches the data from Sanity
- `_includes`: templates for components and pages, also include the CSS
- `assets`: contains all the fonts
- Files containing HTML end with `.njk`.

### Animation
The animation of the front page can be found in `_includes/components`.
- `homeAnimation.njk`
- `homeAnimation.css`

Make sure to keep the following code at the end of `homeAnimation.njk` (it inserts the CSS file):
```
{% set css %}
    {% include "components/homeAnimation.css" %}
{% endset %}
<style>
    {{ css | cssmin | safe }}
</style>
```


## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
