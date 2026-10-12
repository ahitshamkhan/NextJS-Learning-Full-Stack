export const instant = false;

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>
            <h1>UserDetails {id}</h1>
        </div>
    );
};

export default UserDetails;