import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BrowserFeature} from "../browser-detection/browser-detection.component";

export interface TableData {
  displayedColumns: string[],
  data: BrowserFeature[]
}

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MatTableComponent {
  @Input() tableData: TableData[] = [];
}
