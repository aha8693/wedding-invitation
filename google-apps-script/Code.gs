const SHEET_NAME = "RSVP Responses";

function doGet() {
  return jsonResponse({ status: "RSVP endpoint is ready." });
}

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");

    if (!data.name || !data.attendance) {
      throw new Error("Name and attendance are required.");
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Submitted at",
        "Name",
        "Attendance",
        "Meal preference",
        "Has allergies/restrictions",
        "Allergies/restrictions details",
        "Note",
      ]);
    }

    sheet.appendRow([
      new Date(),
      data.name.trim(),
      data.attendance,
      data.mealPreference || "",
      data.hasRestrictions === "yes" ? "Yes" : "No",
      data.hasRestrictions === "yes" ? data.restrictions || "" : "",
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
