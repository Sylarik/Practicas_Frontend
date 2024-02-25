
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

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

            <div class="centrar" style="margin-top:30%">
                <h1 class="especial"> .-.-.-.-. CLICKEAR .-.-.-.-.</h1>
                <p class="italic rotar frases"> {props.data}</p>
            </div>

            <img src="https://i.gifer.com/2a9n.gif" alt="gif" class="explosion1" />
            <img src="https://i.gifer.com/2a9n.gif" alt="gif" class="explosion2" />
            <img src="https://i.gifer.com/2a9n.gif" alt="gif" class="explosion3" />
            <img src="https://i.gifer.com/2a9n.gif" alt="gif" class="explosion4" />
            <img src="https://i.gifer.com/2a9n.gif" alt="gif"  />

            <div class="centrar">
                
            </div>
        </body>
    )


}catch(err){
    throw new Error(err);
}

}

export default Page;