export class GlobalMethods {

  static concatParamWithString(thisParam: string, newString: string): string {
    if (thisParam === "") {
      thisParam = newString;
    } else {
      thisParam = thisParam + "&" + newString;
    }
    return thisParam;
  }


}
