# Connect RSVP submissions to Google Sheets

The invitation includes a styled RSVP form. This guide connects it to your own
Google Sheet with Google Apps Script; no third-party form service is needed.

## Deploy the script

1. Create a new Google Sheet for your RSVPs.
2. In the Sheet, select **Extensions → Apps Script**.
3. Replace the default code with the contents of
   `google-apps-script/Code.gs` from this project, then save it.
4. Select **Deploy → New deployment**.
5. Choose **Web app**, set **Execute as** to **Me**, and set **Who has access**
   to **Anyone**. Click **Deploy** and approve the Google permission prompts.
6. Copy the web-app URL ending in `/exec`. Do not use the `/dev` URL.

## Add the endpoint to the invitation

In `config.js`, paste the URL between the quotes below:

```js
export const RSVP_SHEET_ENDPOINT = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL";
```

Then publish the site again with `npm run deploy`.

## Update an existing RSVP script

If your RSVP form is already connected, replace the code in Apps Script with the
updated `Code.gs`, then select **Deploy → Manage deployments**, click the pencil
icon, choose **New version**, and click **Deploy**. Your existing `/exec` URL
will continue to work.

## Test it

Submit a test RSVP from the invitation. The Sheet records the primary guest,
meal preference, allergies or dietary restrictions, additional adult guests,
children, high-chair and booster-chair requests, and notes.

## Important

The form uses a public endpoint so your guests can submit without signing in.
Anyone who learns the endpoint URL could submit a response, so review the Sheet
before relying on it for final guest counts.
