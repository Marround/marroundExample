const examples = `
<div nz-row nzAlign="middle" nzJustify="center" [nzGutter]="[0, 32]">
  <div nz-col nzSpan="24">
    <mar-kit-card title="Simple title">
      <div nz-row>
        <div nz-col nzSpan="24">CONTENT</div>
        <div nz-col nzSpan="24">Content</div>
        <div nz-col nzSpan="24">content</div>
      </div>
    </mar-kit-card>
  </div>

  <div nz-col nzSpan="24">
    <mar-kit-card>
      <mar-kit-card-title>
        <mar-custom-card-title>Custom component card title</mar-custom-card-title>
      </mar-kit-card-title>

      <div nz-row>
        <div nz-col nzSpan="24">CONTENT</div>
        <div nz-col nzSpan="24">Content</div>
        <div nz-col nzSpan="24">content</div>
      </div>
    </mar-kit-card>
  </div>

  <div nz-col nzSpan="24">
    <mar-kit-card>
      <mar-kit-card-title>
       <span style="font-size: 1.2em; color: darkslategray;">Custom card title</span>
      </mar-kit-card-title>

      <div nz-row>
        <div nz-col nzSpan="24">CONTENT</div>
        <div nz-col nzSpan="24">Content</div>
        <div nz-col nzSpan="24">content</div>
      </div>
    </mar-kit-card>
  </div>

  <div nz-col nzSpan="24">
    <mar-kit-card>
      <h1>Without title infrastructure</h1>

      <div nz-row>
        <div nz-col nzSpan="24">CONTENT</div>
        <div nz-col nzSpan="24">Content</div>
        <div nz-col nzSpan="24">content</div>
      </div>
    </mar-kit-card>
  </div>
</div>
`;

const template = `
<div nz-row class="kit-card">
  <ng-container *ngTemplateOutlet="title ? simpleTitle : extraTitle"></ng-container>

  <div nz-col nzSpan="24" class="kit-card-content">
    <ng-content></ng-content>
  </div>
</div>

<ng-template #simpleTitle>
  <div nz-col nzSpan="24" class="kit-card-title">{{title}}</div>
</ng-template>

<ng-template #extraTitle>
  <div nz-col nzSpan="24">
    <ng-content select="mar-kit-card-title"></ng-content>
  </div>
</ng-template>
`;
const component = `
@Component({
  selector: 'mar-kit-card',
  templateUrl: './kit-card.component.html',
  styleUrls: ['./kit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitCardComponent {
  @Input() title?: string;
}

@Component({
  selector: 'mar-kit-card-title',
  template: \`<ng-content></ng-content>\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitCardTitleComponent {}
`;

const css = `
.kit-card {
  border: 1px solid #333;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &-title {
    font-size: 2em;
    line-height: 2.1em;
    font-weight: bold;
    color: #333333;
    border-bottom: 1px solid #333;
    padding: 4px;
  }

  &-content {
    clear: both;
    padding: 8px;
  }
}
`;
export const CARD_DATA = {
  examples,
  template,
  component,
  css
};
