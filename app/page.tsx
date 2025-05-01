import { auth } from "@/auth";
import {SignInButton, SignOutButton} from "@/components/AuthButtons";
import Header from "../components/Header";
import Image from "next/image";

export default async function LoginPage() {
    const session = await auth();   // fetch the session

    return (
        <div>
            <Header />
            {session ? (
                // if logged in
                <div className="container mx-auto px-4 py-8 text-center">
                    {session.user?.image && (
                        <Image
                            src={session.user.image}
                            alt="Profile picture"
                            width={100}
                            height={100}
                            className="rounded-md mx-auto my-4"
                        />
                    )}
                    {/*welcome message addressed to user (name or general)*/}
                    <div>
                        <p className="text-xl mb-2">
                            welcome, {session.user?.name ?? "User"}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            email: {session.user?.email}
                        </p>
                    </div>
                    <SignOutButton />
                </div>
            ) : (
                // logged out
                <div className="container mx-auto px-4 py-8 text-center">
                    <p className="text-lg">
                        Please sign in
                    </p>
                    <SignInButton provider="google"/>
                </div>
            )}
        </div>
    );
}