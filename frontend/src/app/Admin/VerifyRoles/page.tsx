'use client'
import { useRouter } from "next/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import useSWR from "swr";

export default function VerifyRoles() {
    const { user } = useAuth0();
    const router = useRouter();
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR("http://localhost:8000/user/getAllUsers", fetcher);
    const allUsers = data?.allUsers;    

    useEffect(() => {
        if (error) console.log(error, "error at fetching data");
        allUsers?.filter((el: any) => {
            if (el.email === user?.email) {
                router.push(`/Admin/DashBoard/${el._id}`);
            } else {
                router.push('/Admin/InfoAboutStore')
            }
        })
    }, [user?.email])

    return <> {!data && <div>loading ...</div>} </>;
};
