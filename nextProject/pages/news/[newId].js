import { useRouter } from "next/router"
function DetailPage() {
    const router = useRouter()
    const newId = router.query.newId
    console.log(newId, "<<<<<<<<<<");

    return (
        <div>Detail Page</div>
    )
}

export default DetailPage