import { NextApiRequest, NextApiResponse } from "next";

const posts = [
  {
    id: 1,
    title: "سلام خوبی ممد",
    content: "Content 1",
  },
  {
    id: 2,
    title: "سلام علی",
    content: "Content 2",
  },
  {
    id: 3,
    title: "آموزش گولنگ",
    content: "Content 3",
  },
  {
    id: 4,
    title: "آموزش اکسپرس جی اس",
    content: "Content 4",
  },
];

export default async function userPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const post = posts.find((item) => item.id === Number(id));
      if (!post) {
        return res.json({ error: "ridii" });
      }
      res.json(post);
    } else {
      res.json(posts);
    }
  }
  if (req.method === 'POST') {
    // console.log(req.body);
    let data = posts;
    data = [...data, req.body];
    return res.json(data);
  }
}
