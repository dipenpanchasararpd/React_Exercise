import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');
  const [feature3, setFeature3] = useState('');

  const handleFeature1Change = (e) => {
    setFeature1(e.target.value);
  }

  const handleFeature2Change = (e) => {
    setFeature2(e.target.value);
  }

  const handleFeature3Change = (e) => {
    setFeature3(e.target.value);
  }

  return (

    <div>


      <div className='features'>
        <div className='feature feature1'>
          <h3>Feature 1</h3>
        <textarea style={{textAlign:'center'}} value={feature1} onClick={() => navigate('/feature1')} onChange={handleFeature1Change} />
        </div>
        <div className='feature feature2'>
          <h3>Feature 2</h3>
          <textarea style={{textAlign:'center'}} value={feature2} onClick={() => navigate('/feature2')} onChange={handleFeature2Change} />
        </div>
        <div className='feature feature3'>
          <h3>Feature 3</h3>
          <textarea style={{textAlign:'center'}} value={feature3} onClick={() => navigate('/feature3')} onChange={handleFeature3Change} />
        </div>
      </div>

      <hr />

      <div className='section2'>
        <div className='buttons'>
          <NavLink to="/feature1" ><button onClick={()=>setFeature1("Feature_1")}>Feature_1</button></NavLink>
          <NavLink to="/feature2" ><button onClick={()=>setFeature2("Feature_2")}>Feature_2</button></NavLink>
          <NavLink to="/feature3"><button onClick={()=>setFeature3("Feature_3")}>Feature_3</button></NavLink>
        </div>

        <div className='section3'>
          <Routes>
            <Route path="/feature1" element={<div>
              <h2>Feature 1</h2>
              <textarea style={{ height: 100 , width: 400 ,backgroundColor:'orangered' , textAlign:'center', paddingTop:80, color:'white',fontSize:15}} value={feature1} onClick={() => navigate('/feature1')} onChange={handleFeature1Change} />
            </div>}
            />
            <Route path="/feature2" element={
              <div>
                <h2>Feature 2</h2>
                <textarea style={{ height: 100 , width: 400 ,backgroundColor:'orangered' , textAlign:'center', paddingTop:80, color:'white',fontSize:15}} value={feature2} onClick={() => navigate('/feature2')} onChange={handleFeature2Change} />
              </div>}
            />
            <Route path="/feature3" element={
              <div>
                <h2>Feature 3</h2>
                <textarea style={{ height: 100 , width: 400 ,backgroundColor:'orangered' , textAlign:'center', paddingTop:80 ,color:'white',fontSize:15}} value={feature3} onClick={() => navigate('/feature3')} onChange={handleFeature3Change} />
              </div>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
