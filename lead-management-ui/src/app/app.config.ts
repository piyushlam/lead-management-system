// // import { ApplicationConfig } from '@angular/core';
// // import { provideRouter } from '@angular/router';
// // import { provideHttpClient } from '@angular/common/http';
// // import { routes } from './app.routes';

// // // 👇 Purane naam ke liye bhi support
// // export const appConfig: ApplicationConfig = {
// //   providers: [
// //     provideRouter(routes),
// //     provideHttpClient(),
// //   ],
// // };

// // // 👇 Naya naam (agar kahin config use karna ho)
// // export const config = appConfig;


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient, withFetch } from '@angular/common/http'; // 👈 withFetch add
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(withFetch()),   // 👈 yahan withFetch() pass karo
//   ],
// };

// export const config = appConfig;




import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    })
  ],
};

export const config = appConfig;