import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "Class",
  access: (allow) => ({
    "{class_id}/*": [allow.guest.to(["read"])],
  }),
});
