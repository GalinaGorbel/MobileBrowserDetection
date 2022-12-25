import {Component} from '@angular/core';
import {Platform} from "@angular/cdk/platform";

export interface BrowserFeature {
  feature: string,
  value: boolean | string | number,
}

@Component({
  selector: 'app-browser-detection',
  templateUrl: './browser-detection.component.html',
  styleUrls: ['./browser-detection.component.css']
})

export class BrowserDetectionComponent {
  navigatorPlatform = window.navigator.platform;
  screenWidth = window.screen.width
  innerWidth = window.innerWidth
  innerHeight = window.innerHeight
  availHeight = window.screen.availHeight
  availWidth = window.screen.availWidth
  pixelRatio = window.devicePixelRatio

  winDisplayedColumns: string[] = ['Feature', 'Window Interface'];
  cdkDisplayedColumns: string[] = ['Feature', 'Angular CDK platform'];

  windowData: BrowserFeature[] = [
    {feature: 'platform', value: this.navigatorPlatform},
    {feature: 'screenWidth', value: this.screenWidth},
    {feature: 'innerWidth', value: this.innerWidth},
    {feature: 'innerHeight', value: this.innerHeight},
    {feature: 'availWidth', value: this.availWidth},
    {feature: 'availHeight', value: this.availHeight},
    {feature: 'pixelRatio', value: this.pixelRatio},
  ]
  cdkPlatformData: BrowserFeature[] = [
    {feature: 'isBrowser', value: this.platform.isBrowser},
    {feature: 'platform', value: this.currentPlatform()},
    {feature: 'rendering engine', value: this.currentRendering()},
    {feature: 'browser', value: this.currentBrowser()}
  ]

  constructor(private platform: Platform,) {
  }

  currentPlatform(): string {
    if (this.platform.ANDROID) {
      return 'ANDROID';
    }
    if (this.platform.IOS) {
      return 'IOS';
    }
    return ''
  }

  currentRendering(): string {
    if (this.platform.TRIDENT) {
      return 'Microsoft Trident';
    }
    if (this.platform.BLINK) {
      return 'Blink';
    }
    if (this.platform.WEBKIT) {
      return 'WebKit';
    }
    return ''
  }

  currentBrowser(): string {
    if (this.platform.EDGE) {
      return 'Microsoft Edge';
    }
    if (this.platform.FIREFOX) {
      return 'Firefox';
    }
    if (this.platform.SAFARI) {
      return 'Safari';
    }
    return ''
  }
}
