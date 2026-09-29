import {
  ChevronDown,
  Users,
} from "lucide-react";

import "./Customize.css";

export default function Customize() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Your Bhutan travel query has been received."
    );
  };

  return (
    <section
      className="customize-section"
      id="customize"
    >

      <div className="container">

        <div className="section-heading">

          <h2>
            Customize Your Bhutan Journey
          </h2>

          <p>
            Tell us your travel dates, preferences, interests,
            and group details, and our Bhutan specialists will
            create a personalised journey designed around your
            needs, pace, and budget.
          </p>

        </div>

        <form
          className="customize-form"
          onSubmit={handleSubmit}
        >

          <FormInput
            label="Your Name"
            placeholder="Enter name"
          />

          <FormInput
            label="Whatsapp / Phone"
            defaultValue="+91 98765 00000"
          />

          <div className="form-row">

            <FormSelect
              label="Departure City"
              value="Select City"
            />

            <FormSelect
              label="Travel Month"
              value="Apr - May"
            />

          </div>

          <div className="form-row">

            <FormSelect
              label="Duration"
              value="4N / 5D"
            />

            <FormSelect
              label="Travellers"
              value="2 Adults"
              icon={<Users size={12} />}
            />

          </div>

          <FormSelect
            label="Travel style"
            value="Select Travel Style"
          />

          <label className="custom-label">
            Message

            <textarea
              placeholder="Your message"
              rows="4"
            />
          </label>

          <button
            className="send-query"
            type="submit"
          >
            Send Query
          </button>

        </form>

      </div>

    </section>
  );
}


function FormInput({
  label,
  placeholder,
  defaultValue,
}) {
  return (
    <label className="custom-label">

      {label}

      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />

    </label>
  );
}


function FormSelect({
  label,
  value,
  icon,
}) {
  return (
    <label className="custom-label">

      {label}

      <div className="custom-select">

        <span>{value}</span>

        {icon || <ChevronDown size={12} />}

      </div>

    </label>
  );
}