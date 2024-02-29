import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const postSlug = searchParams.get("postSlug");
    const id = searchParams.get("id");

    try {
        if (postSlug) {
            const comments = await prisma.comment.findMany({
                where: {
                    ...(postSlug && { postSlug }),
                },
                include: { user: true },
            });

            return new NextResponse(JSON.stringify(comments, { status: 200 }));
        } else if (id) {
            const comment = await prisma.comment.findUnique({
                where: { id: id },
            });

            return new NextResponse(JSON.stringify(comment, { status: 200 }));
        } else {
            return new NextResponse(
                JSON.stringify({ message: "Invalid parameters!" }, { status: 400 })
            );
        }
    } catch (err) {
        // console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};


// CREATE A COMMENT
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(JSON.stringify(comment, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};

// UPDATE A COMMENT
export const PUT = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        const comment = await prisma.comment.update({
            where: { id: body.id },
            data: { desc: body.desc},
        });

        return new NextResponse(JSON.stringify(comment, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};


// DELETE A COMMENT
export const DELETE = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        await prisma.comment.delete({
            where: { id: body.id },
        });
        // Send a success response back
        return new NextResponse(
            JSON.stringify({ message: "Comment deleted successfully" }, { status: 200 })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};

