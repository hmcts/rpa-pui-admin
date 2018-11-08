// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  cookies: {
    token: '__auth__',
    userId: '__userid__'
  },
  microservice: 'jui_webapp',
  idam_client: 'juiwebapp',
  oauth_callback_url: 'oauth2/callback',
  protocol: 'https',
  production: false,
  services: {
    ccdComponent: {
      api_url: '/api/ccd/aggregated',
      case_data_url: '/api/ccd/data',
      document_management_url: 'api/ccd/documents',
      postcode_lookup_url: '/api/ccd/addresses?postcode=${postcode}',
      login_url: 'http://idam.preprod.ccidam.reform.hmcts.net',
      oauth2_client_id: 'ccd_gateway',
      payments_url: '/api/ccd/payments',
      remote_document_management_url: 'http://localhost:4603/documents'
    },
    ccd_data_api: 'https://ccd-data-store-api-aat.service.core-compute-aat.internal',
    idam_api: 'https://preprod-idamapi.reform.hmcts.net:3511',
    idam_web: 'http://idam.preprod.ccidam.reform.hmcts.net',
    s2s: 'http://rpe-service-auth-provider-aat.service.core-compute-aat.internal',
    dm_store_api: 'http://dm-store-aat.service.core-compute-aat.internal',
    em_anno_api: 'http://em-anno-aat.service.core-compute-aat.internal',
    em_redact_api: 'http://em-redact-aat.service.core-compute-aat.internal',
    coh_cor_api: 'http://coh-cor-aat.service.core-compute-aat.internal'
  },



}

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
