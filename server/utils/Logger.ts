import clc, { Format } from "cli-color";

// Big thanks to Christian Strøm Gregersen

export default class Logger {
  public static info(tag: string, message: string) {
    const green = clc.green;
    console.info(this.writeMessage(green, tag, message));
  }

  private static writeMessage(color: Format, tag: string, message: string) {
    return `${color.bold("[" + tag.toUpperCase() + "]")} ${color(message)}`;
  }

  public static debug(tag: string, message: string) {
    const cyanWhite = clc.bgCyan.white;
    console.log(this.writeMessage(cyanWhite, tag, message));
  }

  public static error(tag: string, message: string) {
    const red = clc.red;
    console.error(this.writeMessage(red, tag, message));
  }
}
