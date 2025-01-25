"use server";

import fs from "fs/promises";
import path from "path";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const submission = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  // Log the submission to a file
  const logPath = path.join(process.cwd(), "contact-submissions.log");
  await fs.appendFile(logPath, JSON.stringify(submission) + "\n");

  // In a real-world scenario, you might want to store this in a database
  // or send it to an email service

  console.log("Form submitted:", submission);

  return { success: true };
}
