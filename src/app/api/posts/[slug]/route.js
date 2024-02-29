import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
    console.log('GET request received'); // New log
    const { slug } = params;

    try {
        const existingPost = await prisma.post.findUnique({ where: { slug } });

        if (!existingPost) {
            console.log('Post not found'); // New log
            return new NextResponse(
                JSON.stringify({ message: "Post not found!" }), { status: 404 }
            );
        }

        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true },
        });

        console.log('Post views incremented', post); // New log
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        console.log('Error in GET request', err); // New log
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
};

export const PUT = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        const post = await prisma.post.update({
            where: { slug: body.slug },
            data: { ...body },
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};