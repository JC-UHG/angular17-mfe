# angular17-mfe

Example app for MFE Micro Front End using Angular 17

## References

Following this video by Jack Herrington.

Angular Module Federation Micro-FE Speed Run

https://www.youtube.com/watch?v=EzJF0IUoYhQ

His code on github is here:

https://github.com/jherr/ang-pokemon-mfe

He is following an article in Medium.

Micro Frontends in Angular using Nx and Module Federation

https://gabrielemilan.dev/micro-frontends-in-angular-using-nx-and-module-federation-a30c5a2c1354

But he will split by component instead of by route.

He uses NX to generate the apps.


## Setup Log

### Install NX

Install NX globally.

```ignorelang
npm i -g nx
```

### Create the folders needed for the Multi Repo

Create the root folder for the repo, which will contain multiple Angular apps.

We do not want a mono-repo, which will share the node_modules folder.

That is because each MFE should be stand-alone, and the build and deploy should be stand-alone.

```ignorelang
mkdir angular17-mfe
```

Create a folder to contain multiple angular apps.

```ignorelang
cd angular17-mfe
mkdir apps
cd apps
```

### Create the host MFE app

In a terminal window, from the apps folder, create the host mfe app using nx.

```ignorelang
npx create-nx-workspace@latest xxx-mf-host
```

Use these options.

```ignorelang
 Which stack do you want to use? · angular
✔ Integrated monorepo, or standalone project? · standalone
✔ Which bundler would you like to use? · webpack
✔ Default stylesheet format · scss
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No
✔ Test runner to use for end to end (E2E) tests · none
✔ Set up CI with caching, distribution and test deflaking · skip
✔ Would you like remote caching to make your build faster? · skip
```

### Create the remote MFE apps

Create 2 more apps in the same way. These will be remote MFE apps.

```ignorelang
xxx-mf-common - shared components like header or footer
xxx-mf-about - about page
```
