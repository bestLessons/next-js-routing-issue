import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <button
        type="button"
        // [username]/posts/[slug]
        onClick={() => router.push("/john/posts/lorem-slug")}
      >
        Go to coyote listing
      </button>

      <button type="button" onClick={() => router.push("/me/test")}>
        Go to sasha
      </button>
    </>
  )
}
