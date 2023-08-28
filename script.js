        const form = document.getElementById("search");
        const input = document.getElementById("input");
        const searchresult = document.getElementById("result");
        const morebtn = document.getElementById("more");

        const accessKey = "akgaguqDI96hlHBWZpgRdiOU3HRbUnnzUpc4YT0aFjI";
        let keyword ="";
        let page = 1;

        async function searchImg(){          
            keyword = input.value;
            const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
            
            const response = await fetch(url);
            const data = await response.json();

            if(page === 1){
                searchresult.innerHTML = "";
            }
            
            const results = data.results;

            results.map((result)=>{
                const image = document.createElement("img");
                image.src = result.urls.small;

                const imagelink = document.createElement("a");
                imagelink.href = result.links.html;

                imagelink.target = "_blank";

                imagelink.appendChild(image);
                searchresult.appendChild(imagelink);
            });
            morebtn.style.display="block";    
        }

        form.addEventListener("submit", (e)=>{    
            e.preventDefault();
            page = 1;
            searchImg();
        });

        morebtn.addEventListener('click',()=>{
            page++;
            searchImg();
        });