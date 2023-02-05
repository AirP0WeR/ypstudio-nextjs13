export default async function sendTelegrammMessage(toSend) {
  const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;

  return await fetch(
    `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=175042839&text=${JSON.stringify(
      toSend
    )}`
  )
    .then((response) => response.json());

}
