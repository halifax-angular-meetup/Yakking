import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';
@NgModule({
  // The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent,
    PostComponent,
    AppHighlightDirective
  ],
  // other modules you might want to import here
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // here you add your services
  providers: [],
  // bootstrap tells Angular which component to load by default (entry component)
  // the root component that Angular creates and inserts into the index.html host web page
  bootstrap: [AppComponent]
})
export class AppModule { }
