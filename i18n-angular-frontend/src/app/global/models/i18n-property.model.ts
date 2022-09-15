export class I18nProperty {

  public en?: string;
  public el?: string;

  constructor(model?: Partial<I18nProperty>) {
    if (model) { Object.assign(this, model); }
  }

}
