import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page"), 10);
    const cat = searchParams.get("cat");
    

        // Existing logic for pagination and category filtering
        const POST_PER_PAGE = 2;
        const skip = page > 1 ? POST_PER_PAGE * (page - 1) : 0;
        const query = {
            take: POST_PER_PAGE,
            skip: skip,
            where: {
                ...(cat && { catSlug: cat }),
            },
        };

        try {
            const [posts, count] = await prisma.$transaction([
                prisma.post.findMany(query),
                prisma.post.count({ where: query.where }),
            ]);
            return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
        } catch (err) {
            console.log(err);
            return new NextResponse(JSON.stringify({ message: "Something went get wrong!" }, { status: 500 }));
        }
    }

// DELETE A POST
export const DELETE = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        const post = await prisma.post.delete({
            where: { id: body.id },
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};

// CREATE A POST
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};

/// edit a post
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
            where: { id: body.id },
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
