import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-i18n-selector',
  templateUrl: './i18n-selector.component.html',
  styleUrls: ['./i18n-selector.component.sass']
})
export class I18nSelectorComponent implements OnInit {
  private a="a".charCodeAt(0);
  private z="z".charCodeAt(0);
  private offset=0x1f1e6-this.a;

  constructor(
    public i18n: I18nService
  ) { }

  ngOnInit(): void {
  }  

  getEmoji(language: string): string
  {
    language=language.toLowerCase();
    if(language=="en") language="gb";
    const c0=language.codePointAt(0)||0;
    const c1=language.codePointAt(1)||0;
  
    if (
      language.length !== 2
      || c0>this.z || c0<this.a
      || c1>this.z || c1<this.a
    )
      return language;
  
    return String.fromCodePoint(c0+this.offset)+String.fromCodePoint(c1+this.offset);
  }

}
