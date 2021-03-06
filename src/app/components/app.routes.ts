
import { Routes } from "@angular/router"; 
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';


export const ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'search', component: SearchComponent },
{ path: 'artist/:id ', component: ArtistaComponent },
{ path: '', pathMatch: 'full', redirectTo: 'home'},
{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

