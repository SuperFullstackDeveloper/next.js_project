import {useRouter} from "next/router";

export default function Blog(){
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
}