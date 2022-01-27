import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {fromEvent, map, Observable, pairwise, startWith, switchMap, takeUntil, tap, withLatestFrom} from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { OnDestroyDirective } from '../../shared/utils/rxjs-unsubscribers/on-destroy.directive';

@Component({
  selector: 'mar-rxjs-pipeline',
  templateUrl: './rxjs-pipeline.component.html',
  styleUrls: ['./rxjs-pipeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsPipelineComponent extends OnDestroyDirective implements AfterViewInit {
  @ViewChild('canvas', { static: true }) private _canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('range', { static: true }) private _range!: ElementRef<HTMLInputElement>;
  @ViewChild('color', { static: true }) private _color!: ElementRef<HTMLInputElement>;

  private canvas!: HTMLCanvasElement;
  private range!: HTMLInputElement;
  private color!: HTMLInputElement;

  private ctx!: CanvasRenderingContext2D;
  private scale = isPlatformBrowser(this.platformId) ? window.devicePixelRatio : 2;

  private lineWidth$!: Observable<number>;
  private strokeStyle$!: Observable<string>;

  private mouseMove$!: Observable<MouseEvent>;
  private mouseDown$!: Observable<MouseEvent>;
  private mouseUp$!: Observable<MouseEvent>;
  private mouseOut$!: Observable<MouseEvent>;

  private stream$!: Observable<IDrawSettings[]>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    super();
  }

  ngAfterViewInit() {
    this.initNativeElements();

    this.initStreams();

    this.createContext();

    this.initStream();

    this.stream$.pipe(
      tap(this.drawLine.bind(this)),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  private drawLine([from, to]: IDrawSettings[]): void {
    const { lineWidth, strokeStyle } = from.options;
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.lineCap = 'round';

    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  }

  private initStream(): void {
    this.stream$ = this.mouseDown$.pipe(
      withLatestFrom(this.lineWidth$, this.strokeStyle$, (_, lineWidth, strokeStyle) => ({ lineWidth, strokeStyle })),
      takeUntil(this.destroy$),
      switchMap(options =>
        this.mouseMove$.pipe(
          map(e => ({ x: e.offsetX, y: e.offsetY, options })),
          pairwise(),
          takeUntil(this.mouseUp$),
          takeUntil(this.mouseOut$),
        ),
      ),
    );
  }

  private initNativeElements(): void {
    this.canvas = this._canvas.nativeElement;
    this.range = this._range.nativeElement;
    this.color = this._color.nativeElement;
  }

  private initStreams(): void {
    this.lineWidth$ = this.createInputStream(this.range).pipe(
      map<TInputValue, number>(data => Number(data)),
      takeUntil(this.destroy$),
    );
    this.strokeStyle$ = this.createInputStream(this.color).pipe(
      map<TInputValue, string>(data => String(data)),
      takeUntil(this.destroy$),
    );

    this.mouseMove$ = this.initMouseEventStream(this.canvas, 'mousemove');
    this.mouseDown$ = this.initMouseEventStream(this.canvas, 'mousedown');
    this.mouseUp$ = this.initMouseEventStream(this.canvas, 'mouseup');
    this.mouseOut$ = this.initMouseEventStream(this.canvas, 'mouseout');
  }

  private initMouseEventStream<T extends MouseEvent>(target: HTMLCanvasElement, eventName: string): Observable<T> {
    return fromEvent<T>(target, eventName).pipe(takeUntil(this.destroy$));
  }

  private createInputStream(node: HTMLInputElement): Observable<string | null> {
    return fromEvent<InputEvent>(node, 'input').pipe(
      map(e => e?.data),
      startWith(node.value),
    );
  }

  private createContext(): void {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.width = rect.width * this.scale;
    this.canvas.height = rect.height * this.scale;
    this.ctx.scale(this.scale, this.scale);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  toBase64() {
    const image = this.ctx.canvas.toDataURL('image/png');
    console.log(image);
  }
}

type TInputValue = string | null;

interface IDrawSettings {
  x: number;
  y: number;
  options: { lineWidth: number; strokeStyle: string };
}
