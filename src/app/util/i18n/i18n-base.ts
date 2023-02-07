export class I18nBase {
    static _languages: {[key: string]: any}={};
    static _defaultLanguage: string="en";
    static _selectedLanguage: string="en";

    constructor()
    {
    }

    get languages(): string[]
    {
        return Object.keys(I18nBase._languages);
    }

    get defaultLanguage(): string
    {
      return I18nBase._defaultLanguage;
    }

    get selectedLanguage(): string
    {
      return I18nBase._selectedLanguage;
    }

    setLanguage(language: string): void
    {
      let languageObject=I18nBase._languages[language];
      if(languageObject==null)
      {
        languageObject=I18nBase._languages[I18nBase._defaultLanguage];
      }
      Object.assign(this, languageObject);
      I18nBase._selectedLanguage=language;
    }
  
}
