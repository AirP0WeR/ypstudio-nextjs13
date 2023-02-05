const NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;


const handler = (req, res) => {
  return new Promise ((resolve, reject) =>{
    if (req.method === "POST") {
      try {
        fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
        })
          .then((reCaptchaRes) => reCaptchaRes.json())
          .then((reCaptchaRes) => {
            // console.log(
            //   reCaptchaRes,
            //   "Response from Google reCaptcha verification API"
            // );
            if (reCaptchaRes?.success === true) {
              // Save data to the database from here
              // console.log(reCaptchaRes);
              res.status(200).json({
                status: "success",
                message: "Enquiry submitted successfully",
              });
              resolve();
            } else {
              res.status(200).json({
                status: "failure",
                message: "Google ReCaptcha Failure",
              });
              resolve();
            }
          });
      } catch (err) {
        res.status(405).json({
          status: "failure",
          message: "Error submitting the enquiry form",
        });
        resolve();
      }
    } else {
      res.status(405);
      res.end();
    }
  })

  };
  
  export default handler;