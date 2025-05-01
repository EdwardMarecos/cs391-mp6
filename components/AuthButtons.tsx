"use client";

import { signIn, signOut} from "next-auth/react";

export function SignInButton({ provider }: { provider: string}) {
    return (
        <button
            onClick={
                () => signIn(provider)
            }
            className="h-12 px-6 m-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            Sign In with {provider}
        </button>
    );
}

export function SignOutButton() {
    return (
        <button
            onClick={
                () => signOut()
            }
            className="h-12 px-6 m-2 rounded-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
        >
            Sign Out
        </button>
    );
}