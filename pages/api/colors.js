import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const color = req.query.color;
  let currentColorCount = await kv.get(color);
  if (currentColorCount === null) {
    currentColorCount = 0;
  }
  await kv.set(color, currentColorCount + 1);

  res.status(200).send({message: 'Color count updated successfully'});
}