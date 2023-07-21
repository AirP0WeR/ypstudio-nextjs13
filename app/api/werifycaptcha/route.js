import logHelper from '../../../utils/logHelper'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req) {

  const answer = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
  })
    .then((reCaptchaRes) => reCaptchaRes.json())
    logHelper(answer)

    return Response.json({ success: answer.success }, { message: "Enquiry submitted successfully" }, { status: 200 });

    // .then((reCaptchaRes) => {
    //   // console.log(
    //   //   reCaptchaRes,
    //   //   "Response from Google reCaptcha verification API"
    //   // );
    //   if (reCaptchaRes?.success === true) {
    //     // Save data to the database from here
    //     // console.log(reCaptchaRes);
    //     logHelper(reCaptchaRes)

    //     // return Response.json(JSON.stringify(reCaptchaRes));
    //     // return Response.json({success: true, message: "Enquiry submitted successfully"}, {status: 200 });
    //     return Response.json({ ok: true }, { message: "Status ok" }, { status: 200 });

    //   } else {
    //     return Response.json({status: "failure", message: "Google ReCaptcha Failure"}, {status: 200 });
    //   }
    // });
}