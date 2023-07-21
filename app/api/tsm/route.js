const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_USER_ID = process.env.TELEGRAM_USER_ID;

export async function POST(req) {

  const data = await req.json();

  const answer = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_USER_ID}&text=${JSON.stringify(data)}&parse_mode=HTML`
  ).then((response) => response.json());

  return Response.json({ ok: answer.ok }, { message: "Status ok" }, { status: 200 });

}