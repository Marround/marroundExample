/**
 * Инжектируемый сервис для автоматической отписки внутри компонента
 * Как использовать:
 * @Component({
 *   selector: 'app-some-component',
 *   providers: [NgOnDestroy] // очень важно указать сервис в провайдерах компонента,
 *   чтобы сервис создался и разрушился вместе с компонентом!!!
 * })
 * export class SomeComponent {
 *     stream$ = new Subject<any>();
 *
 *     @Self() - также важен, чтобы сервис был найден именно в провайдерах компонента, а не дальше по дереву до корня!!!
 *     constructor(@Self() private readonly destroy$: NgOnDestroy) {
 *         stream$.next(someData);
 *     }
 *
 *     this.someService.someStream().pipe(
 *         takeUntil(this.destroy$) поток будет выполняться до тех пор пока в this.destroy$ не возникнет событие
 *         ...список других операторов
 *     ).subscribe(...)
 *
 *     someMethod() {
 *         this.stream$.pipe(
 *             takeUntil(this.destroy$)
 *             ...список других операторов
 *         )
 *     }
 * }
 */
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgOnDestroy extends Subject<void> implements OnDestroy {
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
