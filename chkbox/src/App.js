import { useState, useRef } from 'react';
import JsonData from './JsonData.json'
import './App.css'
const App = () => {
  const [expanded, setExpanded] = useState({});
  const selectele = useRef();
  const [check, setCheck] = useState(false);

  const toggleExpand = (key) => {
    setExpanded(prevExpanded => ({ ...prevExpanded, [key]: !prevExpanded[key] }));
  };

  const checkFnc = () => {
    console.log(selectele)
    JsonData.map(parentchk => (
      parentchk.children.map(childchk => (
        childchk.checkbox.map(chkboxs => (
          setCheck(!check),
          chkboxs.isChecked = check

        ))
      ))
    ))
  }

  return (
    <div>
      {JsonData.map(parent => (
        <div key={parent.key}>
          <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => toggleExpand(parent.key)}>
            {parent.key}
            <div>
              {
                parent.checkbox.map(val => (
                  <label key={val.checkboxKey}  >
                    <input id={parent.key} type='checkbox' onChange={checkFnc} checked={val.isChecked} />
                    {val.checkboxKey}
                  </label>
                ))
              }
            </div>
          </div>
          {expanded[parent.key] && (

            <ul>
              {parent.children.map(child => (
                <li key={child.key}>
                  {child.key}
                  <div>
                    {
                      child.checkbox.map(ele => (
                        <label key={ele.checkboxKey} >
                          <input id={`${parent.key}_${child.key}`} onChange={checkFnc} type="checkbox" checked={ele.isChecked} ref={selectele} />
                          {ele.checkboxKey}
                        </label>
                      ))
                    }
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}


    </div>
  );
};

export default App;
