export default async function werifyCaptcha(gReCaptchaToken) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gRecaptchaToken: gReCaptchaToken,
    }),
  })
  return await response.json();

}