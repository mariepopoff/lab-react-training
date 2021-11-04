import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard  from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from "./Carousel";
import NumbersTable from './NumbersTable';
import FaceBook from "./Facebook";
import SingleColorPicker from './SingleColorPicker';
import RGBColorPicker from './RGBColorPicker';


function App() {
  return (
    <div className="App">
    <section>
    <h1> IdCard </h1>
   <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
</section>
<section>
  <h1>Greetings</h1>
  <Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
</section>
<section>
  <h1>Random</h1>
  <Random min={1} max={6}/>
<Random min={1} max={100}/>
</section>
<section>
  <h1>BoxColor</h1>
  <BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
</section>
<section>
  <h1>CreditCard</h1>
  <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222" />
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" />
</section>
<section>
  <h1>Rating</h1>
  <Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

</section>
<section>
  <h1>DriverCard</h1>
  <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }} />

</section>
<section>
  <h1>LikeButton</h1>
  <LikeButton /> <LikeButton />
</section>
<section>
  <h1>ClickablePicture</h1>
  <ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>
</section>
<section>
  <h1>Dice</h1>
  <Dice />
</section>
<section>
  <h1>Carrousel</h1>
  <Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
</section>
<section>
  <h1>NumbersTable</h1>
  <NumbersTable limit={12} />
</section>
<section>
  <h1>FaceBook (Advanced)</h1>
  <FaceBook />
</section>
<h1> Lifting State Up - RGBColorPicker</h1>
<RGBColorPicker/>
    </div>
  );
}

export default App;
