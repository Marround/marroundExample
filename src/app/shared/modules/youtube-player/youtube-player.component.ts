import {ChangeDetectionStrategy, Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'mar-youtube-player',
  template: `<youtube-player [videoId]="videoID" [width]="width" [height]="height"></youtube-player>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayerComponent implements OnInit {
  @Input() videoID!: string;
  @Input() width?: number = undefined;
  @Input() height?: number = undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }
  ngOnInit() {
    if (!apiLoaded && isPlatformBrowser(this.platformId)) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}

let apiLoaded = false;
