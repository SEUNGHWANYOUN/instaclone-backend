import client from "../../client";


export default {
    Mutation: { 
            editProfile: proteecedResolver( 
                async (_,
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password: newPassword,
                },
                { loggedInUser, protectResolver },

            ) => {
                protectResolver(loggedInUser);
    
                let uglyPassword = null;
                if (newPassword) {
                    uglyPassword = await bcrypt.hash(newPassword, 10);
                }
    
                const updateUser = await client.user.update({
                    where: {
                        id: loggedInUser.id,
                    },
                    data: {
                        firstName,
                        lastName,
                        username,
                        email,
                        ...(uglyPassword && {password: uglyPassword }),
                    },
    
                });
    
                if (updateUser.id) {
                    return {
                        ok: true,
                    }
                } else {
                    return {
                        ok: false,
                        error: "profile is not update",
                    }
                }
            }
        ),

    },
};