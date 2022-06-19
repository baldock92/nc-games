import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <h2 className="Home__header">Home page</h2>
      <br />
      <h3 className="Home__title">Welcome to my board games review app!</h3>
      <br />
      <h4>You are logged in as <span className="Home__user">grumpy19</span></h4>
      <img className="Home__img"
        src="https://i.guim.co.uk/img/media/696d305e8fb4ec8e33038325f5e135ad7e6f62b5/0_878_3586_2149/master/3586.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7c8a02cb30d1bc9b008a31529aa98fc1"
        alt="monopoly board game"
      />
    </>
  );
};

export default Home;
