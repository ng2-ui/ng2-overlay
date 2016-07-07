// Imports for loading & configuring the in-memory web api
import {provide, Type}    from '@angular/core';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { AppComponent }   from './app.component';

bootstrap(<Type>AppComponent, []);
