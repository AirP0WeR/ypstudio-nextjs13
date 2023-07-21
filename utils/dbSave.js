export default async function dbSaveMessage(toSend) {
  const response = await fetch("/api/db", {
    method: "POST",
    body: JSON.stringify(toSend),
  });

  return await response.json();
}
