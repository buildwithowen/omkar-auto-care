"use client";

import type { FormEvent } from "react";

import { useState } from "react";

import { useRouter } from "next/navigation";


/* =========================================================
   TEMPORARY TESTING EMAIL

   Replace this address with the client's email address
   once testing has been completed.
========================================================= */

const TESTING_EMAIL =
  "owengenuino26@gmail.com";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/" + TESTING_EMAIL;


/* =========================================================
   SHARED FORM SUBMISSION HOOK
========================================================= */

export function useContactSubmission(
  selectedServices: string[]
) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submissionError, setSubmissionError] =
    useState("");


  /* =======================================================
     HANDLE FORM SUBMISSION
  ======================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    setSubmissionError("");

    const formData = new FormData(
      event.currentTarget
    );

    const fullName = String(
      formData.get("fullName") || ""
    ).trim();

    const contactNumber = String(
      formData.get("contactNumber") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const rego = String(
      formData.get("rego") || ""
    ).trim();

    const address = String(
      formData.get("address") || ""
    ).trim();

    const services =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "Not specified";

    const enquiry = {
      _subject:
        "New OMKAR Autocare enquiry — " + fullName,

      _template: "table",

      _replyto: email,

      "Full Name": fullName,

      "Contact Number": contactNumber,

      "Email Address": email,

      "Vehicle Rego":
        rego || "Not provided",

      "Home Address": address,

      "Services Required": services,

      "Submitted From":
        window.location.href,
    };

    try {
      const response = await fetch(
        FORM_ENDPOINT,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Accept: "application/json",
          },

          body: JSON.stringify(enquiry),
        }
      );

      let result: {
        success?: boolean | string;
        message?: string;
      };

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The email service returned an unexpected response. Please try again."
        );
      }

      const submittedSuccessfully =
        result.success === true ||
        result.success === "true";

      if (
        !response.ok ||
        !submittedSuccessfully
      ) {
        throw new Error(
          result.message ||
            "Your enquiry could not be sent. Please try again."
        );
      }

      router.push("/thank-you");
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or call 0430 729 392."
      );

      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,

    isSubmitting,

    submissionError,
  };
}
