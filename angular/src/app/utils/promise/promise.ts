export const toPromise = (callback: (
  resolve: (value?: unknown) => void,
  reject: (reason?: any) => void
) => void) => {
  return new Promise((resolve, reject) => {
    try {
      callback(resolve, reject);
    } catch (err) {
      reject(err);
    }
  });
}
