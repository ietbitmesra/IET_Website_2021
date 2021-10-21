<h2 align="center">
    <a href="https://iet-bitmesra.netlify.app">
        <img src="./static/favicon.ico" alt="IET Logo" width="80" height="60" />
    </a>
    <br />
    <a href="https://iet-bitmesra.netlify.app">
        iet-bitmesra.netlify.app
    </a>
</h2>

IET On Campus, BIT Mesra Official Website

# Table of contents

* [Installation and Setup](#installation-and-setup)
* [Adding New Team](#adding-new-team)
* [Deployment](#deployment)
* [Contributing](#contributing)

## Installation and Setup

* Fork the repository
* Clone and create your branch
* Open the project and run following commands for setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Adding New Team

* Create a directory in `assets` with format `team_<year>` to add member images.
* Create a `.js` file in `teamDetails` directory in `assets` with same name format as above and add the team details as:

```jsx
const team_<year> = {
    year: "start - end",
    members: [
        ...,
        {
            name: "",
            position: "",
            imagePath: "team_<year>/abc.jpg",
            facebookLink: "",
            linkedinLink: "",
            githubLink: "",
            instagramLink: "",
            emailAddress: ""
        },
        ...
    ]
};

export default team_<year>;
```

* Update `Team.vue` component with new team details.
* Add the new team to `previous-teams` page as well.

Refer previous code for more details.

## Deployment
Run build command with publish directory as `dist`.

```bash
# build command
npm run generate
```

## Contributing
Follow below steps to contribute:

* Fork the repository
* Create your branch 
* Commit changes
* Push to the branch
* Open a pull request

Refer [Nuxt.js documentation](https://nuxtjs.org) for more details.