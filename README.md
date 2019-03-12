# circle-build-health

> A dashboard for the status of your builds in CircleCI

![screen-shot](./public/screen-shot.png)

## How to run

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?env[RAZZLE_USE_AUTH0]=false)

### Production
```
$ yarn install --production
$ yarn build
$ yarn start:prod
```

### Development
```
$ yarn install
$ yarn start
```

### Docker

See [DOCKER.md](DOCKER.md).

### Environment Variables

This project uses [razzle](https://github.com/jaredpalmer/razzle), which means it uses its [awesome tooling around .env files](https://github.com/jaredpalmer/razzle#what-other-env-files-are-can-be-used). Here's [the latest documentation](https://github.com/jaredpalmer/razzle#environment-variables) on the environment variables supported via razzle.

#### Required environment variables
**CIRCLE_CI_TOKEN** - a string that is used to talk to your personal circleci to get a list of projects you follow and see their build statuses.

**CIRCLE_ORG_NAME** - name of your organistation in circle
**HTTP_AUTH_USERNAME** - http auth username
**HTTP_AUTH_PASSWORD** - http auth password