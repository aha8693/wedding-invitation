const SHEET_NAME = "RSVP Responses";
const HEADERS = [
  "Submitted at",
  "Primary guest name",
  "Primary guest meal preference",
  "Primary guest allergies/dietary restrictions",
  "Additional adult guests",
  "Total adults",
  "Total children",
  "High chairs needed",
  "Booster chairs needed",
  "Note",
];

function doGet() {
  return jsonResponse({ status: "RSVP endpoint is ready." });
}

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");

    if (!data.name) {
      throw new Error("Name is required.");
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

    const adultGuests = (Array.isArray(data.adultGuests) ? data.adultGuests : [])
      .filter((guest) => guest && guest.name);
    const additionalAdults = adultGuests
      .map((guest) => {
        const details = `${guest.name} — ${guest.mealPreference || "No preference"}`;
        return guest.allergies ? `${details}; ${guest.allergies}` : details;
      })
      .join("\n");

    sheet.appendRow([
      new Date(),
      data.name.trim(),
      data.mealPreference || "",
      data.allergies || "",
      additionalAdults,
      1 + adultGuests.length,
      data.childCount || "0",
      data.highChairCount || "0",
      data.boosterChairCount || "0",
      data.note || "",
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message });
  }
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
