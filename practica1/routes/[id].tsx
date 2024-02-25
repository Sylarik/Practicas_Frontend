
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

//memes:
//https://img.panamericana.pe/slideshow/830-1423854365840.jpg


export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        try{
            const { id } = ctx.params;
            const res = await axios.get(`https://learnyourlesson.deno.dev/${id}`);
            if(res.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            
            return ctx.render(res.data);
        }catch(err){
            throw new Error(err);
        }
    }
}


const Page = (props: PageProps) => {
try{
    return (
        <body >

            <div class="centrar">
                <h1 class="especial"> .-.-.-.-. CLICKEAR .-.-.-.-.</h1>
                <p class="italic rotar"> {props.data}</p>
            </div>

            <img src="https://i.gifer.com/2a9n.gif" alt="gif" style="width: 50%" />

            <div class="centrar">
                
            </div>
        </body>
    )


}catch(err){
    throw new Error(err);
}

}

export default Page;