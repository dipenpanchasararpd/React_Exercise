import React, { useState } from 'react'
import { UserProvider } from './UserContext';
import CheckBoxs from './CheckBoxs';
import jsonData from "../jsonData.json"

function ToggleCheckBoxes() {
    const [check, setCheck] = useState();

    function checkFnc(parentKey, childKey, childCheckBoxKey,) {
        let a = false;
        jsonData.forEach(parentChk => {
            if (parentChk.key == parentKey) {
                parentChk.checkBox.forEach(parentcheckboxs => {
                    if (parentcheckboxs.checkBoxKey == childKey) {
                        parentcheckboxs.isChecked = !parentcheckboxs.isChecked;
                        a = parentcheckboxs.isChecked;
                        if (parentcheckboxs.checkBoxKey == "read" && a == false) {
                            parentChk.checkBox.forEach(allparentcheckboxs => {
                                allparentcheckboxs.isChecked = false;
                            })
                        }
                    }
                })
            }
            parentChk.children.forEach(childChk => {
                childChk.checkBox.forEach(chkBoxs => {

                    // Check For Parent Checkboxs
                    if (chkBoxs.checkBoxKey === childKey && parentChk.key === parentKey) {
                        chkBoxs.isChecked = a;

                        if (chkBoxs.isChecked == true) {
                            parentChk.checkBox.forEach(parentReadKey => {
                                if (parentReadKey.checkBoxKey === "read") {
                                    parentReadKey.isChecked = true;
                                    if (parentReadKey.isChecked == true) {
                                        childChk.checkBox.forEach(childReadKey => {
                                            if (childReadKey.checkBoxKey === "read") {
                                                childReadKey.isChecked = true;
                                            }
                                        })
                                    }
                                }
                            })
                        }
                        else {
                            parentChk.checkBox.forEach(parentReadKey => {
                                if (parentReadKey.checkBoxKey === "read" && parentReadKey.isChecked == false) {
                                    childChk.checkBox.forEach(childReadKey => {
                                        childReadKey.isChecked = false;
                                        //console.log(childReadKey)
                                    })
                                }
                            })
                        }
                    }

                    // Check For Child CheckBoxs
                    if (parentChk.key === parentKey && childChk.key === childKey && chkBoxs.checkBoxKey === childCheckBoxKey) {
                        chkBoxs.isChecked = !chkBoxs.isChecked;
                        if (chkBoxs.isChecked == true) {
                            childChk.checkBox.forEach(readKey => {
                                if (readKey.checkBoxKey === "read") {
                                    readKey.isChecked = true;
                                }
                            })
                        }
                        if (chkBoxs.checkBoxKey === "read" && chkBoxs.isChecked == false) {
                            childChk.checkBox.forEach(readKey => {
                                readKey.isChecked = false;
                            })
                        }
                        if (chkBoxs.isChecked == false) {
                            updateselectall(false);
                        }
                        else {
                            let count = 0;
                            let readcount = 0;
                            parentChk.children.forEach(CheckAllChildren => {
                                CheckAllChildren.checkBox.forEach(CheckAllchild => {
                                    if (CheckAllchild.checkBoxKey == childCheckBoxKey && CheckAllchild.isChecked == true) {
                                        count++;
                                        // console.log(count)
                                    }
                                    if (CheckAllchild.checkBoxKey == "read" && CheckAllchild.isChecked == true) {
                                        readcount++;
                                        // console.log(readcount)
                                    }

                                })
                            })
                            if (parentChk.children.length == count) {
                                updateselectall(true);
                            }
                            if (parentChk.children.length == readcount) {
                                readConter(true);
                            }
                        }
                    }
                });
            });
            function updateselectall(updatevalue) {
                if (parentChk.key == parentKey) {
                    parentChk.checkBox.forEach(parentcheckboxs => {
                        if (parentcheckboxs.checkBoxKey == childCheckBoxKey) {
                            parentcheckboxs.isChecked = updatevalue;
                        }
                        if (parentcheckboxs.checkBoxKey == "read" && updatevalue) {
                            parentcheckboxs.isChecked = updatevalue;
                        }
                        if (childCheckBoxKey == "read" && updatevalue == false) {
                            parentChk.checkBox.forEach(Allparentcheckboxs => { Allparentcheckboxs.isChecked = updatevalue; })

                        }

                    }
                    )
                }
            }
            function readConter(readcount) {
                if (parentChk.key == parentKey) {
                    parentChk.checkBox.forEach(parentcheckboxs => {
                        if (parentcheckboxs.checkBoxKey == "read" && parentKey) {
                            parentcheckboxs.isChecked = parentKey;
                        }

                    })
                }
            }
        });

        setCheck(!check);
    };

    return (
        <div>

            <CheckBoxs checkFnc={checkFnc} />

        </div>
    )
}

export default ToggleCheckBoxes