import "./styles.css";



// A card component, I have used destructing 
function Card({person, imageSize}) {
  let thumbnailSize = 60;

  if (imageSize  > 90){
    thumbnailSize = 40 ;
  }
  return(
    <section className="profile">
      <h2>{person.name}</h2>
    <img src={person.image} alt={person.name} width={thumbnailSize} height= {thumbnailSize}/>
    <ul>
      <li>
        <b>Profession: </b> {person.profession}
        </li>
        <li>
        <b>Awards: {person.award.length}</b> {person.award.join(',')}
        </li>
        <li>
        <b>Discovered: </b> {person.discovered}
        </li>
      </ul>
      </section>
  )
}


// the main component 

export default function App() {
  return (
    <div className="App">
      <h1>Notable Scientists</h1>
      <Card person = {{
        name: "Elvis Mariga",
        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        profession: "Frontend Developer",
        discovered: "Figma",
        award: [
          'UI design lead', 
          'Figma Ambassador'
        ]
      }}
       />
        <Card person = {{
        name: "Elvis Mariga",
        image: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        profession: "Frontend Developer",
        discovered: "Figma",
        award: [
          'UI design lead', 
          'Figma Ambassador'
        ]
      }}
       />
    </div>
  );
}
