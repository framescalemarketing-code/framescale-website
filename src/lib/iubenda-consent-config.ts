import { iubenda } from "@/lib/iubenda";
import { CONSENT_EVENT } from "@/lib/analytics";

/**
 * Inline script assigned to `window._iub.csConfiguration` before the Iubenda
 * widget loads.
 *
 * The banner is a compact bar along the bottom of the viewport. It used to
 * float over the top of the page, which on a phone covered the headline and
 * the whole opening paragraph on first visit. The floating "preferences" button
 * is off: it sat in the same corner as the accessibility button and the mobile
 * call-to-action bar, and withdrawal is reachable from the footer's "Your
 * Privacy Choices" link instead.
 *
 * The callbacks also tell the site's own analytics whether the visitor said
 * yes, through a DOM event that `GAEventTracker` listens for.
 */
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
      floatingPreferencesButtonDisplay: false,
      startOnDomReady: true,
      askConsentAtCookiePolicyUpdate: true,
      cookiePolicyInOtherWindow: true,
      storage: { useSiteId: true },
      callback: {
        onPreferenceExpressedOrNotNeeded: function(preference) {
          var granted = !preference || preference.consent !== false;
          window.dispatchEvent(new CustomEvent("${CONSENT_EVENT}", { detail: { analytics: granted } }));
        },
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
          window.dispatchEvent(new CustomEvent("${CONSENT_EVENT}", { detail: { analytics: false } }));
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
        position: "bottom",
        slideDown: false,
        backgroundOverlay: false,
        fontSize: "14px",
        fontSizeBody: "14px",
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
        linksColor: "#17788e",
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
