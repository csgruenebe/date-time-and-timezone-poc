export default class UtcHelper {

  public static MOMENT_UTC_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZZ';

  /**
   * Returns true for '2018-08-20T12:00:00.000+0000'
   */
  public static isValidJavaUTCDate(date: string) {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}[+][0-9]{4}$/.test(date);
  }

}

