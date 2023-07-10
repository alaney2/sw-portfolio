import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const blue = await kv.get('blue');
  const green = await kv.get('green');
  const purple = await kv.get('purple');
  const red = await kv.get('red');

  res.status(200).send({blue, green, purple, red});
}