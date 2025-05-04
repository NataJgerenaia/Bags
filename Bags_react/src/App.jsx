import Card from './Card'
import './App.css'
import bagMiuMiu from './assets/bag_miu_miu.png'
import bagPrada from './assets/bag_prada.png'
import bagFerragamo from './assets/bag_ferragamo.png'
import bagLuisVuitton from './assets/bag_luis_vuitton.png'


function App() {
const bags = [
  {
    img: bagMiuMiu,
    title: "Miu Miu Bag",
    color:"black"
  },
  {
    img: bagPrada,
    title: "Prada Bag",
    color:"black"
  },
  {
    img: bagFerragamo,
    title: "Ferragamo Bag",
    color:"blue"
  },
  {
    img: bagLuisVuitton,
    title: "Luis Vuitton Bag",
    color:"blue"
  }
]

  return (
    <>
      {bags.map((bag, i)=>(
        <Card 
        key={i}
        img = {bag.img}
        title = {bag.title}
        color = {bag.color}
        />
      ))}
    </>
  )
}

export default App
