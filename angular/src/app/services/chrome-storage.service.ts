import { Injectable } from "@angular/core";
import { StateStorage } from "@ngneat/elf-persist-state";
import { toPromise } from "@utils/promise/promise";

@Injectable()
export class ChromeStorageEngineService implements StateStorage {

  public setItem(key: string, value: Record<string, any>): Promise<any> {
    return toPromise((resolve, reject) => {
      chrome.storage.sync.set({ [key]: value }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        }

        resolve(value);
      });
    });
  }

  public getItem(key: string): Promise<any> {
    return toPromise((resolve, reject) => {
      chrome.storage.sync.get(key, (data: { [key: string]: any }) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        }

        resolve(data[key]);
      });
    });
  }

  public removeItem(key: string): Promise<any> {
    return toPromise((resolve, reject) => {
      chrome.storage.sync.remove(key, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        }

        resolve();
      });
    });
  }
}
