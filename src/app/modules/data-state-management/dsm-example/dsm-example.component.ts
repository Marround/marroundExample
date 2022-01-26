import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {catchError, of, takeUntil} from 'rxjs';
import {FetchService} from './services/fetch.service';
import {OnDestroyDirective} from '../../../shared/utils/rxjs-unsubscribers/on-destroy.directive';

@Component({
  selector: 'mar-dsm-example',
  templateUrl: './dsm-example.component.html',
  styleUrls: ['./dsm-example.component.scss']
})
export class DsmExampleComponent extends OnDestroyDirective implements OnInit, OnDestroy {
  data$ = this.fetch.photos$.pipe(
    takeUntil(this.destroy$)
  );

  @ViewChild('viewTmp', {static: true}) view!: TemplateRef<any>;
  @ViewChild('loadingTmp', {static: false}) loading!: TemplateRef<any>;
  @ViewChild('emptyTmp', {static: true}) empty!: TemplateRef<any>;
  @ViewChild('errorTmp', {static: true}) error!: TemplateRef<any>;

  constructor(private fetch: FetchService) {
    super();
  }

  ngOnInit() {
    this.fetch.getPhotos();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.fetch.setDefault();
  }

  getTemplate(data: any[] | Error): TemplateRef<any> {
    if (data instanceof Error) {
      return this.error;
    }
    if (data.length) {
      return this.view
    } else {
      return this.empty
    }
  }

  doFetch() {
    this.fetch.setDefault();
    this.fetch.getPhotos();
  }
}
