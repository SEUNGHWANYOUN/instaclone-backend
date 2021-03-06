
import {createWriteStream} from "fs";
import client from "../../client";
import {protectedResolver} from "../user.utils";



const resolverFn = 
async (_,
    {
        firstName,
        lastName,
        username,
        email,
        password: newPassword,
        bio
    },
    { loggedInUser },

) => {
    let avartarUrl =null;
    if(avartar){
        const {filename, createReadStream}= await avartar;
        const newfilename = `${loggedInUser,id}-${Date.now()}-${filename}`;
        const readstream = createReadStream();
        const writeStream=createWriteStream(
            proess.cwd()+"/uploads/"+ newfilename);
    };
   readstream.pipe(writeStream);
   avartarUrl = `http://localhost:4000/static/${newfilename}`;

  

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
            bio,
            ...(uglyPassword && {password: uglyPassword }),
            ...(avartarUrl && {avatar: avartarUrl}),
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


export default {
    Mutation: { 
            editProfile: protectedResolver( resolverFn  ),

    },
};