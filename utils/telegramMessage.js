import logHelper from './logHelper'


export default async function sendTelegrammMessage(toSend) {
  const message = `Имя: ${toSend.name}, E-mail: ${toSend.email}, Сообщение: ${toSend.message}`
  const response = await fetch("/api/tsm", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
  return await response.json();

}