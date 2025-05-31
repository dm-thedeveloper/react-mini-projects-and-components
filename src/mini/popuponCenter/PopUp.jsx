import React, { useState } from 'react';
import "./popup.css"


export default function PopUp() {
const [open,setOpen] =useState(false);

  return (<>
<div className="popUp--body">
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo delectus quaerat molestiae molestias, a aperiam corrupti cumque dolor hic consequuntur, tempore, unde consequatur consectetur possimus alias dignissimos neque ut.
    Suscipit nihil accusantium ex et accusamus quia iusto, modi illo a quas eum dolorem explicabo architecto voluptatibus sit doloribus, temporibus perspiciatis reprehenderit fuga. Illum sed hic libero earum excepturi amet!
    Totam, sed necessitatibus? Ab hic temporibus officiis cumque quia dolores! Excepturi deleniti voluptates dolorem, a ullam aperiam tempora rem consequuntur cupiditate corrupti beatae autem unde id, alias quidem vel. Quam!
    Ab quod inventore, fuga incidunt hic similique reiciendis non assumenda doloribus deleniti nisi dolores culpa aliquid explicabo quisquam expedita voluptates optio voluptatibus rerum rem? Dicta iste rem magni id hic.
    Eum molestias aut voluptatum id earum perferendis fugiat doloremque architecto labore velit repellat consectetur fuga, inventore, saepe beatae, reiciendis impedit minima hic rem! Quaerat unde, aspernatur doloremque expedita accusamus quo!
    Excepturi suscipit sint blanditiis sunt earum laborum corporis repellendus, optio atque obcaecati aliquid error? Quisquam voluptatum rem quaerat molestias ex in, consequuntur, ratione sed vel ab ipsam dolorem error amet.
    Ratione et dolores at! Nulla ullam excepturi placeat quasi pariatur sed, animi doloribus ducimus blanditiis temporibus soluta consequuntur modi rem dolor quo rerum ad deleniti maxime doloremque? Ab, esse quidem!
    Voluptates, reiciendis. Suscipit officiis quod voluptas accusamus qui ex, vel, excepturi consequatur dolore, eaque harum exercitationem. Consequatur distinctio, corporis in, veniam necessitatibus quidem ipsam sapiente nulla, aliquid omnis praesentium provident.
    Dolores tempore porro eveniet tenetur enim corrupti cum perferendis dolor, ut eaque dignissimos illo magni, cupiditate explicabo soluta perspiciatis reiciendis aperiam architecto fugiat eligendi repellat optio! Illo impedit neque praesentium!
    Optio vitae quae sit? Laboriosam nulla labore officia veritatis consectetur perferendis numquam quo doloremque et expedita neque ut, impedit ullam sint, cumque dicta corrupti maiores recusandae veniam voluptatum accusamus sunt.
    Veniam quibusdam cumque sed labore assumenda! Voluptate iusto nihil consequatur quos, veniam corrupti, enim unde eum voluptatem, rerum architecto mollitia commodi id nobis blanditiis itaque porro aperiam voluptates facilis debitis.
    Totam id necessitatibus sint qui, quidem tempora aperiam autem ducimus velit recusandae libero explicabo, fuga, voluptatum adipisci? Tempora, consectetur aliquam laboriosam velit, temporibus soluta id minus neque culpa necessitatibus molestias.
    Ullam, eum, ex nesciunt illo dolorum deleniti commodi perferendis exercitationem veniam rem accusamus dolore quidem laudantium tenetur ab reiciendis, quos quaerat alias nisi sunt! Sapiente officia vero labore atque fuga.
    Assumenda laborum consequuntur facere laudantium? Perspiciatis sit accusantium sed expedita, nobis cumque possimus! Ad sunt eum fugit et repellat esse blanditiis. Ducimus dolor quidem earum fugit voluptas, voluptatem repellat suscipit.
    Rem aut cupiditate a temporibus at sint eaque obcaecati earum, pariatur ratione sequi est? Et, laborum iure nihil repudiandae cum facilis magnam. Fuga assumenda esse reprehenderit ea quibusdam doloremque incidunt!
    Corporis asperiores modi laborum rerum architecto quia, explicabo beatae nemo distinctio? Praesentium repudiandae natus quisquam accusamus doloribus, quasi voluptatem iure tempore? Quam eius et, possimus iste explicabo ullam suscipit dolorem.
    Sed ex labore dolorem distinctio dolores ullam animi at vitae reprehenderit enim, quia dignissimos, molestiae consequuntur facilis. Accusamus atque inventore distinctio iure at perspiciatis, provident accusantium! Modi, possimus. Magni, modi?
    Cupiditate corrupti ab repudiandae similique, sunt illum optio, facilis, iste expedita enim exercitationem commodi dignissimos dicta? Minima officiis doloremque non et esse mollitia saepe! Dignissimos placeat soluta eos veritatis atque.
    Praesentium ducimus recusandae sint expedita architecto cupiditate voluptatum corporis distinctio quae, sed velit culpa aut numquam? Sequi esse nam quasi quis tenetur maiores qui sunt numquam alias corporis? Impedit, culpa.
    Eligendi, dolorum inventore magni amet aut accusantium facilis pariatur placeat in. Corrupti minima natus doloribus, magni itaque doloremque nostrum, illum cupiditate sunt nulla quasi aliquid fugiat quis minus vel voluptate.
</p>

{
    open?
    <div className="popup">

<h1><center>HeLLo Sir I am The PopUp.</center></h1>

<button onClick={()=>setOpen(false)}>Close Pop-Up</button>


</div>:

<button onClick={()=>setOpen(true)} className="open">Open--Pop-Up</button>

}


  </div>









</>  )
}
