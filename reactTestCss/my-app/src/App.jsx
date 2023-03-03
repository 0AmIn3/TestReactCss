import './App.scss';
// import './a.css';

function App() {
  return (
    <div>
      <style>

      </style>
      <div className="conteiner">
        <header>
          <p><img src="../img/coffee-beans.png" width='35px' alt="" />Coffee house</p>
          <p>Our coffee</p>
          <p>For your pleasure</p>
        </header>
        <div className="mask" >
          <h1> Our Coffee</h1>
        </div>
        <div className="aboutBeans ">
          <div className="aboutBeansImg"></div>
          <div className="aboutBeansDeteils">
            <h1>About our beans</h1>
            <img src="../img/Beanslogo.svg" alt="" />

            <p className='mar'> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>

            <p>Afraid at highly months do things on at. Situation recommend objection do intention
              so questions.</p>
            <p>As greatly removed calling pleased improve an.</p>
            <p> Last ask him cold feel <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.</p>
          </div>
          <div className="line"></div>

        </div>
        <div className="productsMain_conteiner">
          <div className="fillSide">
            <div className="LookiingFor">
              <span>Lookiing for</span>
              <form action="">
                <input type="text" placeholder='start typing here...' />
              </form>
            </div>
            <div className="OrFilter">
              <span>Or filter</span>
              <div className="OrFilterBtns">
                <div className="OrFilterItems"><p>Brazil</p></div>
                <div className="OrFilterItems"><p>Kenya</p></div>
                <div className="OrFilterItems"><p>Columbia</p></div>
              </div>
            </div>
          </div>
          <div className="productsCreate">
            <div className="createItem">
              <img src="../img/71qBQnpQFYL.png" alt="" />
              <p>AROMISTICO Coffee 1 kg</p>
              <p>Brazil</p>
              <span>6.99$</span>
            </div>
            <div className="createItem">
              <img src="../img/71qBQnpQFYL.png" alt="" />
              <p>AROMISTICO Coffee 1 kg</p>
              <p>Brazil</p>
              <span>6.99$</span>
            </div>
            <div className="createItem">
              <img src="../img/71qBQnpQFYL.png" alt="" />
              <p>AROMISTICO Coffee 1 kg</p>
              <p>Brazil</p>
              <span>6.99$</span>
            </div>
            <div className="createItem">
              <img src="../img/71qBQnpQFYL.png" alt="" />
              <p>AROMISTICO Coffee 1 kg</p>
              <p>Brazil</p>
              <span>6.99$</span>
            </div>
            <div className="createItem">
              <img src="../img/71qBQnpQFYL.png" alt="" />
              <p>AROMISTICO Coffee 1 kg</p>
              <p>Brazil</p>
              <span>6.99$</span>
            </div>
            <div className="createItem">
              <img src="../img/71qBQnpQFYL.png" alt="" />
              <p>AROMISTICO Coffee 1 kg</p>
              <p>Brazil</p>
              <span>6.99$</span>
            </div>
          </div>
        </div>
        <footer>
          <div className="item">
            <div className="topSide">
              <p><img src="../img/coffee-beans.png" width='35px' alt="" />Coffee house</p>
              <p>Our coffee</p>
              <p>For your pleasure</p>
            </div>
            <img src="../img/Beanslogo.svg" alt="" />

          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
