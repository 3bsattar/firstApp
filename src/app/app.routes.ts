import { Component } from '@angular/core';

import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';

export const routes: Routes = [
    {path:'',component:Home },
    {path:'home',component:Home,title:"Home"},
    {path:"about" , component:About ,title:"About"},
    {path:'portfolio',component:Portfolio, title:"Portfolio"},
    {path:'contact',component:Contact,title:"Contact"},
    {path:'**',component:NotFound}
];
