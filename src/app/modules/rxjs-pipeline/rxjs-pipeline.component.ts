import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, Observable, pairwise, switchMap, takeUntil, tap } from 'rxjs';
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

  ctx!: CanvasRenderingContext2D;
  private scale = isPlatformBrowser(this.platformId) ? window.devicePixelRatio : 2;

  private mouseMove$!: Observable<MouseEvent>;
  private mouseDown$!: Observable<MouseEvent>;
  private mouseUp$!: Observable<MouseEvent>;
  private mouseOut$!: Observable<MouseEvent>;

  private stream$!: Observable<IDrawSettings[]>;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private cdr: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
    this.initNativeElements();

    this.initStreams();

    this.createContext();

    this.initStream();

    this.stream$.pipe(tap(this.drawLine.bind(this)), takeUntil(this.destroy$)).subscribe();
  }

  private drawLine([from, to]: IDrawSettings[]): void {
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  }

  private initStream(): void {
    this.stream$ = this.mouseDown$.pipe(
      takeUntil(this.destroy$),
      switchMap(() =>
        this.mouseMove$.pipe(
          map(e => ({ x: e.offsetX, y: e.offsetY })),
          pairwise(),
          takeUntil(this.mouseUp$),
          takeUntil(this.mouseOut$),
        ),
      ),
    );
  }

  private initNativeElements(): void {
    this.canvas = this._canvas.nativeElement;
  }

  private initStreams(): void {
    this.mouseMove$ = this.initMouseEventStream(this.canvas, 'mousemove');
    this.mouseDown$ = this.initMouseEventStream(this.canvas, 'mousedown');
    this.mouseUp$ = this.initMouseEventStream(this.canvas, 'mouseup');
    this.mouseOut$ = this.initMouseEventStream(this.canvas, 'mouseout');
  }

  private initMouseEventStream<T extends MouseEvent>(target: HTMLCanvasElement, eventName: string): Observable<T> {
    return fromEvent<T>(target, eventName).pipe(takeUntil(this.destroy$));
  }

  private createContext(): void {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.width = rect.width * this.scale;
    this.canvas.height = rect.height * this.scale;
    this.ctx.scale(this.scale, this.scale);

    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 8;
    this.ctx.strokeStyle = '#ff0000';
    this.cdr.markForCheck();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  toBase64() {
    const image = this.ctx.canvas.toDataURL('image/png');
    console.log(image);
  }
}

interface IDrawSettings {
  x: number;
  y: number;
}
