import { signIn } from "auth"
import Button from '@mui/material/Button';

export function SignIn({
                           provider,
                           ...props
                       }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <Button {...props}>Sign In</Button>
        </form>
    )
}
