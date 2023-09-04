import reactLogo from "../assets/react.svg"

export default function Conteudo(props){

let reacLogoAlt = "ReactLogo"

    return(
        <>      <section>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat incidunt, ut quisquam sapiente explicabo earum amet saepe minus laborum facilis fuga veritatis optio esse eos sed recusandae laudantium necessitatibus.</p>
          <p>Itaque ipsum, accusantium cumque sapiente suscipit voluptatibus amet dolorem animi impedit dicta. Temporibus molestias officia delectus repellendus est, quis hic recusandae porro perspiciatis quidem culpa, itaque tempora reiciendis quasi earum!</p>
          <p>Iusto nam modi natus perferendis asperiores architecto officia rem minus cupiditate molestias quas, voluptatibus praesentium placeat ad assumenda quam totam molestiae porro sunt? Facere amet fugiat, veniam reprehenderit culpa quam?</p>
          <img src={reactLogo} alt={reacLogoAlt} />
          <img src={props.viteLogoProps} alt={props.viteLogoAltProps} />
        </div>
      </section></>
    )
}