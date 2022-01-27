import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerComponent } from './youtube-player.component';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [YoutubePlayerComponent],
  exports: [YoutubePlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
})
export class YoutubePlayerModule {}
