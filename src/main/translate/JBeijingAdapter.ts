import JBeijing from './JBeijing'

export default class JBeijingAdapter implements Yagt.Translator {
  private config: Yagt.Config.JBeijing
  private jb: JBeijing

  constructor (config: Yagt.Config.JBeijing) {
    this.config = config
    this.jb = new JBeijing(config.path)
    this.jb.loadUserDic(config.dictPath)
  }

  public async translate (text: string) {
    return this.jb.translate(
      text,
      this.config.traditionalChinese ? 950 : 936
    )
  }

  public isEnable (): boolean {
    return this.config.enable
  }
  public setEnable (isEnable: boolean): void {
    this.config.enable = isEnable
  }
  public getName (): string {
    return 'JBeijing'
  }
}