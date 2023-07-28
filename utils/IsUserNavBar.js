import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserButton, AuthAdminButton, AuthButton } from "@/components/buttons.component";

export async function IsUserNavBar() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return (
            <AuthButton />
        )
    } else if (session?.user.role) {
        return (
           <AuthAdminButton /> 
        )
    } else
        return (
            <UserButton />
        )

}
