<script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
  
    export async function load() {
      const graphcms = new GraphQLClient(
        import.meta.env.VITE_GRAPHCMS_URL,
        {
          headers: {},
        }
      )
  
      const query = gql`
      query workIndex {
        works {
          title
          desc
          image {
            url
        }
        weblink
        github
        code
          }
        }
      `
  
      const { works } = await graphcms.request(query)
  
      return {
        props: {
          works,
        },
      }
    }
  </script>
  
  <script>
    export let works

    console.log(works)
  </script>
  
  <div class="p-8 flex flex-col gap-12 lg:gap-18">
    <div class="flex gap-5 flex-col">
      <h1 class="font-futura font-black uppercase text-4xl border-solid">My Projects</h1>
    </div>
    
    <div class="flex xs:flex-col xs:gap-8 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {#each works as work}
            <div class="bg-white rounded-md h-fit">
              <img src="{work.image.url}" alt="" class="w-full object-cover rounded-t-md xl:h-[17em] lg:object-center">
                <div class="p-8 grid gap-6">
                  <h1 class="text-2xl font-futura uppercase font-bold">{work.title}</h1>
                  <p class="text-[#5D656C] xs:text-[.8em] font-source">{work.desc}</p>
                  <ul class="flex gap-3">
                    {#each work.code as code}
                      <li class="text-white bg-[#b6b7b8] xs:text-[.6em] rounded-md p-[.2em] px-2 uppercase">{code}</li>
                    {/each}
                  </ul>
                  <ul class="flex gap-4">
                    <li class="text-xl text-[#5D656C]"><a href="{work.github}" target="_blank"><a href="/"><i class="bi bi-github"></i></a></a></li>
                    <li class="text-xl text-[#5D656C]"><a href="{work.weblink}" target="_blank"><i class="bi bi-box-arrow-in-down-right"></i></a></li>
                  </ul>
                </div>
            </div>
        {/each}
    </div>
  
  </div>

  
