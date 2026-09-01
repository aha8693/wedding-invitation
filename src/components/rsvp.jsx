import React, { useState } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import {
  RSVP_SHEET_ENDPOINT,
} from "../../config";

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
    text-align: left;
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
  attendance: "",
  mealPreference: "No preference",
  hasRestrictions: "no",
  restrictions: "",
  note: "",
};

const Rsvp = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "hasRestrictions" && value === "no"
        ? { restrictions: "" }
        : {}),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!RSVP_SHEET_ENDPOINT) {
      setStatus("The RSVP form is being connected. Please try again soon.");
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
          restrictions: form.hasRestrictions === "yes" ? form.restrictions : "",
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
        Please let us know if you can join us.
      </Intro>
      <FormCard data-aos="fade-up" onSubmit={handleSubmit}>
        <label>
          NAME
          <input name="name" value={form.name} onChange={updateForm} required />
        </label>
        <label>
          ATTENDANCE
          <select name="attendance" value={form.attendance} onChange={updateForm} required>
            <option value="" disabled>Select one</option>
            <option value="Attending">Attending</option>
            <option value="Unable to attend">Unable to attend</option>
          </select>
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
          ALLERGIES OR RESTRICTIONS
          <select name="hasRestrictions" value={form.hasRestrictions} onChange={updateForm}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>
        {form.hasRestrictions === "yes" && (
          <label>
            PLEASE SPECIFY
            <input name="restrictions" value={form.restrictions} onChange={updateForm} required />
          </label>
        )}
        <label>
          NOTE
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
