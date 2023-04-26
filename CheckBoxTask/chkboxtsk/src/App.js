import { useState, useRef } from 'react';
import JsonData from './JsonData.json';
import './App.css';

const App = () => {
  const [expanded, setExpanded] = useState({});
  const selectele = useRef();
  const [check, setCheck] = useState();

  const toggleExpand = (key) => {
    
    setExpanded(prevExpanded => ({ ...prevExpanded, [key]: !prevExpanded[key] }));
  };

  const checkFnc = (pk, ky, childkey) => {
    JsonData.forEach(parentchk => {
      parentchk.children.forEach(childchk => {
        childchk.checkbox.forEach(chkboxs => {
          if (parentchk.key === pk && childchk.key === ky && chkboxs.checkboxKey === childkey) {

            chkboxs.isChecked = !chkboxs.isChecked;
            if (chkboxs.isChecked == true) {
              childchk.checkbox.forEach(readkey => {
                if (readkey.checkboxKey === "read") {
                  readkey.isChecked = true;
                }
              })
            }
            else {
              childchk.checkbox.forEach(readkey => {
                if (readkey.checkboxKey === "read") {
                  readkey.isChecked = false;
                }
              })
            }
          }
          if (chkboxs.checkboxKey === ky && parentchk.key === pk) {
            chkboxs.isChecked = !chkboxs.isChecked;
            parentchk.checkbox.map(parentChks => {

              if (parentChks.checkboxKey === ky) {

                parentChks.isChecked = chkboxs.isChecked;

              }

            });
          }
        });
      });
    });
    setCheck(!check);
  };


  return (
    <div>
      {JsonData.map(parent => (
        <div key={parent.key}>
          <div style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            <h3 onClick={() => toggleExpand(parent.key)}>{parent.key}</h3>
            <div>
              {parent.checkbox.map(val => (
                <label key={val.checkboxKey}>
                  <input
                    id={val.checkboxKey}
                    type='checkbox'
                    onChange={() => checkFnc(parent.key, val.checkboxKey)}
                    checked={val.isChecked}
                    ref={selectele}
                  />
                  {val.checkboxKey}
                </label>
              ))}
            </div>
          </div>
          {expanded[parent.key] && (
            <ul>
              {parent.children.map(child => (
                <li key={child.key}>
                  {child.key}
                  <div>
                    {child.checkbox.map(ele => (
                      <label key={ele.checkboxKey}>
                        <input
                          id={ele.checkboxKey}
                          onChange={() => checkFnc(parent.key, child.key, ele.checkboxKey)}
                          type="checkbox"
                          checked={ele.isChecked}
                          ref={selectele}
                        />
                        {ele.checkboxKey}
                      </label>
                    ))}
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