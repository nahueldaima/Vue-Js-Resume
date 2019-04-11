# Project Title

Build your own Resume on VueJS - Version 1.0.0

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project on its first version gets its data from a [Real Time Database on Firebase](https://firebase.google.com/products/realtime-database/). 
If you wish to setup your own data, you will have to:
 - Create a real time database with your account.
 - Set the read/write permits as:
```
"rules": {
    ".read": true,
    ".write": false
  }
```
 - Edit this template with your data and upload it to the database by importing as .json file.
```
{
    "data": {
        "courses": [
            {
                "certificationUrl": "",
                "imageUrl": "",
                "institution": "",
                "name": "",
                "order": 1
            }
        ],
        "formalEducation": [
            {
                "dateFrom": "",
                "dateTo": "",
                "institution": "",
                "order": 1,
                "title": ""
            }
        ],
        "hardSkills": [
            {
                "color": "#42b883",
                "name": "Skill 1",
                "value": 90
            },
            {
                "color": "#215732",
                "name": "Skill 2",
                "value": 90
            },
            {
                "color": "#589636",
                "name": "Skill 3",
                "value": 90
            },
            {
                "color": "#b52e31",
                "name": "Skill 4",
                "value": 90
            }
        ],
        "language": [
            {
                "name": "English",
                "value": 100
            },
            {
                "name": "Other Cool Language",
                "value": 100
            }
        ],
        "owner": {
            "address": "",
            "bio": "Here put your personal Bio Description",
            "cvUrl": "URL to your PDF CV",
            "email": "test@test.com",
            "full_name": "",
            "main_phone": "",
            "profilePicture": "URL TO YOUR PROFILE PICTURE",
            "title": "Short Job Title/Description"
        },
        "social": [
            {
                "icon": "fab fa-github",
                "url": "https://github.com/nahueldaima",
                "value": "GitHub"
            },
            {
                "icon": "fab fa-linkedin-in",
                "url": "https://linkedin.com/nahueldaima",
                "value": "LinkedIn"
            }
        ],
        "softSkills": [
            {
                "name": "Team Work",
                "value": 90
            },
            {
                "name": "Leadership",
                "value": 90
            },
            {
                "name": "Management",
                "value": 90
            },
            {
                "name": "Learning",
                "value": 90
            }
        ],
        "workExperience": [
            {
                "companyName": "",
                "companyWebSite": "",
                "dateFrom": "",
                "dateTo": "",
                "description": "",
                "order": 1,
                "role": ""
            }
        ]
    }
}
```
- Get your real time data base project URL. You will have to past it on a .env file as VUE_APP_DATABASE_URL.

### Installing

These are the instruction for preparring the dev enviroment

Clone this repository:

```
git clone https://github.com/nahueldaima/Vue-Js-Resume.git
```

Run the command

```
npm install package.json
```

If you don't have Vue CLI 3, then run:

```
npm install -g @vue/cli
```

To start the application run:

```
npm run serve
```

## Deployment

To host this application you will need some server or service that serve your files. 
In my personal Resume, Im ussing Innmotion Hosting, with a custom domain. But feel free to use whatever you want. 
For easy and quick launch you might want to use [S3 Amazon Buckets](https://aws.amazon.com/s3/) and configure it like in this [docs](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html).

In order to build your production app run:
```
npm run build
```
You will find a new 'dist' folder on your project folder. Inside of it you will find your app prepared to be upload as a website.
Upload the content to your hosting.

## Testing

This proyect has Unit testing implemented with Jest

In order to run the test do:
```
npm run test
```

## Built With

* [Vue CLI](https://cli.vuejs.org/) - The web framework used
* [Vuex](https://vuex.vuejs.org/) - State Management Library
* [Axios](https://github.com/axios/axios) - HTTP Promises Library
* [Babel](https://vuex.vuejs.org/) - State Management Library
* [Vue Router](https://router.vuejs.org/) - Routing

Vue CLI Pluggins:
* [Vuetify](https://www.npmjs.com/package/vue-cli-plugin-vuetify) - Material Design Component Framework
* [Babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel) - Material Design Component Framework
* [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) - Material Design Component Framework
* [unit-jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest) - Unit Test with Jest

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/nahueldaima/Vue-Js-Resume/releases). 

## Authors

* **Nahuel Daima** - *Vue Js Examples Portfolio* - [NahuelDaima](https://github.com/nahuel_daima)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
