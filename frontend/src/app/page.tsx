import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex items-center gap-6">
        {!user && (
          <>
            <LoginLink>Sign in</LoginLink>
            <RegisterLink>Sign up</RegisterLink>
          </>
        )}
        {user && (
          <div>
            <h1>Welcome {user?.given_name}</h1>
            <LogoutLink>Sign out</LogoutLink>
          </div>
        )}
      </div>
    </main>
  );
}
