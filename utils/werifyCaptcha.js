import logHelper from './logHelper'

export default async function werifyCaptcha(gReCaptchaToken) {
  const response = await fetch("/api/werifycaptcha", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gRecaptchaToken: gReCaptchaToken,
    }),
  })

  logHelper(response)
  
  return await response.json();

}