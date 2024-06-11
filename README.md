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

### Add and Configure Module Federation

You will need to add the missing angular.json file to each app, before you can run the ng command.

Add and configure module federation with this command.

```ignorelang
ng add @angular-architects/module-federation --project xxx-mf-host --port 4201
```

You will need to answer a series of prompts.

```ignorelang
The package @angular-architects/module-federation@18.0.2 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Port to use 4201

WARNING: This package uses the tradtional webpack-based Module Federation implementation and not the fast new esbuild-based ApplicationBuilder.

For new projects, consider Native Federation as an alternative: https://shorturl.at/0ZQ0j

However, if you want to add a new host or remote to an existing Module Federation-based system, this package is what you are looking for.

Do you want to proceeed: [y] Yes [n] No  y
```

Repeat to install for each MFE app. Use a different port for each.

```ignorelang
cd ../apps/xxx-mf-common
```

```ignorelang
ng add @angular-architects/module-federation --project xxx-mf-common --port 4202
```

```ignorelang
cd ../apps/xxx-mf-about
```

```ignorelang
ng add @angular-architects/module-federation --project xxx-mf-about --port 4203
```
