export default async function handler(req, res) {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  if (req.method === "POST") {
    const answer = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=175042839&text=${req.body}&parse_mode=HTML`
    ).then((response) => response.json());

    res.status(200).json({ ok: answer.ok });
  } else {
    res.status(405);
    res.end();
  }
}
