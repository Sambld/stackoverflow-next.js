import { Question } from "@/components/shared/forms/Question";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";

import React from "react";

const Page = async () => {
  const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  console.log("clerk id : ", userId);
  const fakeId = "user_abc123def456";

  const mongoUser = await getUserById({ fakeId });
  const id = mongoUser._id;

  return (
    <div>
      <div>
        <Question mongoUserId={JSON.stringify(id)} />
      </div>
    </div>
  );
};

export default Page;
