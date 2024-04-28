import useSWR from "swr";

export default function Profile() {
    const {data, error, isLoading} = useSWR("/api/user",fetch);
    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <div>Loading...</div>;
    return <div>Profile</div>;
}