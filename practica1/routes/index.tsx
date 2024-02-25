import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

type Frase = {
  frase: string;
}

//MATERIAL FOTOSENSIBLE
//https://i.gifer.com/Un13.gif
//https://usagif.com/wp-content/uploads/gifs/starfall-gif-20.gif
//diamntes cayendo: https://i.makeagif.com/media/5-27-2017/KQ0C5M.gif
//diamante girando: https://i.gifer.com/TlHZ.gif

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Frase>) => {
      try{
          const { id } = ctx.params;
          const res = await axios.get<Frase>(`https://learnyourlesson.deno.dev/`);
          if(res.status !== 200) {
              throw new Error("Failed to fetch data");
          }
          
          return ctx.render(res.data);
      }catch(err){
          throw new Error(err);
      }
  }
}

export default function Home (props: PageProps<Frase>){
  try{
    return (
      <body>
          <div class="centrar">
            <img src="https://i.gifer.com/PYh.gif" alt="Imagen Móvil" class="imagenMovil" />
          </div>
          
          <div class="centrar">
            <h1 style="background-color: #fabada "> -{">"} TU FUTURO {"<"}- </h1>
          </div>  

          <div class="centrar fila">
          <img  src="https://media.tenor.com/fVuQICSLxu8AAAAj/wolf-dancing-meme-dancing-wolf-meme.gif" alt="gif" style="width: 35%" />

            <p> 
              {props.data}
            </p>
            <img  src="https://media.tenor.com/fVuQICSLxu8AAAAj/wolf-dancing-meme-dancing-wolf-meme.gif" alt="gif" style="width: 35%"/>

          </div>
          

          <div >
            <img  class="prueba" src="https://i.gifer.com/6ICU.gif" alt="gif" />

          </div>
          
        

      </body>
        
      );
  }catch(err){
    throw new Error(err);
  }
  
}
