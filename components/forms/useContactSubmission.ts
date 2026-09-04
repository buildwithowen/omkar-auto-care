"use client";

import type { FormEvent } from "react";

import { useState } from "react";

import { useRouter } from "next/navigation";


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

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Accept: "application/json",
          },

          body: JSON.stringify({
            fullName,

            contactNumber,

            email,

            rego,

            address,

            services: selectedServices,

            submittedFrom:
              window.location.href,
          }),
        }
      );

      let result: {
        success?: boolean;
        message?: string;
      };

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The server returned an unexpected response. Please try again."
        );
      }

      if (
        !response.ok ||
        result.success !== true
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