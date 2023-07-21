import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProfileScreen } from "@/components/screens/ProfileScreen.component.js"

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }


  return (
    

      <ProfileScreen />

    
  );
}
