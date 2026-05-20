import { iubenda } from "@/lib/iubenda";

/** Inline script assigned to `window._iub.csConfiguration` before the Iubenda widget loads. */
export function buildIubendaConsentConfigScript(): string {
  return `
    window._iub = window._iub || [];
    window._iub.csConfiguration = {
      siteId: ${iubenda.siteId},
      cookiePolicyId: ${iubenda.policyIdNumber},
      lang: "en",
      enableGdpr: true,
      gdprAppliesGlobally: true,
      enableUspr: true,
      usPreferencesWidgetDisplay: false,
      googleConsentMode: true,
      perPurposeConsent: false,
      floatingPreferencesButtonDisplay: "bottom-right",
      startOnDomReady: true,
      askConsentAtCookiePolicyUpdate: true,
      cookiePolicyInOtherWindow: true,
      storage: { useSiteId: true },
      callback: {
        onPreferenceExpressed: function(preference) {
          if (!preference || preference.consent !== false || window.__framescaleIubendaUsprSyncing) {
            return;
          }

          window.__framescaleIubendaUsprSyncing = true;
          window.setTimeout(function() {
            window._iub.cs.api.setPreferences({
              consent: false,
              uspr: { s: false, sh: false, adv: false },
              ccpa: "1YY-"
            }, true, false);
            window.__framescaleIubendaUsprSyncing = false;
          }, 0);
        },
        onConsentRejected: function() {
          var preferences = window._iub.cs.api.getPreferences();
          if (preferences && preferences.consent === false && !window.__framescaleIubendaUsprSyncing) {
            window.__framescaleIubendaUsprSyncing = true;
            window._iub.cs.api.setPreferences({
              consent: false,
              uspr: { s: false, sh: false, adv: false },
              ccpa: "1YY-"
            }, true, false);
            window.__framescaleIubendaUsprSyncing = false;
          }
        }
      },
      banner: {
        position: "float-top-center",
        acceptButtonDisplay: true,
        rejectButtonDisplay: true,
        customizeButtonDisplay: true,
        closeButtonDisplay: false,
        showTitle: false,
        listPurposes: false,
        showPurposesToggles: false,
        explicitWithdrawal: true,
        applyStyles: true,
        acceptButtonCaption: "Accept all",
        backgroundColor: "#ffffff",
        textColor: "#264653",
        acceptButtonColor: "#17788e",
        acceptButtonCaptionColor: "#ffffff",
        rejectButtonCaption: "Reject all",
        rejectButtonColor: "#f7f9fa",
        rejectButtonCaptionColor: "#264653",
        customizeButtonCaption: "Learn more and customize",
        customizeButtonColor: "#f7f9fa",
        customizeButtonCaptionColor: "#264653"
      }
    };
  `;
}
