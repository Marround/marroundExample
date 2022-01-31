import { map, retryWhen, shareReplay, switchMap, takeWhile } from 'rxjs/operators';
import { concat, pipe, range, throwError, timer, zip } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Exponential Backoff pipe.
 * param number maxTries default = BACKOFF_MAX_TRIES tries
 * param number ms default = BACKOFF_MAX_DELAY ms
 */
export function backoff<T>(maxTries = BackoffConst.BACKOFF_MAX_TRIES, ms = BackoffConst.BACKOFF_MAX_DELAY) {
  return pipe(
    retryWhen<T>(attempts => {
      const replayError = attempts.pipe(shareReplay(1));

      const observableForRetries = zip(range(1, maxTries), replayError).pipe(
        takeWhile(([_index, res]) => {
          if (res instanceof HttpErrorResponse) {
            return res.status === 0;
          } else {
            return false;
          }
        }),
        map(([elemFromRange]) => elemFromRange),
        map(i => i * i),
        switchMap(i => timer(i * ms)),
      );
      const observableForFailure = replayError.pipe(switchMap(err => throwError(err)));
      return concat(observableForRetries, observableForFailure);
    }),
  );
}

class BackoffConst {
  static BACKOFF_MAX_TRIES = 10;
  static BACKOFF_MAX_DELAY = 250;
}
