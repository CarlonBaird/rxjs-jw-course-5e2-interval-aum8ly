import { interval, Observable, timer } from 'rxjs';

console.log('App started');

const interval$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const intervalId = setInterval(() => {
    console.log('Timeout!');
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
});

const subscription1 = interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscription1.unsubscribe();
  console.log('Sub1:', 'Unsubscribe');
}, 5000);

const subscription2 = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscription2.unsubscribe();
  console.log('Sub2:', 'Unsubscribe');
}, 5000);
