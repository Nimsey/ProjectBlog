import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET TOP 5 POSTS
export const GET = async (req) => {
    try {
        const posts = await prisma.post.findMany({
            take: 5,
            orderBy: { views: 'desc' },
            include: { user: true, cat: true},
        });

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
};