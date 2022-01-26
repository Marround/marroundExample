import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, map, Observable, pairwise, startWith, switchMap, takeUntil, withLatestFrom} from 'rxjs';

@Component({
  selector: 'mar-rxjs-pipeline',
  templateUrl: './rxjs-pipeline.component.html',
  styleUrls: ['./rxjs-pipeline.component.scss']
})
export class RxjsPipelineComponent implements OnInit {
  @ViewChild('canvas', {static: true}) private _canvas!: ElementRef<HTMLCanvasElement>
  @ViewChild('range', {static: true}) private _range!: ElementRef<HTMLInputElement>
  @ViewChild('color', {static: true}) private _color!: ElementRef<HTMLInputElement>

  private canvas!: HTMLCanvasElement
  private range!: HTMLInputElement
  private color!: HTMLInputElement
  ctx!:CanvasRenderingContext2D
  scale = window.devicePixelRatio

  lineWidth$!: Observable<number>
  strokeStyle$!: Observable<any>

  isChanged = false;

  mouseMove$!: Observable<MouseEvent>
  mouseDown$!: Observable<MouseEvent>
  mouseUp$!: Observable<MouseEvent>
  mouseOut$!: Observable<MouseEvent>

  stream$!: Observable<any>


  constructor() {

  }

  ngOnInit() {
    this.canvas = this._canvas.nativeElement;
    this.range = this._range.nativeElement;
    this.color = this._color.nativeElement;

    this.lineWidth$ = this.createInputStream(this.range)
    this.strokeStyle$ = this.createInputStream(this.color)

    this.mouseMove$ = fromEvent<MouseEvent>(this.canvas, 'mousemove')
    this.mouseDown$ = fromEvent<MouseEvent>(this.canvas, 'mousedown')
    this.mouseUp$ = fromEvent<MouseEvent>(this.canvas, 'mouseup')
    this.mouseOut$ = fromEvent<MouseEvent>(this.canvas, 'mouseout')

    // @ts-ignore
    this.ctx = this.canvas.getContext('2d')
    const rect = this.canvas.getBoundingClientRect()

    this.canvas.width = rect.width * this.scale
    this.canvas.height = rect.height * this.scale
    this.ctx.scale(this.scale, this.scale)

    this.stream$ = this.mouseDown$
      .pipe(
        withLatestFrom(this.lineWidth$, this.strokeStyle$, (_, lineWidth, strokeStyle) => {
          return {lineWidth, strokeStyle}
        }),
        switchMap(options => {
          return this.mouseMove$
            .pipe(
              map(e => ({
                x: e.offsetX,
                y: e.offsetY,
                options
              })),
              pairwise(),
              takeUntil(this.mouseUp$),
              takeUntil(this.mouseOut$)
            )
        })
      )

    this.stream$.subscribe(([from, to]) => {
      const {lineWidth, strokeStyle} = from.options

      this.ctx.lineWidth = lineWidth
      this.ctx.strokeStyle = strokeStyle

      this.ctx.beginPath()
      this.ctx.moveTo(from.x, from.y)
      this.ctx.lineTo(to.x, to.y)
      this.ctx.stroke()
    })
  }

  createInputStream(node: HTMLInputElement) {
    return fromEvent<InputEvent>(node, 'input')
      .pipe(
        // @ts-ignore
        map(e => e?.target?.value),
        startWith(node.value)
      )
  }


  clearCanvas() {
    this.isChanged = false;
    this.ctx.clearRect(0, 0, 0, 0)
  }

  toBase64() {
    if (this.isChanged) {
      const image = this.ctx.canvas.toDataURL('image/png');
      console.log(image);
    }
  }

}
