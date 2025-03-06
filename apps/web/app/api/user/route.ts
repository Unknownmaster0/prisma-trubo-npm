import { prisma } from "@repo/db";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json({ users }, { status: 200 });
}

export async function POST(req: Request) {
  const { email, name } = await req.json();
  const newuser = await prisma.user.create({
    data: {
      email,
      name,
    },
  });

  return Response.json({ newuser }, { status: 201 });
}
