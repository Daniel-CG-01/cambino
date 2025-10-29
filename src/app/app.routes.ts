import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Landing } from './components/landing/landing';
import { Ejercicio01Clase } from './components/ejercicio01clase/ejercicio01clase';
import { SaludoEnrutado } from './components/saludoenrutado/saludoenrutado';
import { Rxjscomponent } from './components/rxjscomponent/rxjscomponent';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'landing', component: Landing},
    {path: 'ejer01', component: Ejercicio01Clase},
    {path: 'saludoenrutado', component: SaludoEnrutado},
    {path: 'saludoenrutado/:nombre', component: SaludoEnrutado},
    {path: 'rx', component: Rxjscomponent}
];
