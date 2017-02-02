export class GenericLocalStorageService {
  public getItem (key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public setItem (key: string, value: any): void {
    let stringifiedValue = JSON.stringify(value);

    localStorage.setItem(key, stringifiedValue);
  }

  public clear (): void {
    localStorage.clear();
  }
}
