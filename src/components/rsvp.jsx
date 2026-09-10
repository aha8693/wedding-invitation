import React, { useState } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import { RSVP_SHEET_ENDPOINT } from "../../config";

const MAX_ADDITIONAL_ADULTS = 3;

const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 52px 0 42px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  color: var(--title-color);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const Intro = styled.p`
  margin: 0 0 22px;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.8;
`;

const FormCard = styled.form`
  margin: 0 0 24px;
  padding: 20px 16px;
  background: rgb(255 255 255 / 72%);
  border: 1px solid var(--sage-200);
  border-radius: 16px;
  display: grid;
  gap: 15px;
  text-align: left;

  & label {
    display: grid;
    gap: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--forest-800);
    letter-spacing: 0.05em;
  }

  & input,
  & select,
  & textarea {
    width: 100%;
    border: 1px solid var(--sage-200);
    border-radius: 8px;
    background: rgb(255 255 255 / 82%);
    color: var(--ink);
    font: inherit;
    padding: 10px 11px;
  }

  & input,
  & select {
    height: 40px;
  }

  & textarea {
    min-height: 88px;
    resize: vertical;
  }
`;


const GuestCard = styled.section`
  display: grid;
  gap: 12px;
  padding: 16px 14px;
  border: 1px solid var(--sage-200);
  border-radius: 12px;
  background: rgb(242 243 238 / 72%);
`;

const GuestCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const GuestCardTitle = styled.h3`
  margin: 0;
  color: var(--forest-800);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
`;

const TextButton = styled.button`
  border: 0;
  background: transparent;
  color: #80548f;
  font: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
`;

const AddGuestButton = styled.button`
  min-height: 40px;
  border: 1px solid var(--forest-700);
  border-radius: 999px;
  background: transparent;
  color: var(--forest-800);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:disabled {
    border-color: var(--sage-200);
    color: var(--muted);
    cursor: not-allowed;
    opacity: 0.58;
  }
`;

const ChairCounts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

const SubmitButton = styled.button`
  min-height: 44px;
  border: 0;
  border-radius: 999px;
  background: var(--lavender);
  color: var(--forest-950);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.68;
  }
`;

const FormStatus = styled.p`
  min-height: 1.4em;
  margin: -4px 0 0;
  font-size: 0.76rem;
  line-height: 1.5;
  color: ${({ error }) => (error ? "#a44747" : "var(--forest-700)")};
`;

const EMPTY_FORM = {
  name: "",
  mealPreference: "Salmon",
  allergies: "",
  adultGuests: [],
  additionalGuestsJoining: "no",
  childrenJoining: "no",
  childCount: "0",
  highChairCount: "0",
  boosterChairCount: "0",
  note: "",
};

const EMPTY_ADULT_GUEST = {
  name: "",
  mealPreference: "Salmon",
  allergies: "",
};

const Rsvp = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState(false);
  const childrenAreJoining = form.childrenJoining === "yes";
  const childrenCount = Number(form.childCount);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const addAdultGuest = () => {
    setForm((previous) => ({
      ...previous,
      adultGuests:
        previous.adultGuests.length < MAX_ADDITIONAL_ADULTS
          ? [...previous.adultGuests, { ...EMPTY_ADULT_GUEST }]
          : previous.adultGuests,
    }));
  };

  const updateAdultGuest = (index, event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      adultGuests: previous.adultGuests.map((guest, guestIndex) =>
        guestIndex === index ? { ...guest, [name]: value } : guest,
      ),
    }));
  };

  const removeAdultGuest = (index) => {
    setForm((previous) => ({
      ...previous,
      adultGuests: previous.adultGuests.filter((_, guestIndex) => guestIndex !== index),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!RSVP_SHEET_ENDPOINT) {
      setStatus("The RSVP form is being connected. Please try again soon.");
      setStatusError(true);
      return;
    }

    if (childrenAreJoining && childrenCount < 1) {
      setStatus("Please enter the number of children joining your party.");
      setStatusError(true);
      return;
    }

    if (
      childrenAreJoining &&
      Number(form.highChairCount) + Number(form.boosterChairCount) > childrenCount
    ) {
      setStatus("High-chair and booster-chair counts cannot exceed the number of children.");
      setStatusError(true);
      return;
    }

    setSubmitting(true);
    setStatus("");
    setStatusError(false);

    try {
      await fetch(RSVP_SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...form,
          adultGuests:
            form.additionalGuestsJoining === "yes" ? form.adultGuests : [],
          childCount: childrenAreJoining ? form.childCount : "0",
          highChairCount: childrenAreJoining ? form.highChairCount : "0",
          boosterChairCount: childrenAreJoining ? form.boosterChairCount : "0",
        }),
      });
      setStatus("Thank you — your RSVP has been submitted.");
      setForm(EMPTY_FORM);
    } catch (error) {
      setStatus("We couldn't submit your RSVP. Please try again or contact us.");
      setStatusError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Wrapper id="rsvp">
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title data-aos="fade-up">RSVP</Title>
      </Divider>
      <Intro data-aos="fade-up">
        Please let us know if you can make it by <strong>September 17, 2026</strong>,  so we can plan accordingly. 
      </Intro>
      <FormCard data-aos="fade-up" onSubmit={handleSubmit}>
        <label>
          YOUR NAME
          <input name="name" value={form.name} onChange={updateForm} required />
        </label>
        <label>
          MEAL PREFERENCE
          <select name="mealPreference" value={form.mealPreference} onChange={updateForm}>
            <option value="Salmon">Pan Seared Salmon</option>
            <option value="Chicken">Roasted Amish Chicken Breast</option>
            <option value="Ribeye">Braveheart Farm Ribeye</option>
          </select>
        </label>
        <label>
          ALLERGIES OR DIETARY RESTRICTIONS (OPTIONAL)
          <input name="allergies" value={form.allergies} onChange={updateForm} />
        </label>
        <label>
          WILL OTHER ADULT GUESTS BE JOINING YOU?
          <select name="additionalGuestsJoining" value={form.additionalGuestsJoining} onChange={updateForm}>
            <option value="no">No, just me</option>
            <option value="yes">Yes, add their details</option>
          </select>
        </label>
        {form.additionalGuestsJoining === "yes" && (
          <>
            {form.adultGuests.map((guest, index) => (
              <GuestCard key={index}>
                <GuestCardHeader>
                  <GuestCardTitle>ADULT GUEST {index + 2}</GuestCardTitle>
                  <TextButton type="button" onClick={() => removeAdultGuest(index)}>
                    Remove
                  </TextButton>
                </GuestCardHeader>
                <label>
                  NAME
                  <input name="name" value={guest.name} onChange={(event) => updateAdultGuest(index, event)} required />
                </label>
                <label>
                  MEAL PREFERENCE
                  <select name="mealPreference" value={guest.mealPreference} onChange={(event) => updateAdultGuest(index, event)}>
                    <option value="Salmon">Pan Seared Salmon</option>
                    <option value="Chicken">Roasted Amish Chicken Breast</option>
                    <option value="Ribeye">Braveheart Farm Ribeye</option>
                  </select>
                </label>
                <label>
                  ALLERGIES OR DIETARY RESTRICTIONS (OPTIONAL)
                  <input name="allergies" value={guest.allergies} onChange={(event) => updateAdultGuest(index, event)} />
                </label>
              </GuestCard>
            ))}
            <AddGuestButton type="button" onClick={addAdultGuest} disabled={form.adultGuests.length >= MAX_ADDITIONAL_ADULTS}>
              {form.adultGuests.length >= MAX_ADDITIONAL_ADULTS
                ? "ADULT GUEST LIMIT REACHED"
                : "ADD ANOTHER ADULT GUEST"}
            </AddGuestButton>
          </>
        )}
        <label>
          WILL CHILDREN BE JOINING YOUR PARTY?
          <select name="childrenJoining" value={form.childrenJoining} onChange={updateForm}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>
        {childrenAreJoining && (
          <>
            <label>
              TOTAL NUMBER OF CHILDREN
              <input type="number" name="childCount" min="1" value={form.childCount} onChange={updateForm} required />
            </label>
            {childrenCount > 0 && (
              <ChairCounts>
                <label>
                  HIGH CHAIRS NEEDED
                  <input type="number" name="highChairCount" min="0" max={form.childCount} value={form.highChairCount} onChange={updateForm} />
                </label>
                <label>
                  BOOSTER CHAIRS NEEDED
                  <input type="number" name="boosterChairCount" min="0" max={form.childCount} value={form.boosterChairCount} onChange={updateForm} />
                </label>
              </ChairCounts>
            )}
          </>
        )}
        <label>
          NOTE (OPTIONAL)
          <textarea name="note" value={form.note} onChange={updateForm} />
        </label>
        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? "SUBMITTING..." : "SUBMIT RSVP"}
        </SubmitButton>
        <FormStatus error={statusError} aria-live="polite">{status}</FormStatus>
      </FormCard>
    </Wrapper>
  );
};

export default Rsvp;
