# Xo for Angular

Connect your Angular App with WordPress when using the Xo for Angular plugin.

https://wordpress.org/plugins/xo-for-angular/

## Install the module

```
$ npm i angular-xo -D
```

## Import XoModule into your app

```
import { NgModule } from '@angular/core';
import { XoModule } from 'angular-xo';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        XoModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
