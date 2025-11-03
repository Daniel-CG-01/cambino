import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Landing } from './components/landing/landing';
import { Ejercicio01Clase } from './components/ejercicio01clase/ejercicio01clase';
import { SaludoEnrutado } from './components/saludoenrutado/saludoenrutado';
import { Rxjscomponent } from './components/rxjscomponent/rxjscomponent';
import { PadreComponent } from './components/padre/padre';
import { PostListComponent } from './components/post-list/post-list';
import { UsuarioComponent } from './components/usuario/usuario';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'landing', component: Landing},
    {path: 'ejer01', component: Ejercicio01Clase},
    {path: 'saludoenrutado', component: SaludoEnrutado},
    {path: 'saludoenrutado/:nombre', component: SaludoEnrutado},
    {path: 'rx', component: Rxjscomponent},
    {path: 'padre', component: PadreComponent},
    {path: 'post', component: PostListComponent},
    {path: 'usuario', component: UsuarioComponent}
];