const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools = data.data.tools;
    console.log(tools);
    displayTools(tools);
}





const displayTools = (tools) => {
    const toolsContainer = document.getElementById('tools-container');
    for (const tool of tools) {

        const toolCard = document.createElement("div");
        toolCard.classList = `card w-96 bg-base-100 shadow-xl p-4`;

        toolCard.innerHTML = `
        <figure><img src="${tool.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <ol>
          <li>1 . ${tool.features[0]}</li>
          <li>2 .  ${tool.features[1]}</li>
          <li>3 . ${tool.features[2]}</li>
          </ol>
          <hr>
          <p class="font-semibold text-2xl">${tool.name}</p>
          <div class = "flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <p>${tool.published_in}</p>
          
          
          <div class= " p-2 rounded-full , bg-pink-200">
          <img  onclick = "handleShowDetails('${tool.id}')"  src ="Frame.svg" />
          </div>
        
        </div>
        `

        toolsContainer.appendChild(toolCard);
    }


}

const handleShowDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const tool = data.data;
    // console.log(tool)
    showToolsDetails(tool);
}

const showToolsDetails = (tool) => {
    console.log(tool);
    const showAllContainer = document.getElementById('show-all-container');
    showAllContainer.innerHTML = `

                    <div class="bg-white rounded-3xl p-3 flex gap-3">
                       <div class = "bg-pink-100">
                            <p class="text-2xl font-semibold text-center">${tool.description}</p>
                            <div class="flex justify-between items-center gap-2 mt-2">

                                <div class="p-2 bg-white rounded-xl">
                                    <span class="text-[#03A30A] text-xl font-bold  text-center"><p>${tool.pricing[0].price}</p>
                                    <p>${tool.pricing[0].plan}</p></span>
                                </div>
                                <div class=" p-2 bg-white rounded-xl">
                               <span class="text-[#F28927] text-xl font-bold text-center"><p>${tool.pricing[1].price}</p>
                               <p>${tool.pricing[1].plan}</p></span>
                            </div>
                           <div class="p-2 bg-white rounded-xl">
                               <span class="text-[#EB5757] text-xl font-bold  text-center"><p>${tool.pricing[2].price}</p>
                               <p>${tool.pricing[2].plan}</p></span>
                           </div>
                                </div>

                            <div class="flex justify-between gap-4 mt-3 pb-6">
                           <div>
                               <h1 class="text-xl font-extrabold">Features</h1>
                               <ul>
                                   <li> . ${tool.features[1].feature_name}</li>
                                   <li> . ${tool.features[2].feature_name}</li>
                                   <li> . ${tool.features[3].feature_name}</li>
                               </ul>
                           </div>
                           <div>
                               <h1 class="text-xl font-extrabold">Integrations</h1>
                               <ul>
                                   <li>${tool.integrations[0]}</li>
                                   <li>${tool.integrations[1]}</li>
                                   <li>${tool.integrations[2]}</li>
                               </ul>
                           </div>
                       </div>
                       </div>

                       <div>
                       
                        <div class="shadow-2xl flex flex-col justify-center items-center ">
                            <div class = "w-32">
                                <img src="${tool.image_link[0]}" alt="">
                            </div>
                            <h1 class="text-xl font-semibold text-center">${tool.input_output_examples[0].input}</h1>
                            <p class="text-sm text-gray-500">${tool.input_output_examples[0].output}</p>
                        </div>
                        
                        
                    </div>
    `

    show_details_modal.showModal();
}

loadData();