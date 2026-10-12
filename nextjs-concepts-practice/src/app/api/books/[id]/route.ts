import { books } from "@/app/api/db";

// GET a single book by ID
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const book = books.find((b) => b.id === Number(id));

    if (!book) {
        return Response.json({ message: "Book not found" }, { status: 404 });
    }

    return Response.json({ book });
}

// UPDATE an existing book by ID
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const { title, author } = await request.json();

    const index = books.findIndex((b) => b.id === Number(id));

    if (index === -1) {
        return Response.json({ message: "Book not found" }, { status: 404 });
    }

    books[index] = {
        id: Number(id),
        title: title ?? books[index].title,
        author: author ?? books[index].author,
    };

    return Response.json({ book: books[index] });
}

// DELETE a book by ID
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const index = books.findIndex((b) => b.id === Number(id));

    if (index === -1) {
        return Response.json({ message: "Book not found" }, { status: 404 });
    }

    const [deletedBook] = books.splice(index, 1);
    return Response.json({ book: deletedBook });
}
