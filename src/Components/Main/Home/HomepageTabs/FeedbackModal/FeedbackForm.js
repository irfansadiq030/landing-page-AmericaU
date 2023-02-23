import React from "react";
import "./FeedbackModal.css";

export default function FeedbackForm({ value, onInputData }) {
  return (
    <div className="flex flex-col text-center frame-content">
      <h4>Have a Suggestion?</h4>
      <h4>Found a Bug?</h4>
      <h4>Need Some Help?</h4>
      <h4>Send us a Message!</h4>
      <div class="form-group" style={{ marginBottom: "10px" }}>
        <textarea
          onInput={(e) =>
            onInputData({ ...value, details: e.currentTarget.value })
          }
          placeholder="Enter something"
          class="form-control report-text"
          rows={"5"}
        />
      </div>
      <div class="form-group" style={{ marginBottom: "0px" }}>
        <input
          onInput={(e) =>
            onInputData({ ...value, email: e.currentTarget.value })
          }
          type="email"
          placeholder="Your email address (optional)"
          class="form-control lowercase"
          style={{
            borderRadius: "unset",
          }}
        />
      </div>
    </div>
  );
}
