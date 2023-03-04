# phase-5-project-head-chef

## Description


**LINK:** https://github.com/ChristopherAPerez/phase-5-project-head-chef

**LIVE LINK:** https://youtu.be/4_MRikkPdV4

### Model:

![](client/src/images/project_model.jpeg)

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Twilio account

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Set Up a Twilio Account

You can sign up for a free account at
[https://dashboard.render.com/register][Render signup]. We recommend that you
sign up using GitHub as that will make it a little easier for you to connect
Render to your GitHub account. The instructions below assume you've done that.

[Render signup]: https://dashboard.render.com/register

Once you've completed the signup process, you will be taken to the Render
dashboard. In order to connect Render to your GitHub account, you'll need to
click the "New Web Service" button in the "Web Services" box. On the next page,
you will see a GitHub heading on the right side and below that a link labeled
"Connect account". (If you didn't sign up using GitHub, it will say "Connect
account" instead.) Click that link, then in the modal that appears click
"Install." You should then be taken back to the "Create a New Web Service" page,
which should now show a list of your GitHub repos. We won't actually create a
web service just yet so you are free to navigate away from the page at this
point.

## Resources

- [create-react-app][]
- [dbdiagram.io][]
- [Postman][postman download]
- [react-modal][]
- [react-chartjs-2][]
- [twilio][]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[create repo]: https://docs.github.com/en/get-started/quickstart/create-a-repo
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/
[react-modal]: https://www.npmjs.com/package/react-modal
[react-chartjs-2]: https://react-chartjs-2.js.org/
[twilio]: https://www.twilio.com/try-twilio