import { auth } from "auth"
import { signIn } from "next-auth/react"

export default async function LoginPage() {
    const session = await auth()

    return (
        <p> hello </p>

    );
}