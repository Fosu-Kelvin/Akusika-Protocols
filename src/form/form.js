import { useState } from "react";
import "./form.scss";

import SingleCheckboxGroup from "../check/SingleCheckboxGroup";
import SingleCheckboxGroup2 from "../check/SingleCheckGroup2";

const Form = () => {
  const [name, setName] = useState("");

  const [email, SetEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const [message, SetMessage] = useState("");
  const [referral, setReferral] = useState("");
  const [budget, setBudget] = useState("");
  const [planNeeds, setPlanNeeds] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [plan, setPlan] = useState("");
  const [referralName, setReferralName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Form Submission";

    const body = `Name: ${name}
Number: ${number}
Email: ${email}
Event Type: ${plan}
Date: ${date}
Referral Source: ${referralName}
Name of Referral: ${referral}
Planning Needs: ${planNeeds}
Estimated budget: ${budget}
Estimated guest Count: ${guestCount}
Additional information: ${message}`;

    const mailtoLink = `mailto:abigailakuosae@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <legend>(required)</legend>
      <div className="part-1">
        <div className="box1">
          <label htmlFor="username">Name</label>
          <input
            value={name}
            type="text"
            required
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="box1">
          <label htmlFor="phone">Number</label>
          <input
            type="tel"
            value={number}
            placeholder="enter phone number"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="box1">
        <label htmlFor="email">Email(required)</label>
        <input
          type="email"
          value={email}
          required
          placeholder="example@gmail.com"
          onChange={(e) => SetEmail(e.target.value)}
        />
      </div>
      <fieldset className="field-2">
        <legend>Event Type(required)</legend>
        <div className="part-2">
          <SingleCheckboxGroup
            selected={plan}
            onChange={(e) =>
              setPlan((prev) => (prev === e.target.value ? "" : e.target.value))
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Event date(required)</legend>
        <label htmlFor="date">
          <input
            type="date"
            value={date}
            name=""
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </fieldset>
      <fieldset className="field-4">
        <legend>Referral Source(required)</legend>
        <SingleCheckboxGroup2
          selected={referralName}
          onChange={(e) =>
            setReferralName((prev) =>
              prev === e.target.value ? "" : e.target.value
            )
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Name of Referral</label>
        <input
          type="text"
          value={referral}
          required
          onChange={(e) => setReferral(e.target.value)}
        />
        <label htmlFor="">Planning Needs(required)</label>
        <input
          type="text"
          value={planNeeds}
          required
          onChange={(e) => setPlanNeeds(e.target.value)}
        />
        <label htmlFor="">Estimated Budget(required)</label>
        <input
          type="text"
          value={budget}
          required
          onChange={(e) => setBudget(e.target.value)}
        />
        <label htmlFor="">Estimated Guest Count(required)</label>
        <input
          type="text"
          value={guestCount}
          required
          onChange={(e) => setGuestCount(e.target.value)}
        />
        <label htmlFor="">Additional Information</label>
        <p>
          Is there anything else that you would like to tell us about your
          planning needs or vision for your event?
        </p>
        <input
          type="text"
          value={message}
          required
          onChange={(e) => SetMessage(e.target.value)}
        />
      </fieldset>
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
