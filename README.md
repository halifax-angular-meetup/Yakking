# AngularWorkshop

[STACKBLITZ LINKS](https://stackblitz.com/github/halifax-angular-meetup/Yakking/tree/post-feed)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Post Component html

``` html
<div class="card blue-grey darken-1">

  <div class="card-content white-text">
    <span class="card-title"></span>
    <div class="card-date"></div>
    <p></p>
  </div>

  <div class="card-action">
    <div class="action favorite">
      <i class="fa fa-star fa-2x" aria-hidden="true"> </i>
    </div>

    <div class="action comment">
      <i class="fa fa-comment fa-2x" aria-hidden="true"> </i>
    </div>

    <div class="action delete">
      <i class="fa fa-trash fa-2x" aria-hidden="true"> </i>
    </div>
  </div>
</div>
```