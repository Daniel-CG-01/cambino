import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { concat, interval, merge, Observable, of, take } from 'rxjs';

class Persona {
  nombre: string = "";
  edad: number = 0;
}

@Component({
  selector: 'app-rxjscomponent',
  imports: [CommonModule],
  templateUrl: './rxjscomponent.html',
  styleUrl: './rxjscomponent.css',
  standalone: true
})

export class Rxjscomponent {

  listadoPersonas: Persona[] = [ // PROHIBIDO USAR COMO TIPO DE LA FUNCIÓN 'ANY[]'
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Luis', edad: 34 },
    { nombre: 'María', edad: 22 },
    { nombre: 'Carlos', edad: 45 },
    { nombre: 'Lucía', edad: 30 }
  ];

  nombres$: Observable<Persona[]> = of(this.listadoPersonas);

  ejemplo01() {
    console.log('Ejecutando ejemplo 01 de RxJs');
    this.nombres$.subscribe({
      next: (personas: Persona[]) => {
        console.log('Lista de personas recibidas:');
        personas.forEach((persona: Persona) => {
          console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
        });
      },
      error: (err) => console.error('Error al recibir la lista de personas:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }

  nombre$: Observable<Persona> = of(this.listadoPersonas[0]);

  ejemplo02() {
    console.log('Ejecutando ejemplo 02 de RxJs');
    this.nombre$.subscribe({
      next: (persona: Persona) => {
        console.log('Persona recibida:');
        console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
      },
      error: (err) => console.error('Error al recibir la persona:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }

  // Número aleatorio entre 1 y 100
  numero$: Observable<number> = of(Math.floor(Math.random() * 100) + 1);

  ejemplo03() {
    console.log('Ejecutando ejemplo 03 de RxJs');
    this.numero$.subscribe({
      next: (num: number) => {
        console.log('Número recibido: ' + num);
      },
      error: (err) => console.error('Error al recibir el número:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }

  ejemplo04() {
    console.log('Ejecutando ejemplo 04 de RxJs: EMISIÓN POR ORDEN');
    // ACABAR
  }

  ejemplo05() {
    console.log('Ejecutando ejemplo 05 de RxJs: EMISIÓN DE STRINGS');

    // Observable
    const contador$ =  new Observable<number>((observer) => {
      let count = 1;
      const interval = setInterval(() => {
        observer.next(count);
        count++;
        if (count > 7) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });

    // Suscripción
    contador$.subscribe({
      next: (numero) => {
        console.log('Número recibido: ' + numero);
      },
      error: (err) => console.error('Error al recibir el número:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }

  ejemplo06() {
    console.log('Ejecutando ejemplo 06 de RxJs: EMISIÓN DE STRINGS');

    // Observable
    const palabras = new Observable<string>((observer) => {
      observer.next('Hola');
      observer.next('¿Qué');
      observer.next('tal?');
      observer.next('Soy');
      observer.next('Daniel');
      observer.complete();
    });

    // Suscripción
    palabras.subscribe({
      next: (palabra) => {
        console.log('Palabra recibida: ' + palabra);
      },
      error: (err) => console.error('Error al recibir la palabra:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }

  ejemplo07() {
    console.log('Ejecutando ejemplo 06 de RxJs: EMISIÓN DE STRINGS CON ERROR');

    // Observable
    const palabras = new Observable<string>((observer) => {
      observer.next('Hola');
      observer.next('¿Qué');
      observer.next('tal?');
      observer.error('¡Ha ocurrido un error en la emisión de palabras!');
      observer.next('Soy');
      observer.next('Daniel');
      observer.complete();
    });

    // Suscripción
    palabras.subscribe({
      next: palabra => console.log('Palabra recibida: ' + palabra),
      error: (err) => console.error('Error al recibir la palabra:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }

  ejemplo08() {
    console.log('Ejecutando ejemplo 08 de RxJs: EMISIÓN CON INTERVAL (19)');

    // Observable
    const contador$ = interval(10);

    // Suscripción
    const subscription = contador$.subscribe({
      next: numero => console.log('Número recibido: ' + numero),
      error: (err) => console.error('Error al recibir el número:', err),
      complete: () => console.log('Flujo de datos completado')
    });

    // Desuscríbete después de 5000 ms para detener la emisión
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Desuscrito del observable de intervalo');
    }, 5000);
  }

  ejemplo09() {
    console.log('Ejecutando ejemplo 09 de RxJs');
    const intervalo1$ = interval(1000);
    const intervalo2$ = interval(1500);

    // Combinar con el operador merge los dos intervalos
    const combinado1$ = merge(intervalo1$, intervalo2$); // IMPORTANTE
    const combinado2$ = combinado1$.pipe(
      take(10)
    );

    // Suscripción
    combinado2$.subscribe({
      next: numero => console.log('Número recibido: ' + numero),
      error: (err) => console.error('Error al recibir el número:', err),
      complete: () => console.log('Flujo de datos completado')
    });
  }
}