# angular17-mfe

Example app for MFE Micro Front End using Angular 17

## Setup Log

## Create the folders needed for the Multi Repo

Create the root folder for the repo, which will contain multiple Angular apps.

We do not want a mono-repo, which will share the node_modules folder.

That is because each MFE should be stand-alone, and the build and deploy should be stand-alone.

```ignorelang
mkdir angular17-mfe
```

Create a packages folder to contain multiple angular apps.

```ignorelang
cd angular17-mfe
mkdir packages
cd packages
```

### Create the Host app

From the packages folder in the multi repo, use Angular Client to create the host app.

```ignorelang
ng new angular-mfe-host
```

Use these options.

```ignorelang
ng new angular-mfe-host
? Which stylesheet format would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
```

### Create the first MFE remote app

Start in a command terminal at the packages folder.

```ignorelang
cd packages
```

From the packages folder in the multi repo, use Angular Client to create the host app.

```ignorelang
ng new angular-mfe-remote-1
```

Use these options.

```ignorelang
ng new angular-mfe-remote-1
? Which stylesheet format would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
```

